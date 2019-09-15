//Es una funcion que no tiene nombre
//callbacks

function sumame(num1,num2,sumaymuestra,sumapordos){
    var sumar = num1 + num2;

    sumaymuestra(sumar);
    sumapordos(sumar);
    
    return sumar;

}

sumame(5,7,function(dato)){
    console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma por dos es: "),(dato*2));
});