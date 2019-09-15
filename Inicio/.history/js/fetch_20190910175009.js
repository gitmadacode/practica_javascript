//Fetch y peticiones  a servicios / apis rest

var usuarios = [];

fetch('https://reqres.in/api/users')
.then(data => data.json())
.then(users => {
    usuario = users.data;
    console.log(usuarios);

    usuarios.map((users,i) =>{

        let nombre = document.createElement('h2');

        nombre.innerHTML = i + users.first_name+ " " +
    });
});