//Fetch y peticiones  a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");


getUsuarios().then(data => data.json())
.then(users => {
    listadoUsuarios(users.data)

    return getJanet();
    
})
.then(data =>data.json())
.then(user => {
    mostrarJanet(user);
});

function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}
function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}


function listadoUsuarios(usuarios){
    

    usuarios.map((users,i) =>{

        let nombre = document.createElement('h3');

        nombre.innerHTML = i + ' . ' +users.first_name+ " " +users.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarJanet(user){
    
        let nombre = document.createElement('h4');

        nombre.innerHTML = users.first_name+ " " +users.last_name;
        div_janet.appendChild(nombre);

        document.querySelector("#janet .loading").style.display = 'none';

}