
window.addEventListener('load', function(){
    console.log("DOM cargado!");

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    formulario.addEventListener('submit',function(){

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = parsedocument.querySelector("#p_edad span");

        if(nombre.trim() == null||nombre.trim().length == 0){
            alert("El nombre no es valido >:c");
            return false;
        }
        if(apellidos.trim() == null||apellidos.trim().length == 0){
            alert("El apellido no es valido >:c");
            return false;
        }
        if(edad.trim() == null||edad.trim().length == 0|| !isNaN(edad)){
            alert("La edad no es valido >:c");
            return false;
        }

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
        /*
        var datos_usuario =[nombre,apellidos,edad];
        var indice;
        for(indice in datos_usuario){
        var parrafo = document.createElement("p");
        parrafo.append(datos_usuario[indice]);
        box_dashed.append(parrafo);
        }*/

    });
});