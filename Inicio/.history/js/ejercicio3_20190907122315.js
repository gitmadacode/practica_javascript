'use strict'

// hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

var num1 = parseInt(prompt('Introduce your first number: ',0));
var num2 = parseInt(prompt('Introduce your second number: ',0));

document.write("<h1>De "+num1+ " a "+num2+" estan estos numeros")
for(var i = num1; i <= num2;i++){
    document.write(i+"</br>");
}