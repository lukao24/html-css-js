

/*var slides = ["#s1", "#s2", "#s3", "#s4", "#s5"];
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
});*/

$(document).ready(function () {

    var speed = 3000;
    var run = setInterval('rotate()', speed);

    var item_width = $('#itens li').outerWidth();  //largura do carousel//
    var left_value = item_width * (-1);

    $('#itens li:first').before($('#itens li:last'));
    /////////////////////////////////////////////////////
    $('#itens ul').css({ 'left': left_value });

    $("#prev").click(function () {  // click do botao//

        var left_intend = parseInt($('#itens ul').css('left')) + item_width; //pegando as ul e fazendo a soma da largura e somando para proximo./

        $('#itens ul').animate({ 'left': left_intend }, 200, function () {   //animaçao do carusel de 200ms//

            $('#itens li:first').before($('#itens li:last'));
            $('#itens ul').css({ 'left': left_value });

        });
    });  //button para esquerda do corousel//

    //////////////////////////////////////////////////////////////////////////////////

    $("#next").click(function () {  // click do botao direita//

        var left_intend = parseInt($('#itens ul').css('left')) - item_width; //pegando as ul e fazendo a soma da largura e somando para proximo./

        $('#itens ul').animate({ 'left': left_intend }, 200, function () {   //animaçao do carusel de 200ms//

            $('#itens li:last').after($('#itens li:first'));
            $('#itens ul').css({ 'left': left_value });

        });

    });
});  // click do button direita//


