// auto run
function auto() { 
    setInterval(function(){ 
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keydown", {key: "1"}));
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keydown", {key: "w"}));
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keyup", {key: "w"}));
    }, 1000)
}


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