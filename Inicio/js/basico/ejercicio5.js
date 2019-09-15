'use strict'

//calculadora


var num1 = parseInt(prompt('Introduce your first number: ',0));
var num2 = parseInt(prompt('Introduce your second number: ',0));

while(num1<0 || num2<0 ||isNaN(num1)||isNaN(num2)){
    num1 = parseInt(prompt('Introduce el primer numero ',0));
    num2 = parseInt(prompt('Introduce el segundo numero ',0));
}

var resultado = "La suma es: "+(num1+num2)+ "<br/>"+
                "La resta es: "+(num1-num2)+ "<br/>"+
                "La multiplicacion es: "+(num1*num2)+ "<br/>"+
                "La division es: "+(num1/+num2)+ "<br/>";

document.write(resultado);