//Fetch y peticiones  a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];

fetch('https://reqres.in/api/users')
.then(data => data.json())
.then(users => {
    usuarios = users.data;

});

function listadoUsuarios()