document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el elemento DIV por su ID
    var div = document.getElementById("miDiv");
    // Adjuntar texto al elemento DIV
    div.innerText = "Hola Mundo desde un Archivo JS";
  });

  function cambiarTexto() {
    // Obtener el valor de la caja de texto
    var nuevoTexto = document.getElementById("textoNuevo").value;
    
    // Seleccionar el elemento DIV por su ID
    var div = document.getElementById("miDiv");
    
    // Adjuntar el nuevo texto al elemento DIV
    div.innerText = nuevoTexto;
    
    }


    //1


    function cambiarColorTexto() {
      var divTexto = document.getElementById('color');
      // Cambiar el color del texto a rojo
      divTexto.style.color = 'red';
    }
    window.onload = cambiarColorTexto;

    //2


    function cambiarColorTexto2() {
      var divTexto = document.getElementById('color2');
      // Cambiar el color del texto a rojo
      divTexto.style.color = 'blue';
    }




    //3


    // Función para cambiar el tamaño de la fuente
function estilo() {
  var contenedorTexto = document.getElementById('estilo');
  // Obtener el estado del checkbox de tamaño de fuente
  var checkbox = document.getElementById('checkbox-tamaño-fuente');

  // Si el checkbox está marcado, aumentar el tamaño de la fuente
  if (checkbox.checked) {
    contenedorTexto.style.fontSize = '20px';
  } else {
    // Si el checkbox no está marcado, restablecer el tamaño de la fuente al valor predeterminado
    contenedorTexto.style.fontSize = '16px'; // Tamaño de fuente predeterminado
  }
}

document.getElementById('checkbox-tamaño-fuente').addEventListener('change', estilo);


//4

// Inicializar contador
var contador = 0;

// Función para aumentar el contador y actualizar el texto
function aumentarContador() {
  contador++;
  // Obtener el elemento span que muestra el contador
  var contadorSpan = document.getElementById('contador');
  contadorSpan.textContent = contador; // Actualizar el texto del contador
}

//5

// Obtener el contenedor de la lista
var listaContainer = document.getElementById('lista');

// Crear una lista desordenada (<ul>)
var lista = document.createElement('ul');

// Array de elementos para la lista
var elementosLista = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

// Iterar sobre los elementos y crear elementos de lista (<li>)
elementosLista.forEach(function(elementoTexto) {
  var elementoLista = document.createElement('li');
  elementoLista.textContent = elementoTexto;
  lista.appendChild(elementoLista);
});

// Agregar la lista al contenedor
listaContainer.appendChild(lista);

//6

// Función para eliminar el contenido del div
function eliminarContenido() {
  var divContenedor = document.getElementById('contenido-a-borrar');
  divContenedor.innerHTML = ''; // Eliminar todo el contenido del div
}

//7

// Array de direcciones de imágenes
var direccionesImagenes = [
  '../img/cazador.jpg',
  '../img/Exile-Armor-Titan-Destiny-2.jpg',
  '../img/hechicero.png'
];


// Obtener el div donde se agregarán las imágenes
var divImagenes = document.getElementById('div-imagenes');

// Iterar sobre las direcciones de imágenes y crear elementos de imagen
direccionesImagenes.forEach(function(direccion) {
  // Crear un elemento de imagen
  var imagen = document.createElement('img');
  // Establecer la dirección de la imagen
  imagen.src = direccion;
  // Agregar la imagen al div
  divImagenes.appendChild(imagen);
  imagen.width = 500;
  imagen.height = 500;
});

//8

// Array de objetos con información de enlaces (texto y URL)
var enlaces = [
  { texto: 'Spotify', url: 'https://open.spotify.com/intl-es' },
  { texto: 'Youtube', url: 'https://www.youtube.com' },
  { texto: 'Bungie', url: 'https://www.bungie.net/7' }
];

// Obtener el div donde se agregarán los enlaces
var divEnlaces = document.getElementById('div-enlaces');

// Iterar sobre el array de enlaces y crear elementos de enlace
enlaces.forEach(function(enlaceInfo) {
  // Crear un elemento de enlace (<a>)
  var enlace = document.createElement('a');
  // Establecer el texto del enlace
  enlace.textContent = enlaceInfo.texto;
  // Establecer la URL del enlace
  enlace.href = enlaceInfo.url;
  // Abrir el enlace en una nueva ventana
  enlace.target = '_blank';
  // Agregar el enlace al div
  divEnlaces.appendChild(enlace);
  
  // Agregar un salto de línea después de cada enlace para separarlos visualmente
  divEnlaces.appendChild(document.createElement('br'));
});

//9

function aplicarAnimacion() {
  var contenido = document.getElementById('contenido');
  
  // Cambiar la transformación y la opacidad del elemento
  contenido.style.transform = 'translateX(100px) scale(1.5)';
  contenido.style.opacity = '0.5';
  
  // Después de 1 segundo, restablecer la transformación y la opacidad
  setTimeout(function() {
    contenido.style.transform = 'none';
    contenido.style.opacity = '1';
  }, 1000);
}