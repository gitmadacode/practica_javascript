//Fetch y peticiones  a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");


getUsuarios()                                         //esto es una promesa
.then(data => data.json())                             // recoge los datos, devuelve una promesa
.then(users => {                                        //capturamos esos datos que nos devuelve
    listadoUsuarios(users.data)                         //ejecutamos esto para mostrarlo en pantalla

    return getinfo();                                   //Llamamos al otro metodo que tambien es una promesa
})
.then(data =>{                                          //La devolvemos , utilizamos su promesa
   div_profesor.innerHTML = data;                          //lo metemos dentro de la pag
    return getJanet();                                  //ejecutamos el fetch janet , que tambien es una promesa
})

.then(data =>data.json())                               //entonces cuando tenemos los datos que se estan sacando con AJAX
.then(user => {                                         //Se ejecuta la siguiente promesa
    mostrarJanet(user.data);                            //Se muestran los datos del usuario
   
})
.catch(err => {});

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
        var profesor_string =  "";

        setTimeout(function(){
        profesor_string =  JSON.stringify(profesor);
        if(typeof profesor_string != 'string' || profesor_string == '')return reject('error');

        return resolve(profesor_string);
    },3000);

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