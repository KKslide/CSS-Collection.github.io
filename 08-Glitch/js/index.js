$(document).ready(function () {
    var xpos = 0;
    var ypos = 0;
    var wide = 0;
    var high = 0;
    var colorChooser = 0;
    var colour = "";
    var op = 1;
    var textSelection = 0;
    const texter = $('#text');

    function glitch() {
        randomGenerator();
        $('#glitch1').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch2').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch3').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch4').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch5').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch6').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch7').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch8').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
        randomGenerator();
        $('#glitch9').css({
            "top": ypos + "%",
            "left": xpos + "%",
            "width": wide,
            "height": high,
            "background-color": colour,
            "opacity": op
        });
    }

    function randomGenerator() {
        xpos = Math.floor(Math.random() * 150) - 50;
        ypos = Math.floor(Math.random() * 100);
        wide = Math.floor((Math.random() * 1900) + 30);
        high = Math.floor((Math.random() * 20) + 1);
        colorChooser = Math.floor(Math.random() * 15);
        switch (colorChooser) { // 随机颜色
            case 0:
                colour = "#FFFFFF";
                break;
            case 1:
                colour = "#FFFFFF";
                break;
            case 2:
                colour = "#FFFFFF";
                break;
            case 3:
                colour = "#efd8d8";
                break;
            case 4:
                colour = "#9db1c1";
                break;
            case 5:
                colour = "#dfc9e1";
                break;
            case 6:
                colour = "#595959";
                break;
            case 7:
                colour = "#000000";
                break;
            case 8:
                colour = "#e2f4cb";
                break;
            case 9:
                colour = "#f4e4cb";
                break;
            case 10:
                colour = "#dfc1af";
                break;
            case 11:
                colour = "#b25773";
                break;
            case 12:
                colour = "#afd3b3";
                break;
            case 13:
                colour = "#fdffc9";
                break;
            case 14:
                colour = "#e5c9ff";
                break;
            default:
                break;
        }
        op = Math.random();
    }

    function textGlitch() {
        var t = 0;
        t = Math.random();
        if (t > .50) {
            textSelection = Math.floor(Math.random() * 6);
            var quote = "";
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
    }

    function changeText(str) {
        texter.text(str);
        var i = 0;
        var o = 0;
        var tsize = 0;

        setTimeout((function () {
            i = Math.floor(Math.random() * 100.99999);
            o = Math.random();
            tsize = Math.floor(Math.random() * 800) + 5;
            texter.css({
                "opacity": o,
                "left": i + "%",
                "font-size": tsize + "px"
            });
        }), 25);

        setTimeout((function () {
            i = Math.floor(Math.random() * 100.99999);
            o = Math.random();
            texter.css({
                "opacity": o,
                "top": i + "%",
                "left": i + "%"
            });
        }), 50);

        setTimeout((function () {
            texter.text("[null]");
        }), 75);

        setTimeout((function () {
            i = Math.floor(Math.random() * 100.99999);
            o = Math.random();
            tsize = Math.floor(Math.random() * 800) + 5;
            texter.css({
                "opacity": o,
                "font-size": tsize + "px",
                "top": i + "%",
                "left": i + "%"
            });
        }), 100);

        setTimeout((function () {
            texter.text("Hello world_");
        }), 125);

        setTimeout((function () {
            i = Math.floor(Math.random() * 100.99999);
            texter.css({
                "opacity": "1",
                "font-size": "3em",
                "top": "50%",
                "left": "50%"
            });
        }), 150);
    }

    setInterval(glitch, 40);
    setInterval(textGlitch, 700);
});