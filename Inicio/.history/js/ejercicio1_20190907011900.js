 //programa que pida dos numeros , y nos diga cual es el mayor , menor y si son iguales.

 var num1 = parseInt(prompt('Introduce your first number:',0));
 var num2 = parseInt(prompt(' introduce your second number:',0));

 console.log(num1,num2);

 if(num1 == num2){
     alert("The numbers are the same");
 }else if(num1>num2){
     alert("The high number is: "+ num1);
     alert("The smallest number is: "+ num2);
 }else if(num2>num1){
     alert("The high number is: "num2)
 }