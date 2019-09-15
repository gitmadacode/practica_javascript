//Fetch y peticiones  a servicios / apis rest

var usuarios = [];

fetch('https://reqres.in/api')
.then(data => data.json())
.then(data => {
    usuario = data;
    console.log(usuarios);

});