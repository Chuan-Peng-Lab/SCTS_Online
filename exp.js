// 信息搜集
function SCTS_info_get() {
    return {
        timeline: [{
            type: "survey-html-form",
            preamble: "<p style =' color : white'>你的名字是</p>",
            html: "<p><input name='Q0' type='text' value='' required /></p>",
            button_label: "继续",
            on_finish: function (data) {
                info["Name"] = data.response.Q0;
            }
        }, {
            type: 'html-button-response',
            stimulus: "<p style = 'color : white'>你的性别</p>",
            choices: ['男', '女', '其他'],
            on_finish: function (data) {
                // console.log(data)
                info["Sex"] = data.response == 0 ? "Male" : (data.response == 1 ? "Female" : "Other")
            }
        }, {
            type: 'survey-html-form',
            preamble: "<p style = 'color : white'>你的出生年</p>",
            html: `
        <p><input name="Q0" type="number" placeholder="1900~2021" min=1900 max=2021
        oninput="if(value.length>4) value=value.slice(0,4)" required /></p>`,
            button_label: '继续',
            on_finish: function (data) {
                info["BirthYear"] = data.response.Q0;
            }
        }, { // 出生地
            type: 'survey-html-form',
            preamble: "<p style = 'color : white;text-align: left;font-weight: 500;font-size: 22px;'>地址信息收集</p>",
            html: `
            <style>select{width: 130px;}</style>
        <p>你出生所在地：<select id="bsf" data-type="b" data-content="sf">
            <option value="1">选择省</option>
        </select><select id="bsq" data-type="b" data-content="sq">
            <option value="1">选择市</option>
        </select><select id="bxx" data-type="b" data-content="xx">
            <option value="1">选择区</option>
        </select><br/>
        出生户口类型：<input type="radio" name="BirthType" id="bCity"><label for="bCity">城市</label>
        <input type="radio" name="BirthType" id="bCou"><label for="bCou">农村</label></p>
        <p>你当前所在地：<select id="csf" data-type="c" data-content="sf">
            <option value="1">选择省</option>
        </select><select id="csq" data-type="c" data-content="sq">
            <option value="1">选择市</option>
        </select><select id="cxx" data-type="c" data-content="xx">
            <option value="1">选择区</option>
        </select><br/>
        现在户口类型：<input type="radio" name="CurrType" id="cCity"><label for="cCity">城市</label>
        <input type="radio" name="CurrType" id="cCou"><label for="cCou">农村</label></p>`,
            button_label: '继续',
            on_finish: function (data) {

            },
            on_load: function () {
                // 加载数据
                $.ajax({
                    url: "getAddress.json",
                    type: "get",
                    dataType: "json",
                    success: function (addresses) {
                        // 省份信息添加
                        $("select[data-content=sf]").empty();
                        Object.keys(addresses).forEach((v, i) => {
                            let option = $("<option>").val(v).text(v);
                            $("select[data-content=sf]").append(option);
                        });
                        $("select[data-content=sf]").val(-1);
                        $("#jspsych-survey-html-form-next").attr("disabled", true);

                        let canGo = function () { 
                            if(info["Birthplace"] && info["Currentplace"] && info["BirthType"] && info["CurrType"]) { 
                                $("#jspsych-survey-html-form-next").attr("disabled", false);
                            } else { 
                                $("#jspsych-survey-html-form-next").attr("disabled", true);
                            }
                        }
                        // 省份信息修改
                        $("select[data-content=sf]").change(function () {
                            // console.log($(this).val(), $(this).find("option:selected").text())
                            let type = $(this).attr("data-type");
                            let sele = $("select[data-content=sq][data-type=" + type + "]");
                            sele.empty();

                            let c = addresses[$(this).val()];
                            Object.keys(c).forEach((v,i) => {
                                let option = $("<option>").val(v).text(v);
                                sele.append(option);
                            });
                            sele.val(-1);
                            canGo();
                        });
                        // 市区信息修改
                        $("select[data-content=sq]").change(function () {
                            // console.log($(this).val(), $(this).find("option:selected").text())
                            let type = $(this).attr("data-type");
                            let sele = $("select[data-content=xx][data-type=" + type + "]");
                            sele.empty();

                            let c = addresses[$("select[data-content=sf][data-type=" + type + "]").val()][$("select[data-content=sq][data-type=" + type + "]").val()];
                            Object.keys(c).forEach((v,i) => {
                                let option = $("<option>").val(v).text(c[v]);
                                sele.append(option);
                            });
                            sele.val(-1);
                            canGo();
                        });
                        // 县乡信息修改
                        $("select[data-content=xx]").change(function () {
                            let type = $(this).attr("data-type");
                            let province = $("select[data-content=sf][data-type=" + type + "]").find("option:selected").text(),
                                city = $("select[data-content=sq][data-type=" + type + "]").find("option:selected").text(),
                                area = $(this).find("option:selected").text();
                            info[(type == "b" ? "Birthplace" : "Currentplace")] = province + city + area;
                            canGo();
                        });
                        $("input").on("input", function() { 
                            info[$(this).attr("name")] = $("label[for=" + $(this).attr("id") + "]").text();
                            canGo();
                        });
                    }
                });
            }
        },  {
            type: 'survey-html-form',
            preamble: "<p style = 'color : white'>教育经历</p>",
            html: `
           <p><select name="Q0" size=10>
           <option value=1>小学以下</option>
           <option value=2>小学</option>
           <option value=3>初中</option>
           <option value=4>高中</option>
           <option value=5>大学</option>
           <option value=6>硕士</option>
           <option value=7>博士</option>
           <option value=8>其他</option>
           </select></p>`,
            button_label: '继续',
            on_finish: function (data) {
                let edu = ["below primary school", "primary school", "junior middle school", "high school", "university", "master", "doctor", "other"];

                info["Education"] = edu[parseInt(data.response.Q0) - 1];
            }
        }, {
            type: "call-function",
            func: function () {
                localStorage.removeItem(info["index"]);
                localStorage.setItem(info["index"], JSON.stringify(info));

                $("#jspsych-progressbar-container span").css("visibility", "hidden");
            }
        }]
    }
}

