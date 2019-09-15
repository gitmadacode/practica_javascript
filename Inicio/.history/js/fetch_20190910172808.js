//Fetch y peticiones  a servicios / apis rest

var usuarios = [];

fetch('https://req')
.then(data => data.json())
.then(data => {
    usuario = data;
    console.log(usuarios);

});