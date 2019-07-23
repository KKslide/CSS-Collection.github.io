(function ($) {

    $.fn.glitch = function () {
        $("body").append("<span id='text'>Hello World_</span>");
        Array.from(new Array(8)).map((_, i) => {
            $("body").append('<div id="glitch'+(i+1)+'" class="glitchBar"></div>');
        });
        var xpos = 0, // top值
            ypos = 0, // left值
            width = 0, // 宽度
            height = 0, // 高度
            randomColor = 0, // 颜色概率
            bgColor = "", // 背景颜色
            opacity = 0, // 不透明度
            textSelection = 0, // 文字选择率
            texter = $("#text"), // 文字dom元素
            // glitchBars = [],
            // glitchBars = $(".glitchBar"),
            _glitch = function () {
                randomGenerator();
                $('#glitch1').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch2').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch3').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch4').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch5').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch6').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch7').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch8').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                randomGenerator();
                $('#glitch9').css({
                    "top": ypos + "%",
                    "left": xpos + "%",
                    "width": width,
                    "height": height,
                    "background-color": bgColor,
                    "opacity": opacity
                });
                // console.log(xpos,ypos);
                // $(".glitchBar").each(function (v,i) {
                //     console.log(i);
                // })
            },
            randomGenerator = function () {
                xpos = Math.floor(Math.random() * 150) - 50;
                ypos = Math.floor(Math.random() * 100);
                width = Math.floor((Math.random() * 1900) + 30);
                height = Math.floor((Math.random() * 20) + 1);
                randomColor = Math.floor(Math.random() * 15);
                switch (randomColor) { // 随机颜色
                    case 0:
                        bgColor = "#FFFFFF";
                        break;
                    case 1:
                        bgColor = "#FFFFFF";
                        break;
                    case 2:
                        bgColor = "#FFFFFF";
                        break;
                    case 3:
                        bgColor = "#efd8d8";
                        break;
                    case 4:
                        bgColor = "#9db1c1";
                        break;
                    case 5:
                        bgColor = "#dfc9e1";
                        break;
                    case 6:
                        bgColor = "#595959";
                        break;
                    case 7:
                        bgColor = "#000000";
                        break;
                    case 8:
                        bgColor = "#e2f4cb";
                        break;
                    case 9:
                        bgColor = "#f4e4cb";
                        break;
                    case 10:
                        bgColor = "#dfc1af";
                        break;
                    case 11:
                        bgColor = "#b25773";
                        break;
                    case 12:
                        bgColor = "#afd3b3";
                        break;
                    case 13:
                        bgColor = "#fdffc9";
                        break;
                    case 14:
                        bgColor = "#e5c9ff";
                        break;
                    default:
                        break;
                }
                opacity = Math.random();
            },
            textGlitch = function () {
                var t = 0;
                t = Math.random();
                if (t > .5) {
                    textSelection = Math.floor(Math.random() * 6);
                    quote = "";
                    switch (textSelection) {
                        case 0:
                            quote = "see?";
                            break;
                        case 1:
                            quote = "H̟̘̻͊̀̑̄̆̄̍ͦͥe̴̫̒́ͩͭ̇͋ͭ̈́͞l̔ͨ̓ͯͥ̄̌͂̕͏̡͍͓͖̗̙l͖̖͇̫̘̮̼͎͙ͭ͊̀̂̉ͤ̉ͣȯ͉ͪ͒͋͐͗͢";
                            break;
                        case 2:
                            quote = "RU5FTVk=";
                            break;
                        case 3:
                            quote = "....";
                            break;
                        case 4:
                            quote = "I SEE YOU";
                            break;
                        case 5:
                            quote = "bye";
                            break;
                        default:
                            quote = "null";
                            break;
                    }
                    changeText(quote);
                }
            },
            changeText = function (str) {
                texter.html(str);
                var i = 0, o = 0, tsize = 0;
                setTimeout(() => {
                    i = Math.floor(Math.random() * 100.99999);
                    o = Math.random();
                    tsize = Math.floor(Math.random() * 800) + 5;
                    texter.css({
                        "opacity": o,
                        "left": i + "%",
                        "font-size": tsize + "px"
                    });
                    setTimeout(() => {
                        i = Math.floor(Math.random() * 100.99999);
                        o = Math.random();
                        texter.css({
                            "opacity": o,
                            "top": i + "%",
                            "left": i + "%"
                        });
                        setTimeout(() => {
                            texter.html("[null]");
                            setTimeout(() => {
                                i = Math.floor(Math.random() * 100.99999);
                                o = Math.random();
                                tsize = Math.floor(Math.random() * 800) + 5;
                                texter.css({
                                    "opacity": o,
                                    "font-size": tsize + "px",
                                    "top": i + "%",
                                    "left": i + "%"
                                });
                                setTimeout((function () {
                                    texter.html("Hello world_");
                                    setTimeout((function () {
                                        i = Math.floor(Math.random() * 100.99999);
                                        texter.css({
                                            "opacity": "1",
                                            "font-size": "3em",
                                            "top": "50%",
                                            "left": "50%"
                                        });
                                    }), 150);
                                }), 125);
                            }, 100);
                        }, 75);
                    }, 50);
                }, 25);
            }


        // setInterval(_glitch, 800);
        // setInterval(_glitch, 40);
        // setInterval(textGlitch, 700);
    };
})(jQuery);
