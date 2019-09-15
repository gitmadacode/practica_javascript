$(document).ready(function(){
    //Load 
   // $("#datos").load("https://bestdori.com/tool/live2d/card/761/Hina-Hikawa-What-s-up-Tsugu");

    //GET AND POST
    $.get("https://reqres.in"", {page:3}, function(response){
    response.data.forEach((element, index) => {
        $("#datos").append("<p>"+element.name+"</p>");
    });
    });

});