function begin_introduction () {
    return {
        timeline: [
            {
                // 进入全屏
                type: 'fullscreen',
                fullscreen_mode: true,
                message: "<p style='font: bold 42px 微软雅黑; color: #B22222'>\
                    欢迎参与我们的实验</p>\
                    <p style='font: 30px 微软雅黑; color: black'><br/>\
                    <单击下方 我同意 进入实验程序><br/><b>实验过程中请勿退出全屏</b>\
                    <br/><br/></p>\
                    <p style='font: 24px 华文中宋; color: grey'>\
                    南京师范大学心理学院<br/>2021年</p>",
                    button_label: "我同意"
            }, {
                // 指导语部分
                type: "instructions",
                pages: [
                    "<p style='text-align: left'>\
                    指导语：<br/>\
                    指导语内容</p>",
                ],
                show_clickable_nav: true,
                allow_backward: false,
                button_label_previous: "返回",
                button_label_next: "继续",
            }
        ]
    }
}

function info_get () { 
    return {
        timeline: [{ 
            // 实验编号填写
            type:"survey-html-form",
            preamble:"<p style =' color : white'>你分配到的实验编号是</p>",
            html:"<p><input name='Q0' type='text' value='" + exper_number + "' disabled='disabled' /></p><p><input name='Q1' type='number' value='' required/></p>",
            button_label:"继续",
            on_finish: function (data) {
                data.number = exper_number + data.response.Q1.padStart(4, "0");
                info["index"] = exper_number + data.response.Q1.padStart(4, "0");
            },
            on_load: function () { 
                let bb = document.getElementById("jspsych-content");
                let label1 = document.createElement("p");
                label1.id = "numberf", label1.textContent = "你的最终编号是：" + document.getElementsByTagName("input")[0].value + document.getElementsByTagName("input")[1].value.toString().padStart(4, "0");
                label1.style = "font-size: 20px;color: white;";
                bb.appendChild(label1);
                document.getElementsByTagName("input")[1].addEventListener("input", function(a){
                    document.getElementById("numberf").textContent = "你的最终编号是：" + document.getElementsByTagName("input")[0].value + document.getElementsByTagName("input")[1].value.toString().padStart(4, "0");
                })
            }
        }, {
            type:"survey-html-form",
            preamble:"<p style = 'color : white'>你的实验次数是</p>",
            html:"<p><input name='Q0' type='number' value=' ' required/></p>",
            button_label:"继续",
            on_finish: function (data) {
                info["NumberOfExperiments"] = data.response.Q0;
            }
        }, {
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
                localStorage.setItem("info", JSON.stringify(info));
            }
        }]
    }
}

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