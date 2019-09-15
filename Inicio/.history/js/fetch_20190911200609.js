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
    mostrarJanet(user.data);
    return getinfo();
})
.then(data =>{
    console.log(data);
});

function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}
function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getinfo(){
    var profesor = {
        nombre :'victor',
        apellidos : 'robles',
        url : 'https://www.youtube.com/watch?v=-L18HffR8Zs'
    };
    return new Promise((resolve,reject) =>{
      var profesor_string =  JSON.stringify(profesor);

      if(typeof profesor_string != 'string')return reject('error');
        set
      return resolve(profesor_string);

    });
 
    
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
    console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name+ " " +user.last_name;
        div_janet.appendChild(nombre);
        avatar.src = user.avatar;
        avatar.width = '100';


        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = 'none';

}