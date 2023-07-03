//Consumo de API
let pais="";
let obj_data="";
function mostrar_posicion(posicion){
    //console.log("***posiciion",posicion);
    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "dce9d6802748aca74a392a67e9362790";
    
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
    .then( response => response.json())
    .then( data => {
        // console.log("objeto api", data);    
        // console.log("Ciudad/municipio : ", data.name);     
        // console.log("Temperatura : ", data.main.temp);  
        // console.log("pais", data.sys.country); 
        if(data.sys.country == "CO"){
            console.log("Colombia");
            fetch (`https://restcountries.com/v3.1/name/Colombia?fullText=true`)
            .then( response => response.json())
            .then(data => {
                console.log("data country", data);
                //productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');
                document.querySelector('.flag').setAttribute('src', data[0].flags.svg);
            });
        }
        else if(data.sys.country == "AR"){
            console.log("Argentina");
            fetch (`https://restcountries.com/v3.1/name/Argentina?fullText=true`)
            .then( response => response.json())
            .then(data => {
                console.log("data country", data);
                //productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');
                document.querySelector('.flag').setAttribute('src', data[0].flags.svg);
            });
        }
        else if(data.sys.country == "CL"){
            console.log("Chile");
            fetch (`https://restcountries.com/v3.1/name/Chile?fullText=true`)
            .then( response => response.json())
            .then(data => {
                console.log("data country", data);
                //productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');
                document.querySelector('.flag').setAttribute('src', data[0].flags.svg);
            });
        }
        else if(data.sys.country == "UY"){
            console.log("Uruguay");
            fetch (`https://restcountries.com/v3.1/name/Uruguay?fullText=true`)
            .then( response => response.json())
            .then(data => {
                console.log("data country", data);
                //productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');
                document.querySelector('.flag').setAttribute('src', data[0].flags.svg);
            });
        }
        else {
            console.log("Colombia");
            fetch (`https://restcountries.com/v3.1/name/Colombia?fullText=true`)
            .then( response => response.json())
            .then(data => {
                console.log("data country", data);
                //productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');
                document.querySelector('.flag').setAttribute('src', data[0].flags.svg);
            });
        }

    document.querySelector('.clima').innerText = data.name + ", " + data.main.temp + "°C";

    });
}

navigator.geolocation.getCurrentPosition(mostrar_posicion);


let menuUsuario = document.querySelector(".nav-usuario");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamIcon = document.querySelector(".menu");
let menuCarritoIcon = document.querySelector(".nav-carrito");
let mobilemenu = document.querySelector(".mobile-menu");
let aside = document.querySelector('.product-detail');


let contenedor_renderCarrito = document.querySelector('.my-order-content');

const cardsContainer = document.querySelector('.contenedor-carts');



menuUsuario.addEventListener("click", intercambiarDesktopMenu);
menuHamIcon.addEventListener('click', intercambiarMobileMenu);
menuCarritoIcon.addEventListener('click', intercambiarCarritoAside);

//Bienvenida usuario logueado
//console.log(localStorage.getItem("usuario"));
document.querySelector('.nav-usuario').innerText = "¡ Hola " + localStorage.getItem("usuario") +" !";
//

function intercambiarDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function intercambiarMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}

