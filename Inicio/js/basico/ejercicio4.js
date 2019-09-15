'use strict'

//Mostrar todos los numeros impares que hay entre dos numeros introducidos

var num1 = parseInt(prompt('Introduce your first number: ',0));
var num2 = parseInt(prompt('Introduce your second number: ',0));

while(num1<num2){
    num1++;

    //para comprobar si es impar
    if(num1%2 != 0){
        console.log("El " +num1 + " es impar")
    }
}