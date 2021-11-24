<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="/assets/js/md5.js"></script>
    <script type="text/javascript" src="/assets/js/jquery.js"></script>
    <script type="text/javascript" src="/assets/js/jsencrypt.js"></script>

    <!-- load template -->
    <?php include("../index.html"); ?>
    <!-- jspsych核心 -->
    <script type="text/javascript" src="/assets/mupsy/mupsy.js"></script>
    <link href="jspsych.css" rel="stylesheet" type="text/css">

    <!-- 本实验的js函数 -->
    <script src="index.js"></script>
    <!-- 这个word里面放的是单词，全部都在里面 -->
    <script src="word.js"></script>
    <script src="exp.js"></script>
</head>

<body>
</body>
<script type="text/javascript">
    document.title = "SCTS";
    // 实验参数
    let version = "v5";
    let exper_number = "SEV";
    let word_block_num = 80; // 单个block的单词数量
    let word_day = 320; // 第一天的单词数量

    let groups = [
        [0, 150],
        [150, 150]
    ];
    let group = groups[0];
    let delay = 800; // 全部选择后 跳转延迟时间，单位为毫秒
    let blank = 500; // 每个trial之间的空白屏时间 单位 毫秒

    let dimension = ["能力", "道德", "社交能力", "外貌", "社会经济地位"]; // 需要维度评分的维度
    let dimEn = {
        "能力": "ability",
        "道德": "morality",
        "社交能力": "socialAbility",
        "外貌": "appearance",
        "社会经济地位": "socioEconomicStatus"
    }
    // 以下非实验参数，最好不改
    let debug = false;
    let word_tmp; // 保存 当天需要的单词数量
    let timeline = []; // 定义空的时间线
    let info = {}; // 保存被试信息
    let variable = []; // 时间线变量
    let timeout = 0; // 记录 setTimeout
    let blockNum = 0; // 记录block试次数量

    let wordSort, startPoint;
    let arr = [318, 319, 318, 319, 318, 319];
    if(parseInt(jsPsych.data.getURLVariable("type"))) { 
        wordSort = Math.min(parseInt(jsPsych.data.getURLVariable("type")), arr.length) - 1;
    } else { 
        wordSort = 0;
    }
    info["Type"] = jsPsych.data.getURLVariable("type") ? jsPsych.data.getURLVariable("type") : 1;
    startPoint = 0;
    for (let i = 0; i < wordSort; i++) { 
        startPoint += arr[i];
    }
    word_tmp = getWord().splice(startPoint, arr[wordSort]);
        
    if (jsPsych.data.getURLVariable("debug")) {
        version = "t3"
        debug = true;
        // 调试参数
        word_block_num = 5;
        word_day = 35;
        delay = 100;
        if (jsPsych.data.getURLVariable("auto")) {
            auto(); // 自动运行，方便调试
        }
    } // 这玩意，只是为了方便调试

    function resize() {
  let scale = Math.min($(document).height() / 764, $(document).width() / 1000);

  $("#text").css(
    "font-size", (25 * scale) + "px"
  );
  $("#bottom").css(
    "font-size", (20 * scale) + "px"
  );
  $("label").css({
    "background-position": `${(100 * scale) / 2 - 1.5}px ${5 * scale}px,0px ${24 * scale}px`,
    "background-size": `${20 * scale}px ${20 * scale}px, ${100 * scale}px ${3 * scale}px`,
    "width": `${100 * scale}px`,
    "font-size": `${25 * scale}px`,
    "background-repeat": "no-repeat",
    "display": "inline-block",
    "background-image": "repeating-linear-gradient(90deg, #fff 0, #fff 3px, transparent 0, transparent 50px), linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
    "line-height": `${25 * scale}px`
  });
  $(".jspsych-survey-multi-choice-text p").css({
      "font-size": `${18 * scale}px`,
      "margin": "0 0 0 0"
  })
  $("input[type=radio]").css({
    "width": `${14 * scale}px`,
    "height": `${14 * scale}px`,
    "margin": `${20 * scale}px 0px 0px ${($("label").width() - (14 * scale)) / 2}px`,
    "display": "block"
  });

  $(".jspsych-survey-multi-choice-option").css({
    "line-height": `${25 * scale}px`
  });
  $("label[for=jspsych-survey-multi-choice-response-0-0]").css({
    "background-position": `${(100 * scale) / 2 - 1.5}px ${5 * scale}px,${$("label").width() / 2}px ${24 * scale}px`,
    "background-size": `${20 * scale}px ${20 * scale}px, ${$("label").width() / 2}px ${3 * scale}px`
  });

  $("label[for=jspsych-survey-multi-choice-response-0-8]").css({
    "background-position": `${(100 * scale) / 2 - 1.5}px ${5 * scale}px,${0}px ${24 * scale}px`,
    "background-size": `${20 * scale}px ${20 * scale}px, ${$("label").width() / 2}px ${3 * scale}px`
  });
}

$(window).resize(function() { 
  resize();
});

    // 第一步，填写实验编号
    mupsyStart({
        timeline: [{
            // 实验编号填写
            type: "survey-html-form",
            preamble: "<p style =' color : white'>你分配到的实验编号是</p>",
            html: "<p><input name='Q0' type='text' value='" + exper_number + "' disabled='disabled' /></p>\
            <p>你的地区代码是：<select id='group' value='1'>\
            <option value='NE'>东北｜NE</option>\
            <option value='NC'>华北｜NC</option>\
            <option value='NW'>西北｜NW</option>\
            <option value='EC'>华东｜EC</option>\
            <option value='CC'>华中｜CC</option>\
            <option value='SW'>西南｜SW</option>\
            <option value='SC'>华南｜SC</option>\
            </select></p>\
            <p><input name='Q1' type='number' value='' required/></p>",
            button_label: "继续",
            on_finish: function (data) {
                data.number = exper_number + data.response.Q1.padStart(4, "0");
                // info["index"] = exper_number + $("#group").val() + data.response.Q1.padStart(3, "0");
            },
            on_load: function () {
                let bb = document.getElementById("jspsych-content");
                let label1 = document.createElement("p");
                label1.id = "numberf", label1.textContent = "你的最终编号是：" + document.getElementsByTagName("input")[0].value + document.getElementsByTagName("input")[1].value.toString().padStart(3, "0");
                label1.style = "font-size: 20px;color: white;";
                bb.appendChild(label1);
                document.getElementsByTagName("input")[1].addEventListener("input", function (a) {
                    let id = document.getElementsByTagName("input")[0].value + $("#group").val() + document.getElementsByTagName("input")[1].value.toString().padStart(3, "0");
                    document.getElementById("numberf").textContent = "你的最终编号是：" + id;
                    info["subj_idx"] = id;
                });
                $("#group").change(function(){
                    let id = document.getElementsByTagName("input")[0].value + $("#group").val() + document.getElementsByTagName("input")[1].value.toString().padStart(3, "0");
                    document.getElementById("numberf").textContent = "你的最终编号是：" + id;
                    info["subj_idx"] = id;
                });
            }
        }, {
            type:"survey-html-form",
            preamble:"<p style = 'color : white'>你的实验次数是</p>",
            html:"<p><input name='Q0' type='number' value=' ' required/></p>",
            button_label:"继续",
            on_finish: function (data) {
                info["Series"] = data.response.Q0;
            }
        }, {
            type: "preload",
            images: ["sample.png?" + `_=${new Date().getTime()}`, "sample2.png?" + `_=${new Date().getTime()}`]
        }],
        on_finish: function () {
            timeline.push(begin_introduction());
            start();
        }
    });

</script>
</html>