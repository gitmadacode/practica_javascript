//Parametros REST Y SPREAD
// se ponen ... y me capturara los demas parametros no definidos
function listadofrutas(fruta1,fruta2, ...rest_de_frutas){
    console.log("Fruta 1 ",fruta1);
    console.log("Fruta 2 ",fruta2);
}
listadofrutas("naranja","manzana","melon","pera","palta");