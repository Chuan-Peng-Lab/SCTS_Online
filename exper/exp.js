// 信息搜集
function info_get () { 
    return {
        timeline: [{
            type:"survey-html-form",
            preamble:"<p style =' color : white'>你的名字是</p>",
            html:"<p><input name='Q0' type='text' value='' required/></p>",
            button_label:"继续",
            on_finish: function (data) {
                info["Name"] = data.response.Q0;
            }
        }, {
            type: 'html-button-response',
            stimulus: "<p style = 'color : white'>你的性别</p>",
            choices: ['男', '女', '其他'],
            on_finish: function (data) {
                info["Sex"] = data.button_pressed == 0 ? "Male" : (data.button_pressed == 1 ? "Female" : "Other")
            }
        }, {
            type: 'survey-html-form',
            preamble: "<p style = 'color : white'>你的出生年</p>",
            html: `
        <p><input name="Q0" type="number" placeholder="1900~2020" min=1900 max=2020
        oninput="if(value.length>4) value=value.slice(0,4)" required /></p>`,
            button_label: '继续',
            on_finish: function (data) {
                info["BirthYear"] = data.response.Q0;
            }
        }, {
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
            func: function() {
                localStorage.removeItem(info["index"]);
                localStorage.setItem(info["index"], JSON.stringify(info));
            }
        }]
    }
}

// 维度评分 指导语
function introducation_prac1() { 
    return {
        // 指导语部分
        type: "instructions",
        pages: [
            "<p style='text-align: left'>\
            指导语：维度评分<br/>\
            指导语内容</p>",
        ],
        show_clickable_nav: true,
        allow_backward: false,
        button_label_previous: "返回",
        button_label_next: "继续",
    }
}

