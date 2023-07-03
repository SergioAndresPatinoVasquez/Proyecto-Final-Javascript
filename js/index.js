

let btn_registro = document.getElementById("btn_registro");
let btn_login = document.getElementById("btn_login");

let arr_usuarios = localStorage.getItem("arr_usuarios");
console.log("json : ", arr_usuarios);
arr_usuarios = JSON.parse(arr_usuarios);
console.log("vector : ", arr_usuarios);

let usuario = {};


function alta_usuario() {

    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass");
    let resultado_find ;

    if(nombre_usuario.value !="" && pass_usuario.value!=""){        

        // console.log(nombre_usuario.value);
        // console.log(pass_usuario.value);

        usuario = {
            nombre: nombre_usuario.value,
            password: pass_usuario.value
        }
        //console.log(usuario);

        if(arr_usuarios!=null){
            resultado_find = arr_usuarios.find(buscar_usuario);
        //console.log("resul ", resultado_find);
        }else{
            resultado_find = undefined;
            arr_usuarios = [];
        }
        
        

        if(resultado_find == undefined){
           // console.log("no se encontraron usuarios con este nombre");

            arr_usuarios.push(usuario);
            //console.log(arr_usuarios);

            let arreglo_en_JSON = JSON.stringify(arr_usuarios);
            localStorage.setItem("arr_usuarios", arreglo_en_JSON);
        } else {
            alert("Este nombre de usuario ya existe, por favor elije otro");
            // Swal.fire({
            //     html : '<p class="letra_swal">Este nombre de usuario ya existe, por favor elije otro nombre diferente.</p>',
            //     //text:"Por favor llene los campos 'Nombre de usuario' y/o 'Contraseña'",
            //     //textcolor:red,
            //     confirmButtonColor: "#78B259",
            //     buttonsStyling: true,
            //     focusConfirm: true,
            //     width : "70%",
            //     padding : "1rem",
            // });
        }

        



    }else{
        //console.log("por favor llenar todos los campos");
        alert("Por favor llene los campos 'Nombre de usuario' y/o 'Contraseña'");
        // Swal.fire({
        //     html : '<p class="letra_swal"> Por favor llene los campos Nombre de usuario y/o Contraseña.</p>',
        //     //text:"Por favor llene los campos 'Nombre de usuario' y/o 'Contraseña'",
        //     //textcolor:red,
        //     confirmButtonColor: "#78B259",
        //     buttonsStyling: true,
        //     focusConfirm: true,
        //     width : "70%",
        //     padding : "1rem",
        // });
    }
}

function login_usuario() {

    let arr = localStorage.getItem("arr_usuarios");
    let nombre_usuario = document.getElementById("nombre").value;
    let pass_usuario = document.getElementById("pass").value;
    let validar = 0;

    //console.log("login json : ", arr);
    arr = JSON.parse(arr);
    //onsole.log("login vector", arr);

    while(arr !=null){
    for (let usuario of arr) {

        if (usuario.nombre == nombre_usuario && usuario.password == pass_usuario) {
            //console.log("usuario encontrado");
            validar = 1;
            window.location.href = './paginas/comprar.html';
            localStorage.setItem("usuario", usuario.nombre);
            break;
        } 

        

    }
    break;
    }

    if(validar == 0){            
        alert("Usuario no registrado, por favor verifique nombre y/o contraseña");
        // Swal.fire({
        //     html : '<p class="letra_swal"> Usuario no registrado, por favor verifique nombre y/o contraseña.</p>',
        //     //text:"Por favor llene los campos 'Nombre de usuario' y/o 'Contraseña'",
        //     //textcolor:red,
        //     confirmButtonColor: "#78B259",
        //     buttonsStyling: true,
        //     focusConfirm: true,
        //     width : "70%",
        //     padding : "1rem",
        // });
        validar= 0;
    }

}

function buscar_usuario(obj_usuario){

    return obj_usuario.nombre == usuario.nombre;
}


btn_registro.addEventListener("click", alta_usuario);
btn_login.addEventListener("click", login_usuario);
