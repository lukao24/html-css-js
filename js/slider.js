

var slides = ["#s1", "#s2", "#s3", "#s4", "#s5"];
slideatual = 0;
slidemax = 4;
tempo = 10000;

$(document).ready(function () {
    $(slides[slideatual]).fadeTo(1000, 1);
    setInterval(troca, tempo);
    function troca() {
        $(slides[slideatual]).fadeTo(1000, 0);
        slideatual++;
        if (slideatual > slidemax) {
            slideatual = 0;
        }
        $(slides[slideatual]).fadeTo(1000, 1);
    }
});//



