//Transformacion de textos
var numero = 44;
var texto1 = "bienido a la grieta del invocador";
var texto2 = "un invocador a abandonado";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto1.toUpperCase();
/*
console.log(dato);

//Calcular longitud
var nombre = "";

console.log(nombre.length);

//Concatenar - unir textos

//var textototal = texto1+" "+texto2;
var textototal = texto1.concat(" "+texto2);

console.log(textototal);*/

var buscar =texto1.indexOf("grieta");  //lastindexof=la ultima aparicion de esa palabra- match: devuelve en array
console.log(buscar);