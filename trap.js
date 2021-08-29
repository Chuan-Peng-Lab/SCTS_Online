var trap = (function() { 
    let o = {};

    o.trap = [
        {
            type: 'survey-multi-choice',
            questions: [
                {
                    prompt: function () {
                        return '<p id="text">【西安】可以用于描述某个人的【首都】</p>';
                    }, options: [1, 2, 3, 4, 5, 6, 7, 8, 9], horizontal: true
                }
            ],
            preamble: function () {
                return '<style> \
                #text{ text-align: center; font-size: 25px; margin: 0.5em; }\
                </style>';
            },
            on_finish: function (data) {
                // 分值的呈现
                data.word = jsPsych.timelineVariable("word", true); // 单词
                data.wordLen = jsPsych.timelineVariable("len", true); // 单词长度
                data.dimension = jsPsych.timelineVariable("dimension", true); // 维度 能力/
                data.wordGroup = jsPsych.timelineVariable("wordGroup", true); // 单词组
                data.dimensionGroup = jsPsych.timelineVariable("dimensionGroup", true); // 维度组
                data.serial = jsPsych.timelineVariable("serial", true); // 序列号
    
                data.rating = data.response.Q0; // 维度评分
                data.type = parseInt(jsPsych.data.getURLVariable("type"));
                data.isTrap = true;
                // 给窗口初始化
                $("body").unbind();
                clearTimeout(timeout);
                timeout = 0;
            },
        }
    ];

    return o;
})();