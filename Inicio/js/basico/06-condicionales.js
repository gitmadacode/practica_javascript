'use strict'
/*Operadores relacionales
Mayor: >
Menor: <
Mayor o igual >=
Menor o igual <=
Igual ==
Distinto !=*/
/*
var edad = 18;
var nombre = 'David Suarez';

if(edad >= 18){
    //es mayor de edad
    console.log(nombre+ " tiene " +edad+ " años, es mayor de edad");

    if(edad <= 33){
        console.log("Todavia eres milenial");
    }else{
        console.log("Ya no eres milenial");
    }
}else{
    //es menor de edad
    console.log(nombre+ " tiene " +edad+ " años, es menor de edad");
}
*/

//Switch nos permite hacer muchas condiciones de manera mas organizada

var edad =18;
var imprime ="";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
            imprime = "Ya eres un adulto";
            break;
     case 40:
            imprime = "Crisis de los 40";
            break;
}

console.log(imprime);