// 维度评分 指导语
function introducation_prac1() {
    let ss = "   \
    .title{ \
        font-size: " + 30 + "px;\
        text-align: center;\
        font-weight: 700;\
    }\
    p{ \
        font-size: " + 20 + "px; \
        text-indent: 2em; \
        text-align: left; \
        margin-block: " + 10 + "px; \
        line-height: 1.5em; \
    } \
    .example{ \
        text-align: center; \
        font-weight: 100; \
    }";
    return {
        // 指导语部分
        type: "instructions",
        pages: [
            "<div class='contacts'>   <p class='title' style='color:#fff'>维度评分</p> <div style='color: white;'class='content_box'> \
            <style>" + ss + " \
        </style>    \
<div style='text-align: left'>\
<p>您需要对给出的词语进行维度评分，在每次实验开始您会看到以下问题：</p> \
<p class='example'>【词语】可以用于描述某个人的【维度】</p> \
<p class='example'>1  2  3  4  5  6  7  8  9 </p> \
<p class='example'>请表明您对该陈述的同意程度</p> \
<p class='example'>（1=非常不同意，9=非常同意）</p> \
<p class='example'><br/>维度定义</p> \
\
<p>其中【维度】是从能力, 道德, 社交能力, 外貌, 社会经济地位五个维度中随机选出的，您需要对该段描述进行1-9分的评分，其中1分表示非常不同意，9分表示非常同意。</p> \
<p>其中：</p> \
<p>道德：用于描述人的道德品格或道德品质（包括积极与消极）</p> \
<p>能力：用于描述人可用来完成某一项目标或者任务的综合素质（这里的目标和任务不包括人际交往）</p> \
<p>社交能力：用于描述人的人际交往能力</p> \
<p>外貌：用于描述人的长相、身材等</p> \
<p>社会经济地位：用于描述人的社会地位和经济水平等</p> \
</div>", "<div class='contacts'>   <p class='title' style='color:#fff'>维度评分</p> <div style='color: white;'class='content_box'>\
            <style>" + ss + " \
        </style>    \
<div style='text-align: left'>\
<p>一个具体例子如下：</p> \
<p class='example'><img src='sample.png' /></p>\
\
<p>如果您已经明白本研究的任务，请按 <strong>继续</strong> 开始正式实验。</p> \
<p>如果您还有疑问，请咨询实验人员。</p> \
</div>"
        ],
        show_clickable_nav: true,
        allow_backward: false,
        button_label_previous: "返回",
        button_label_next: "继续",
    }
}

