






import {

    barcelona, roma, paris, londres
} from '/js/menu.js'



//dom

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let precioElemento = document.getElementById('precio');
let parrafoElemento = document.getElementById('parrafo');




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

    })
})





// get information

function obtenerContenido(enlace) {



    let contenido = {

        '¿Quiénes somos?': barcelona,
        'Nuestos Servicios': roma,
        'Contacta con nosotros': paris,
        'Aliados': londres,}
        
        return contenido[enlace]
}