function intercambiarCarritoAside() {
    const ismobilemenuClosed = mobilemenu.classList.contains('inactive');

    if (!ismobilemenuClosed) {
        mobilemenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

let productList = [];
productList.push({
    name: 'Guitarra Eléctrica',
    price: 120,
    image: '../imagenes/Taylor Electrica.jpg',
    unidades :"",
});
productList.push({
    name: 'Guitarra Epiphone',
    price: 140,
    image: '../imagenes/Epiphone.jpg',
    unidades :"",
});
productList.push({
    name: 'Piano',
    price: 560,
    image: '../imagenes/Piano.jpg',
    unidades :"",
});
productList.push({
    name: 'Ukulele',
    price: 70,
    image: '../imagenes/Ukulele.jpg',
    unidades :"",
});
productList.push({
    name: 'Microfono',
    price: 200,
    image: '../imagenes/Micrófono.jpg',
    unidades :"",
});
productList.push({
    name: 'Guitarra Telecaster',
    price: 120,
    image: '../imagenes/Telecaster.jpg',
    unidades :"",
});
productList.push({
    name: 'Saxofon',
    price: 350,
    image: '../imagenes/Saxofon.jpg',
    unidades :"",
});
productList.push({
    name: 'Guitarra Gybson',
    price: 200,
    image: '../imagenes/Gybson Acustica.jpg',
    unidades :"",
});
productList.push({
    name: 'Bateria',
    price: 720,
    image: '../imagenes/Bateria.jpg',
    unidades :"",
});
productList.push({
    name: 'Pua',
    price: 10,
    image: '../imagenes/Pua.jpg',
    unidades :"",
});
productList.push({
    name: 'Guitarra Gybson',
    price: 250,
    image: '../imagenes/Gybson Electrica.jpg',
    unidades :"",
});
productList.push({
    name: 'Guitarra Acústica',
    price: 90,
    image: '../imagenes/Guitarra acustica.jpg',
    unidades :"",
});
productList.push({
    name: 'Yamaha Cx4',
    price: 170,
    image: '../imagenes/Yamaha.jpg',
    unidades :"",
});

// <!-- <div class="items-carts">

// <img src="../imagenes/pexels-aidan-jarrett-718981.jpg" alt="">
// <div class="info-productos">

//     <div>
//         <p>$120</p>
//         <p>Jean</p>
//     </div>

//     <figure>
//         <img src="../iconos/agregarcarrito.svg" alt="carrito para agregar item">
//     </figure>

// </div> -->


    for (product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('items-carts');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('info-productos');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price; //
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productPrice.classList.add("precio");
        productName.classList.add("nombre");

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.classList.add("addCarrito");
        
        productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');
        //console.log(productImgCart);

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }


    let carritoDeCompra = [];
    let carritoCompleto = [];
    let itemRepetidos = [];
    let contador_carrito = document.querySelector('.contadorCarrito').innerText;
    let nombre_find;
    let producto ={};
    let cantidad_norepetidos = 0;
    let cantidad_repetidos = 0;
    let cantidad = 0;
    let total = 0;
    let carritoDeCompra_en_JSON =localStorage.getItem("carritoDeCompra");
    let carritoCompleto_en_JSON ="";

    // carritoDeCompra_en_JSON =JSON.parse(carritoDeCompra_en_JSON);
    // console.log("carrito de compra guardado en local stoge",carritoDeCompra_en_JSON);


function agregarCarrito(e){
    

    //contador_carrito = parseInt(contador_carrito) +1;
    //console.log("carrito contando : ", contador_carrito);
    //document.querySelector('.contadorCarrito').innerText = contador_carrito;

    //console.log("aqui ando,", e.target);
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    let bisabuelo = abuelo.parentNode;
    

    // console.log("hijo : ", hijo);
    // console.log("padre : ", padre);
    // console.log("abuelo : ", abuelo);
    // console.log("bisabuelo : ", bisabuelo);
    let precioProducto = abuelo.querySelector(".precio").textContent;
    let nombreProducto = abuelo.querySelector(".nombre").textContent;
    let imgProducto = bisabuelo.querySelector("img").src;
    
    //console.log("Nombre : ", nombreProducto);
    //console.log("Precio : ", precioProducto);
    //console.log("img ruta : ", imgProducto);

    
    producto = {
        nombre : nombreProducto,
        precio : precioProducto,
        img : imgProducto,
        unidades: cantidad,        

    };

    itemRepetidos = {
        nombre : nombreProducto,
        total: total,

    }

    carritoCompleto.push(producto);
   
    //console.log ("el completo es : ", carritoCompleto);
    
    let buscar_producto = carritoDeCompra.find(buscar_nombre_producto);
    //console.log("conteo de producto id : ", producto.id);
    
    if(buscar_producto == undefined){
       

        //console.log("el producto no esta repetido");
        carritoDeCompra.push(producto);
        //console.log("el carrito de no repetidos es : ", carritoDeCompra);
        producto.unidades = 1;
        
        contador_carrito = parseInt(contador_carrito) +1;
        //console.log("carrito contando : ", contador_carrito);
        document.querySelector('.contadorCarrito').innerText = contador_carrito;
        
       
    }else{
        
        for(let item of carritoCompleto){
            
            if(buscar_producto.nombre === item.nombre){
                
                itemRepetidos.nombre = item.nombre;
                itemRepetidos.total = itemRepetidos.total +1;
                //console.log("item nombre", itemRepetidos.nombre +"item cantidad",itemRepetidos.total);
            }
        }

        //console.log("el producto esta repetido");
        const index = carritoDeCompra.indexOf(buscar_producto);
        //console.log("el indice es : ",index);

        
        carritoDeCompra.splice(index,1);
        producto.unidades = itemRepetidos.total;       
        carritoDeCompra.push(producto);
       //console.log("el carrito de repetidos es : ", carritoDeCompra);

        

      
        
        
    }

    
    carritoDeCompra_en_JSON = JSON.stringify(carritoDeCompra);
    localStorage.setItem("carritoDeCompra", carritoDeCompra_en_JSON);

    carritoCompleto_en_JSON = JSON.stringify(carritoCompleto);
    localStorage.setItem("carritoCompleto", carritoCompleto_en_JSON);

    mostrar_carrito();
    
}


function buscar_nombre_producto(nombre_producto){

    return nombre_producto.nombre == producto.nombre;

}





function mostrar_carrito(){




contenedor_renderCarrito.innerHTML = "";

for(let producto of carritoDeCompra){


    let div_carrito = document.createElement("div");
    div_carrito.classList.add("shopping-cart");

    let img_figure = document.createElement("figure");
    let image = document.createElement("img");
    image.setAttribute('src', producto.img);
    img_figure.appendChild(image);

    let product_Name = document.createElement("p");
    product_Name.classList.add("nombreItemCarrito");
    product_Name.innerText = producto.nombre;

    let unidades = document.createElement("p");
    unidades.classList.add("unidades");
    unidades.innerText = producto.unidades;
    

    let product_Price = document.createElement("p");
    product_Price.innerText = producto.precio;

    let eliminar_producto = document.createElement("img");
    eliminar_producto.classList.add("eliminarProducto");
    eliminar_producto.setAttribute('src', '../iconos/icon_close.png');

    div_carrito.appendChild(img_figure);
    div_carrito.appendChild(product_Name);
    div_carrito.appendChild(unidades);
    div_carrito.appendChild(product_Price);
    div_carrito.appendChild(eliminar_producto);
    contenedor_renderCarrito.appendChild(div_carrito);    

}

let eliminar_Item = document.querySelectorAll(".eliminarProducto");
    for(let eliminar of eliminar_Item){
        eliminar.addEventListener("click", borrar_item);
       
    }

mostrar_total();


}

function mostrar_total(){

let total = document.createElement("div");
total.classList.add("order");
let p_total = document.createElement("p");
let span_total = document.createElement("span");
span_total.innerText = "Total";
p_total.appendChild(span_total);
let precioTotal = document.createElement("p");
precioTotal.innerText ="0";

total.appendChild(p_total);
total.appendChild(precioTotal);


contenedor_renderCarrito.appendChild(total);

let pagarCarrito = document.createElement("button");
pagarCarrito.classList.add("primary-button");
pagarCarrito.innerText = "Pagar";
contenedor_renderCarrito.appendChild(pagarCarrito);


    let TotalAPagar = 0;
    for(let item of carritoDeCompra){
        
        const str = item.precio;
        //console.log("str :", str);
        const newprecio = str.slice(1);
       //console.log("newprecio :", newprecio);
        //console.log("CARRO : ", newprecio);
        //console.log(typeof newprecio);
        TotalAPagar = TotalAPagar + parseInt(newprecio)*item.unidades;
        //console.log(TotalAPagar);
        precioTotal.innerText ='$' + TotalAPagar;
    }

}


let nombre_item = "";
function borrar_item(e){

    Toastify({
        text: "¡Producto eliminado!",
        duration: 1000,
        style:{
            fontSize: "1.3rem",
            fontFamily: 'Quicksand',
            color : '#FFFFFF',
            background:'#00757A',
        }
    }).showToast();

    contador_carrito = contador_carrito-1;
    document.querySelector('.contadorCarrito').innerText = contador_carrito;
    
    // console.log("borrar el producto", e.target);
    // console.log("borrar el producto", e.target.parentNode);

    let padre = e.target.parentNode;

    nombre_item = padre.querySelector('.nombreItemCarrito').innerText;
    //console.log("nombre : ", nombre_item);
    
    //eliminar del objeto la cantidad total en la función repetidos de agregar carrito
    

    padre.remove();

    actualizarCarrito();

}

let i = 0;
function actualizarCarrito(){   
    

    let carritoActualizado = carritoDeCompra.filter(actualizar);
    //console.log("nuevo arreglo actualizado", carritoActualizado);
    carritoDeCompra="";
    carritoDeCompra_en_JSON ="";
    carritoDeCompra = carritoActualizado;
    carritoDeCompra_en_JSON = JSON.stringify(carritoDeCompra);
    localStorage.setItem("carritoDeCompra", carritoDeCompra_en_JSON);

    let carritoCompletoActualizado = carritoCompleto.filter(actualizando);
    //console.log ("de la función filter : ", carritoCompletoActualizado);
    carritoCompleto="";
    carritoCompleto_en_JSON ="";
    carritoCompleto = carritoCompletoActualizado;
    carritoCompleto_en_JSON = JSON.stringify(carritoCompleto);
    localStorage.setItem("carritoCompleto", carritoCompleto_en_JSON);
    //carritoCompleto = carritoActualizado;
    // console.log("nuevo arreglo actualizado carrito", carritoDeCompra);
    // console.log("nuevo arreglo actualizado completo", carritoCompleto);

    function actualizar(objeto){

        if(objeto.nombre != nombre_item){

            return objeto;
        } else if (i==0) {
            i = i +1;
            
        } else if(i>=1){
            return objeto;
        }
        
    }

    i =0;
    mostrar_carrito();

    function actualizando(obj){

        if(obj.nombre == nombre_item){
            //console.log("son iguales", obj.nombre);
            
        }else{
            return obj;
        }

    }
}



let carritoCompra = document.querySelectorAll(".addCarrito");

for (let imgcompra of carritoCompra){

    imgcompra.addEventListener("click", agregarCarrito);
}





