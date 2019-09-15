
window.addEventListener('load', function(){
    console.log("DOM cargado!");

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    formulario.addEventListener('submit',function(){

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        box_dashed.style.display = "block";

        console.log(nombre,apellido,edad);

        var parrafo = document.createElement("p");
        parrafo.append(nombre);
        parrafo.append(apellido);
        parrafo.append(edad);
        box_dashed.ap


    });
});