// 效价评分 指导语
function introducation_prac2() { 
    return {
        // 指导语部分
        type: "instructions",
        pages: [
            "<p style='text-align: left'>\
            指导语：效度评分<br/>\
            指导语内容</p>",
        ],
        show_clickable_nav: true,
        allow_backward: false,
        button_label_previous: "返回",
        button_label_next: "继续",
    }
}

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
                    wordGroup: (i + 1).toString(),
                    dimensionGroup: Math.floor(tmpWord.length / word_block_num).toString(),
                    serial: j
                });
            }
            variable.push(a);
        }
    }
    let prac1 = {
        type: 'survey-multi-choice',
        questions: [
            {
                prompt: function () {
                    return '<p id="text">以下词汇是否可以用于描述某个人的' + jsPsych.timelineVariable("dimension") + '</p>' + '<p id="text">' + jsPsych.timelineVariable("word") + '</p>';
                }, options: [1, 2, 3, 4, 5, 6, 7, 8, 9], horizontal: true
            }
        ],
        preamble: function() { 
            return '<style> \
            #text{ text-align: center; font-size: 25px; margin: 0.5em; }\
            </style>';
        },
        on_load: function () {
            // 定义头部文字样式
            document.getElementsByClassName("survey-multi-choice")[0].style = "text-align: center; font-size: 25px;";

            // 隐藏 continue 按钮
            document.getElementById("jspsych-survey-multi-choice-next").style.visibility = "hidden";

            // 创建下方提示语
            let p = document.createElement("p");
            p.innerHTML = "请表明你对该陈述的同意程度<br/>（1 = 非常不同意，9 = 非常同意）";
            p.style = "font-size: 20px; font-weight: normal;";
            document.getElementById("jspsych-content").appendChild(p);

            $("input[type=radio]").on("input", function (a) {
                // 判断是否全部选择了
                if ($("input[type=radio]:checked").length > 0) {
                    if (timeout != 0) { clearTimeout(timeout); timeout = 0; }
                    timeout = setTimeout(function () {
                        $("#jspsych-survey-multi-choice-next").click()
                    }, delay);
                }
            });
            $("body").keydown(function (a) {
                let key = a.originalEvent.key;
                if (parseInt(key) > 0) {
                    $("input[type=radio]")[parseInt(key) - 1].click();
                }
            });
        },
        on_finish: function (data) {
            // 分值的呈现
            data.word = jsPsych.timelineVariable("word", true);
            data.wordLen = jsPsych.timelineVariable("len", true);
            data.dimension = jsPsych.timelineVariable("dimension", true);
            data.wordGroup = jsPsych.timelineVariable("wordGroup", true);
            data.dimensionGroup = jsPsych.timelineVariable("dimensionGroup", true);
            data.serial = jsPsych.timelineVariable("serial", true);

            data.subIdx = info["index"];
            data.NumberOfExperiments = info["NumberOfExperiments"];
            data.Name = info["Name"];
            data.Sex = info["Sex"];
            data.Education = info["Education"];
            data.BirthYear = info["BirthYear"];
            data.rating = data.response.Q0;
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
        timeline_variables: jsPsych.randomization.shuffle(variable.splice(Math.floor(Math.random() * variable.length), 1))[0]
    });
    while (variable.length > 0) {
        timeline.push({
            type: "html-keyboard-response",
            stimulus: "休息一下吧",
            choices: jsPsych.ALL_KEYS
        }, {
            timeline: [prac1],
            timeline_variables: jsPsych.randomization.shuffle(variable.splice(Math.floor(Math.random() * variable.length), 1))[0]
        });
    }

    // 第二部分 效价打分
    // 定义一下第二个单词block,防止时间线变量为空
    variable = [];
    for (let i = 0; i < word_tmp.length; i++) {
        variable.push({
            word: word_tmp[i],
            len: word_tmp[i].length
        });
    }
    variable = jsPsych.randomization.shuffle(variable);
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
            p.innerHTML = "请表明你对该单词的积极/消极程度评分<br/>（1 = 非常消极，9 = 非常积极）";
            p.style = "font-size: 20px; font-weight: normal;";
            document.getElementById("jspsych-content").appendChild(p);

            $("input[type=radio]").on("input", function (a) {
                // 判断是否全部选择了
                // 如果全部选择了，则延迟1秒跳转
                if ($("input[type=radio]:checked").length > 0) {
                    if (timeout != 0) { clearTimeout(timeout); timeout = 0; }
                    timeout = setTimeout(function () {
                        $("#jspsych-survey-multi-choice-next").click()
                    }, delay);
                }
            });

            $("body").keydown(function (a) {
                let key = a.originalEvent.key;
                if (parseInt(key) > 0) {
                    $("input[type=radio]")[parseInt(key) - 1].click();
                }
            });
        },
        on_finish: function (data) {
            // 分值的呈现
            data.validity = data.response.Q0;
            data.word = jsPsych.timelineVariable("word", true);
            data.subIdx = info["index"];
            data.NumberOfExperiments = info["NumberOfExperiments"];
            data.Name = info["Name"];
            data.Sex = info["Sex"];
            data.Education = info["Education"];
            data.BirthYear = info["BirthYear"];

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
            stimulus: "休息一下吧",
            choices: jsPsych.ALL_KEYS
        }, {
            timeline: [prac2],
            timeline_variables: variable.splice(0, Math.min(word_block_num, variable.length))
        });
    }

    jsPsych.init({
        timeline: timeline,
        default_iti: blank,
        on_finish: function () {
            jsPsych.data.displayData();

            $("#jspsych-content")[0].innerHTML = "正在保存数据中，请稍后";

            jsPsych.data.get().filter({ save: true }).filterColumns(["subIdx", "Name", "Sex", "Education", "BirthYear", "word", "wordLen", "wordGroup", "dimension", "dimensionGroup", "rating", "validity", "rt", "response", "trial_index", "time_elapsed", "internal_node_id"]).localSave('csv', info["index"] + "_" + info["NumberOfExperiments"] + '.csv');

            $("#jspsych-content")[0].innerHTML = "<div><p style = 'color:white; font-size : 20px'>实验结束，\
            非常感谢您的参与！</p > \
            <p style = 'color:white; font-size : 20px'>如果您对实验结果感兴趣，可以发邮件与我联系。</p > \
            <p style = 'color:white; font-size : 20px'>HCP（Email: xxx@gmail.com） </p ></div>";
        },
        show_progress_bar: true,
        message_progress_bar: "南京师范大学心理学院 | 计算社会认知实验室"
    });
}