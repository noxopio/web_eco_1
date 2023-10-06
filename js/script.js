
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



