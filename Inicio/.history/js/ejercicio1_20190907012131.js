 //programa que pida dos numeros , y nos diga cual es el mayor , menor y si son iguales.
 //PLUS: Si los numeros no son un numero o son menores o iguales a 0 , nos los vuelva a pedir

 var num1 = parseInt(prompt('Introduce your first number:',0));
 var num2 = parseInt(prompt(' introduce your second number:',0));

 console.log(num1,num2);

 if(num1 == num2){
     alert("The numbers are the same");
 }else if(num1>num2){
     alert("The high number is: "+ num1);
     alert("The smallest number is: "+ num2);
 }else if(num2>num1){
     alert("The high number is: "+num2);
     alert("The smallest number is: "+ num1);

 }else{
     alert("Insert numbers");
 }