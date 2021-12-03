// auto run
function auto() {
    setInterval(function () {
        let res = Math.floor(Math.random() * 9) + 1
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keydown", { key: res.toString() }));
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keyup", { key: res.toString() }));
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keydown", { key: "w" }));
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keyup", { key: "w" }));
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
        document.getElementsByTagName("body")[0].dispatchEvent(new KeyboardEvent("keyup", { key: " " }));
    }, 1000);
}


function begin_introduction() {
    let ss = "   \
            .title{ \
                font-size: " + 30 + "px;\
                text-align: center;\
                font-weight: 700;\
            }\
            .para{ \
                font-size: " + 20 + "px; \
                text-indent: 2em; \
                text-align: left; \
                margin-block: " + 10 + "px; \
            }\
            .foot{ \
                text-align: right;\
                font-size: " + 20 + "px;\
            }";
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
                type: "instructions",
                pages: [
                    "<div class='contacts'>   <p class='title' style='color:#fff'>实验内容介绍</p> <div style='color: white;'class='content_box'>\
                <style>" + ss + "\
            </style>    \
           \
            <p class='para'>您好，欢迎参加本次实验。为充分保障您的权利，在以下关于实验的介绍结束后，您将看到一份知情同意书，表示您已经了解本研究的内容、潜在风险以及数据共享计划。如果您选择继续实验，则表示您已经清楚并同意知情同意书的所有内容。</p>\
            <p class='para'>以下是关于实验的介绍：</p>\
            <p class='para'>本实验目的是为了构建中文的社会评价词库。在本实验中，您需要<strong>在电脑上</strong>完成如下任务：</p>\
            <p class='para'><strong>第一部分，</strong>您需要对<strong>每个呈现在屏幕上的词语根据提示语进行评分</strong>，评分没有正误之分，根据您的理解和直觉进行评分即可。在评分之前，我们会告诉您需要进行评分的维度及其意义。您将会对318或319个词语从五个维度分别进行评分，这五个维度分别为：能力、道德、社交能力、外貌、社会经济地位，不同维度的评分随机交替出现。这些词可能有积极词，也可能有消极词，此时请您不要根据积极和消极进行评分，而是依据该词是否适合用来描述该维度进行评分。</p>\
            <p class='para'><strong>第二部分，</strong>您需要对词语进行效价评分。请注意，此时您需要对词语的积极/消极程度进行1-9分评分。</p>\
            <p class='para'>在正式进入实验前，若您对实验的指导语或者本实验还有不清楚之处，可咨询实验员（即联系您参加实验的同学/老师）。</p>\
            </div> </div>",
                    "<div class='contacts'><p class='title' style='color:#fff'>参与实验知情同意书</p> <div style='color: white;' class='content_box'>\
                <style>" + ss + "\
            </style>    \
                \
            <p class='para'><strong>调查目的：</strong>本实验目的是为了构建中文社会评价词库。 </p>\
            <p class='para'><strong>您需要做什么：</strong>本实验包括两部分。第一部分，维度评分，在这个阶段，您需要对每个词语与五个维度的相符情况进行1-9分评分。第二部分，效价评分，在这个阶段，您需要对每个词语的积极/消极程度进行1-9分评分。关于这两部分任务的具体说明，可见实验指导语。</p>\
            <p class='para'><strong>所需时间：</strong>本实验需要大约120分钟。</p>\
            <p class='para'><strong>风险：</strong>参加本次实验没有任何可预见的风险，但您可能会由于实验任务而感到疲劳或者无聊。</p>\
            <p class='para'><strong>收益：</strong>您在本实验中的主要收益是您对于科学研究的贡献！同时，为了补偿您参加研究所花费的时间和精力，我们将给予您一定的经济补偿（￥30-50）。该经济补偿将通过腾讯问卷进行发放）。</p>\
            <p class='para'><strong>隐私：</strong>我们将完全保密您在本实验中给出的所有信息。您的数据将被存在安全的数据库，您的信息将会被编码，您的名字也不会在任何报告中出现。此外，您数据中的隐私部分（包括姓名，联系方式等）将至少被安全保存<10>年。在该期限后，我们将会销毁这些信息以保护您的隐私。在实验结束后，去除所有个人信息的数据将会公布出来，以用于其他研究的使用和评估。</p>\
            <p class='para'><strong>自愿参与：</strong>是否让我们使用及分享您的数据将完全由您自愿决定。但是，参加本研究的前提是您愿意使用这种方式来分享您的数据。如果您不愿意，您将无法参加这项研究。</p>\
            <p class='para'><strong>退出实验的权利</strong>您有权在实验中的任何阶段退出本次实验，不会有任何的惩罚。我们会根据您完成实验的情况，补偿您在本实验所花费的时间。</p>\
            <p class='para'><strong>如何退出：</strong>如果您决定退出本次实验，请告知实验员，我们会立即终止实验。 如果您有任何疑问，请联系：胡传鹏博士（南京师范大学心理学院，江苏省南京市鼓楼区宁海路122号，210024；Email: hcp4715@hotmail.com；Tel: 15910258380） </p>\
            <p class='para'><strong>同意书：</strong>如果您点击“继续”按键继续实验，代表您同意向未来的研究共享您的数据，同意与来自世界各地研究机构的研究者共享您的数据。</p>\
            <p class='para foot'>南京师范大学心理学院•计算社会认知实验室</p>\
            </div> </div>"
                ],
                show_clickable_nav: true,
                allow_backward: true,
                button_label_previous: "返回",
                button_label_next: "继续"
            }, // 指导语 分为了 三页
            {
                type: "call-function",
                func: function () {
                    localStorage.removeItem(info["index"]);
                    localStorage.setItem(info["index"], JSON.stringify(info));
    
                    $("#jspsych-progressbar-container span").css("visibility", "hidden");
                }
            }
        ]
    }
}