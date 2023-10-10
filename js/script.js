
import {

    quienesSomos, roma, paris, londres,imagenes 
} from '/js/menu.js'





const body = document.querySelector("body");

const overlay = document.querySelector("#overlay");
overlay.addEventListener('click', of)
function of() {
   overlay.style.display = "none";

   body.classList.remove("hidden");

};















    imagenes.forEach(function(ruta) {
        let imagen = document.createElement("div");
        imagen.className = "imagen";
    
        let imgElement = document.createElement("img");
        imgElement.src = ruta;
        imgElement.title = "nosotros"; // Reemplaza esto con tu descripción deseada
    
        imagen.appendChild(imgElement);
        galeria.appendChild(imagen);
    });









let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let precioElemento = document.getElementById('precio');
let parrafoElemento = document.getElementById('parrafo');
let photoElemento = document.getElementById('photo');
let menuButon=document.querySelector('#toogleMenu');
let navBarMenu =document.getElementById('navMenu');
let contenidoToogle= document.querySelector('.contenedor');
let contacToogle=document.querySelector('#toogleContacto');
let infoBoton=document.querySelector('.contactoToogle');

menuButon.addEventListener('click',toogleMenu);
 function toogleMenu (){

   navBarMenu.classList.toggle('activeNav');
contenidoToogle.classList.toggle('activeContendor');


 }


contacToogle.addEventListener('click',info);
function info (){

infoBoton.classList.toggle('contactoActive');

}



enlaces.forEach(function (enlace) {
    
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {

    

            enlace.classList.remove('active');

        });
        contenidoToogle.classList.toggle('activeContendor');
        navBarMenu.classList.toggle('activeNav');
        this.classList.add('active')
          
    

        let contenido= obtenerContenido (this.textContent)
       
        tituloElemento.innerHTML=contenido.titulo
        subTituloElemento.innerHTML=contenido.subtitulo
        precioElemento.innerHTML=contenido.precio
        parrafoElemento.innerHTML=contenido.parrafo
        photoElemento.innerHTML= contenido.photo
    
        


    })
})





// get information

function obtenerContenido(enlace) {



    let contenido = {

        '¿Quiénes somos?': quienesSomos,
        'Nuestos Servicios': roma,
        'Contacta con nosotros': paris,
        'Aliados': londres,
    }

        
        return contenido[enlace]

   






}



const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')
const img = document.querySelectorAll('.img')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        
        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -20;

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
img.forEach( ( cadaImagen , i )=> {
    // Asignamos un CLICK a cada
    img[i].addEventListener('click',()=>{
       

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -20;

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})