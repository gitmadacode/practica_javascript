
//Arrays, arreglos, matrices

var nombre = "sebastian"
var nombres = ["sebastian","victor","pedro","juan",52,true];

var lenguajes = new Array("PHP","JS","GO","JAVA");

/*
var elemento = parseInt(prompt("Que elemento del array quieres?",0));
if (elemento >=nombres.length) {
    
    alert("Introduce el numero correcto menor que " + nombres.length);
} else {
    alert("El usuario  seleccionado es "+nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
for (var i = 0 ; i<lenguajes.length ; i++ ) {
    document.write("<li>"lenguajes[0]"</li>");
}
document.write("</ul>");