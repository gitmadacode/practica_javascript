//Fetch y peticiones  a servicios / apis rest

var usuarios = [];

fetch('https://reqres.in/api/users')
.then(data => data.json())
.then(users => {
    usuario = data;
    console.log(usuarios);

});