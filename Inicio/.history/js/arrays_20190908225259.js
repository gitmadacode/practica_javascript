
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
/*
//Primera forma de recorrer un array
for (var i = 0 ; i<lenguajes.length ; i++ ) {
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");*/

lenguajes.forEach((elemento,indice) =>{
    document.write("<li>"+indice+"-"+elemento+"</li>");
});


//Como buscar en un array

var busqueda = lenguajes.find(Function(lenguaje){
    return lenguaje == "PHP";
});