// 效价评分 指导语
function introducation_prac2() {
    let ss = "   \
    .title{ \
        font-size: " + 30 + "px;\
        text-align: center;\
        font-weight: 700;\
    }\
    p{ \
        font-size: " + 20 + "px; \
        text-indent: 2em; \
        text-align: left; \
        margin-block: " + 10 + "px; \
        line-height: 1.5em; \
    } \
    .example{ \
        text-align: center; \
        font-weight: 100; \
    }";
    return {
        // 指导语部分
        type: "instructions",
        pages: [
            "<div class='contacts'>   <p class='title' style='color:#fff'>效度评分</p> <div style='color: white;'class='content_box'>\
            <style>" + ss + "\
        </style>    \
<div style='text-align: left'> \
<p>您需要对给出的词语是否消极或者积极进行评分，在每次实验开始您会看到以下问题：</p> \
<p class='example'>【词语】</p> \
<p class='example'>1  2  3  4  5  6  7  8  9 </p> \
<p class='example'>请表明您对该词语的积极/消极程度评分 </p> \
<p class='example'>（1=非常消极，9=非常积极）</p> \
<p>如果您明白了，请按 <strong>继续</strong> 查看示例。</p> \
\
</div>", "<div class='contacts'>   <p class='title' style='color:#fff'>效度评分</p> <div style='color: white;'class='content_box'>\
<style>" + ss + "\
</style>    \
<div style='text-align: left'> \
<p>一个具体例子如下：</p> \
<p class='example'><img src='sample2.png' /></p>\
\
<p>如果您明白了，请按 <strong>继续</strong> 进行正式实验。</p> \
<p>如果您还有疑问，请咨询实验人员。</p> \
\
</div>"
        ],
        show_clickable_nav: true,
        allow_backward: false,
        button_label_previous: "返回",
        button_label_next: "继续",
    }
}
// 陷阱题

