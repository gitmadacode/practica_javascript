$(document).ready(function(){

    //MouseOver and MouseOut
    var caja = $("#caja");

    /*caja.mouseover(function(){
        $(this).css("background","red");
    })*/

    function cambiaRojo(){
        $(this).css("background","red");
    }
    //Hover
    caja.hover(cambiaRojo);

    //Click and Double Click
    caja.click(function(){
        $(this).css("background","blue")
    });


});