
import {

    quienesSomos, roma, paris, londres,imagenes 
} from '/js/menu.js'









imagenes.forEach(function(ruta) {
    var imagen = document.createElement("div");
    imagen.className = "imagen";

    var imgElement = document.createElement("img");
    imgElement.src = ruta;

    imagen.appendChild(imgElement);
    galeria.appendChild(imagen);
});






let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let precioElemento = document.getElementById('precio');
let parrafoElemento = document.getElementById('parrafo');
let photoElemento = document.getElementById('photo');

















enlaces.forEach(function (enlace) {


    
    

    
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {

   
       


            enlace.classList.remove('active');
        });
     
        
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



