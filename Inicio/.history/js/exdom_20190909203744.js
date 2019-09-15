
window.addEventListener('load', function(){
    console.log("DOM cargado!");

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector
    formulario.addEventListener('submit',function(){

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        console.log(nombre,apellido,edad);
    });
});