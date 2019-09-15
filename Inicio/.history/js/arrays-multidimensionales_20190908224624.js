//Son arrays dentro de otros arrays
// Sort para ordenar array alfabeticamente - Sort para darle el orden inverso
var categorias = ['accion','terror','comedia'];
var peliculas = ['la verdad duele','la vida es bella','gran torino'];
var cine = [categorias,peliculas];

//console.log(cine[0][1]);  //accedemos a categoria , terror

//Como añadir un elemento 

var elemento = "";
do{
    elemento = prompt("introduce tu pelicula: ");
    peliculas.push(elemento);

}while(elemento != "ACABAR");

peliculas.pop(); //Elimina el ultimo elemento de un array

var peliculas_string = peliculas.join(); //para convertir a un string usamos join

//console.log(peliculas);
//console.log(peliculas_string);

//Convertir un String a Array
var cadena = "text1,texto2,text3";
