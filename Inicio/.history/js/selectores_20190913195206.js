//Un ID es un identificador unico , para muchos usamos Class 

$(document).ready(function(){
    //Selector ID
    var rojo = $("#rojo").css("background","red")
                         .css("color","white");

    var amarillo = $("#amarillo").css("background","yellow");

    //Selector de clase

    var mi_clase = $('.zebra');
    mi_clase.css("border","5px dashed black");

    $('.sin_borde').click(function(){
        console.log("click dado");
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta

    var parrafos = $('p');

    parrafos.click(function(){
    $(this).removeClass("zebra");
    });

    console.log(rojo);

    //Selectores de atributo
    $('[title=Google]').css('background','green');

});