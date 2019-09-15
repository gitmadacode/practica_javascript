'use strict'
/*Prueba con Var*/
var num= 40;
console.log(num); //Output 40

if(true){
    var num = 50;
    console.log(num); //Output 50
}
console.log(num); //Output 50

/*Prueba con Let*/

var texto = "bushido";
console.log(texto); //Output bushido

if(true){
    let texto = "CraftEgg";
    console.log(texto); //Output CraftEgg
}

console.log(texto); //Output bushido