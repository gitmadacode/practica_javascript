//Son arrays dentro de otros arrays

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
console.log(peliculas);