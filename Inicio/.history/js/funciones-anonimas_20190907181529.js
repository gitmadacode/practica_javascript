//Es una funcion que no tiene nombre
//callbacks

function sumame(num1,num2,sumaymuestra,sumapordos){
    var sumar = num1 + num2;

    sumaymuestra(sumar);
    sumapordos(sumar);
    
    return sumar;

}
//funcion flecha se remplaza por function
sumame(5,7,(dato) => {
    console.log("La suma es:", dato);
},
(dato)=>{
    console.log("La suma por dos es: ",(dato*2));
});