//Fetch y peticiones  a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");


fetch('https://reqres.in/api/users')
.then(data => data.json())
.then(users => {
    listadoUsuarios(users.data)
    
});

function getUsuarios()

function listadoUsuarios(usuarios){
    

    usuarios.map((users,i) =>{

        let nombre = document.createElement('h3');

        nombre.innerHTML = i + ' . ' +users.first_name+ " " +users.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}