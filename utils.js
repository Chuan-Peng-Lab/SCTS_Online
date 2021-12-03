function resize(type) {
    let scale = Math.min($(document).height() / 764, $(document).width() / 1000);
  
    switch(type){ 
        case 1:
            $("#text").css({
                "font-size": (35 * scale) + "px",
                "margin": `0px 0px ${100 * scale}px`
            });
            break;
        case 2:
            $("#text").css({
                "font-size": (50 * scale) + "px",
                "margin": `-${70 * scale}px 0px ${100 * scale}px`
            });
            break;
    }

    $("#bottom").css(
      "font-size", (21 * scale) + "px"
    );
    $("label").css({
      "background-position": `${(75 * scale) / 2 - 1.5}px ${5 * scale}px,0px ${24 * scale}px`,
      "background-size": `${20 * scale}px ${20 * scale}px, ${75 * scale}px ${3 * scale}px`,
      "width": `${75 * scale}px`,
      "font-size": `${25 * scale}px`,
      "background-repeat": "no-repeat",
      "display": "inline-block",
      "background-image": "repeating-linear-gradient(90deg, #fff 0, #fff 3px, transparent 0, transparent 50px), linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
      "line-height": `${25 * scale}px`
    });
    $(".jspsych-survey-multi-choice-text p").css({
        "font-size": `${20 * scale}px`,
        "width": `${100 * scale + 10}px`,
        "margin": `0px 0px 0px ${-(100 * scale + 10) / 2 + ($('label').width()) / 2}px`
    });
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
      "background-position": `${(75 * scale) / 2 - 1.5}px ${5 * scale}px,${$("label").width() / 2}px ${24 * scale}px`,
      "background-size": `${20 * scale}px ${20 * scale}px, ${$("label").width() / 2}px ${3 * scale}px`
    });
  
    $("label[for=jspsych-survey-multi-choice-response-0-8]").css({
      "background-position": `${(75 * scale) / 2 - 1.5}px ${5 * scale}px,${0}px ${24 * scale}px`,
      "background-size": `${20 * scale}px ${20 * scale}px, ${$("label").width() / 2}px ${3 * scale}px`
    });
  }
  