// 主体程序
function start() {

    // 第一部分 维度评分 1
    let tmpWord = jsPsych.randomization.shuffle(word_tmp);
    // 对单词切片分组
    while (tmpWord.length > 0) {
        let p = tmpWord.splice(0, Math.min(word_block_num, tmpWord.length));
        for (let i = 0; i < dimension.length; i++) {
            let a = [];
            for (let j = 0; j < p.length; j++) {
                a.push({
                    word: p[j],
                    dimension: dimension[i],
                    len: p[j].length,
                    dimensionGroup: (i + 1).toString(),
                    wordGroup: Math.floor(tmpWord.length / word_block_num).toString(),
                    serial: j,
                    isTrap: false
                });
            }
            variable.push(a);
        }
    }
    variable = jsPsych.randomization.shuffle(variable);
    // 陷阱题
    let trap1 = [
        {word: "【西安】是否可以用于描述中国的【首都】", isTrap: true},
        {word: "【月球】是否可以用于描述人类当前居住的【星球】", isTrap: true}
    ];
    trap1.forEach((v, i) => {
        variable[variable.length - 1 - i * 3].splice(0,0,v);
    });

    let prac1 = {
        type: 'survey-multi-choice',
        questions: [
            {
                prompt: function () {
                    return jsPsych.timelineVariable("isTrap", true) ? jsPsych.timelineVariable("word", true) : 
                        '<p id="text">【' + 
                            jsPsych.timelineVariable("word", true) + 
                            '】可以用于描述某个人的【' + jsPsych.timelineVariable("dimension", true) + 
                            '】</p>';
                }, options: [1, 2, 3, 4, 5, 6, 7, 8, 9], horizontal: true
            }
        ],
        preamble: function () {
            return '<style> \
            #text{ text-align: center; font-size: 25px; margin: 0.5em; }\
            </style>';
        },
        on_load: function () {
            // 定义头部文字样式
            document.getElementsByClassName("survey-multi-choice")[0].style = "text-align: center; font-size: 25px;";

            // 隐藏 continue 按钮
            document.getElementById("jspsych-survey-multi-choice-next").style.visibility = "hidden";

            let describe = {
                "能力": "用于描述人可用来完成某一项目标或者任务的综合素质（这里的目标和任务不包括人际交往）",
                "道德": "用于描述人的道德品格或道德品质",
                "外貌": "用于描述人的长相、身材等",
                "社交能力": "用于描述人的人际交往能力",
                "社会经济地位": "用于描述人的社会地位和经济水平等"
            }, dime = jsPsych.timelineVariable("dimension", true);
            // 创建下方提示语
            let p = document.createElement("p");
            p.innerHTML = jsPsych.timelineVariable("isTrap", true) ? "请表明你对该陈述的同意程度<br/>（1 = 非常不同意，9 = 非常同意）" : 
                "<span style='position: absolute;bottom: 3em;left: calc(50% - 450px);width: 900px;font-weight: 100;'>" +
                    dime + ":" + describe[dime] +
                    "</span><br/>请表明你对该陈述的同意程度<br/>（1 = 非常不同意，9 = 非常同意）";
            p.style = "font-size: 20px; font-weight: normal;";
            document.getElementById("jspsych-content").appendChild(p);

            $("input[type=radio]").on("input", function (a) {
                // 判断是否全部选择了
                $("#jspsych-survey-multi-choice-next").attr("choose", "1");
            });
            $("body").keydown(function (a) {
                let key = a.originalEvent.key;
                if(key == " " & parseInt($("#jspsych-survey-multi-choice-next").attr("choose"))) {
                    $("#jspsych-survey-multi-choice-next").click();
                }
                if (parseInt(key) > 0) {
                    $("input[type=radio]")[parseInt(key) - 1].click();
                }
            });
        },
        on_finish: function (data) {
            // 分值的呈现
            data.word = jsPsych.timelineVariable("word", true); // 单词
            data.wordLen = jsPsych.timelineVariable("len", true); // 单词长度
            data.dimension = jsPsych.timelineVariable("dimension", true); // 维度 能力/
            data.dimensionEn = dimEn[data.dimension]; // 维度 能力/
            data.wordGroup = jsPsych.timelineVariable("wordGroup", true); // 单词组
            data.dimensionGroup = jsPsych.timelineVariable("dimensionGroup", true); // 维度组
            data.serial = jsPsych.timelineVariable("serial", true); // 序列号

            data.rating = data.response.Q0; // 维度评分
            data.type = parseInt(jsPsych.data.getURLVariable("type"));
            data.isTrap = jsPsych.timelineVariable("isTrap", true);
            // 给窗口初始化
            $("body").unbind();
            clearTimeout(timeout);
            timeout = 0;
        },
        data: {
            save: true
        }
    };
    timeline.push(introducation_prac1(), {
        timeline: [prac1],
        timeline_variables: jsPsych.randomization.shuffle(variable.splice(0,1)[0])
    });
    while (variable.length > 0) {
        timeline.push({
            type: "html-keyboard-response",
            stimulus: "<p>休息一下吧，但<strong>请注意，下一个评价的维度与之前不一致</strong></p><p>按 空格键 继续</p>",
            choices: [" "]
        }, {
            timeline: [prac1],
            timeline_variables: jsPsych.randomization.shuffle(variable.splice(0,1)[0])
        });
    }

    // 第二部分 效价打分
    // 定义一下第二个单词block,防止时间线变量为空
    let trap2 = [
        {word: "请在本题选择第六个选项", isTrap: true}
    ]
    variable = [];
    for (let i = 0; i < word_tmp.length; i++) {
        variable.push({
            word: word_tmp[i],
            len: word_tmp[i].length,
            isTrap: false
        });
    }
    variable = jsPsych.randomization.shuffle(variable);
    window.dd = jsPsych.utils.deepCopy(variable);
    trap2.forEach(v => {
        let half = Math.floor(window.dd.length / 2),
            deviation = Math.floor(Math.random() * (variable.length - half));
        variable.splice(0, 0, v);
    });
    let prac2 = {
        type: 'survey-multi-choice',
        questions: [
            { prompt: jsPsych.timelineVariable("word"), options: [1, 2, 3, 4, 5, 6, 7, 8, 9], horizontal: true }
        ],
        on_load: function () {
            // 定义头部文字样式
            document.getElementsByClassName("survey-multi-choice")[0].style = "text-align: center; font-size: 25px;";

            // 隐藏 continue 按钮
            document.getElementById("jspsych-survey-multi-choice-next").style.visibility = "hidden";

            // 创建下方提示语
            let p = document.createElement("p");
            p.innerHTML = jsPsych.timelineVariable("isTrap", true) ? "请您完成上述操作" : "请表明你对该词语的积极/消极程度评分<br/>（1 = 非常消极，9 = 非常积极）";
            p.style = "font-size: 20px; font-weight: normal;";
            document.getElementById("jspsych-content").appendChild(p);

            $("input[type=radio]").on("input", function (a) {
                // 判断是否全部选择了
                // 如果全部选择了，则延迟1秒跳转
                if ($("input[type=radio]:checked").length > 0) {
                    document.getElementById("jspsych-survey-multi-choice-next").style.visibility = "visible";
                }
            });


            $("input[type=radio]").on("input", function (a) {
                // 判断是否全部选择了
                $("#jspsych-survey-multi-choice-next").attr("choose", "1");
            });
            $("body").keydown(function (a) {
                let key = a.originalEvent.key;
                if(key == " " & parseInt($("#jspsych-survey-multi-choice-next").attr("choose"))) {
                    $("#jspsych-survey-multi-choice-next").click();
                }
                if (parseInt(key) > 0) {
                    $("input[type=radio]")[parseInt(key) - 1].click();
                }
            });
        },
        on_finish: function (data) {
            // 分值的呈现
            data.isTrap = jsPsych.timelineVariable("isTrap", true); // 是否是陷阱题
            data.validity = data.response.Q0; // 点击 效价分数
            data.word = jsPsych.timelineVariable("word", true); // 单词

            $("body").unbind();
            clearTimeout(timeout);
            timeout = 0;
        },
        data: {
            save: true
        }
    };

    timeline.push(introducation_prac2(), {
        timeline: [prac2],
        timeline_variables: variable.splice(0, (variable.length < word_block_num) ? variable.length : word_block_num)
    });
    while (variable.length > 0) {
        timeline.push({
            type: "html-keyboard-response",
            stimulus: "<p>休息一下吧</p><p>按 空格键 继续</p>",
            choices: [" "]
        }, {
            timeline: [prac2],
            timeline_variables: variable.splice(0, Math.min(word_block_num, variable.length))
        });
    }

    mupsyStart({
        timeline: timeline,
        default_iti: blank,
        on_finish: function () {
            mupsyEnd({
                data: jsPsych.data.get().filter({ save: true }).addToAll(info).filterColumns(
                    ["subj_idx", "Name", "Sex", "Education", "Birthplace", "BirthType", "Currentplace", "CurrType", "BirthYear", "Type",
                        "isTrap", "word", "wordLen", "wordGroup", "dimension", "dimensionEn", "dimensionGroup",
                        "rating", "validity", "rt", "response", "trial_index", "time_elapsed", "internal_node_id"]
                ),
                name: "SCTS",
                end_html: "感谢你参与本次实验，本次实验到这里就结束了",
                id: info["subj_idx"] + "_" + version + "_" + info["Series"]
            });
        },
        show_progress_bar: true,
        message_progress_bar: "南京师范大学心理学院 | 计算社会认知实验室"
    });
}