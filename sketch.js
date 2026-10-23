/* eslint-disable no-undef, no-unused-vars */

//DECLARACIONES

// Variable donde se almacena el lienzo de p5
let canvas;
// Variable que almacena el alto del lienzo
let canvasHeight;
// Variable que almacena el ancho del lienzo
let canvasWidth;

// Constante con la URL del video que se va a reproducir.
const URL_VIDEO = "vid/video.webm";

// Variable que va a contener el video que se va a reproducir.
let videoConejo;

// Constante con la URL de la imagen del icono de filtro.
const URL_IMAGEN_FILTRO = "img/imagen.png";

// Variable que va a contener la imagen del icono de filtro.
let imagenFiltro;
// Variable que va a contener el identificador del filtro a aplicar
let filtro;

// FUNCIÓN DE PRECARGA DE LOS RECURSOS
function preload() {
  // Se carga el video y se asigna a la variable
  videoConejo = createVideo(URL_VIDEO);
  // Se carga la imagen del icono de filtro y se asigna a la variable
  imagenFiltro = loadImage(URL_IMAGEN_FILTRO);
}

// FUNCIÓN DE CONFIGURACIÓN
function setup() {
  // Asigna el alto del lienzo
  canvasHeight = windowHeight - 155;
  // Asigna el ancho del lienzo
  canvasWidth = windowWidth;
  // Crear un lienzo (área de dibujo) del tamaño de la ventana del navegador Web
  canvas = createCanvas(canvasWidth, canvasHeight);
  // Adiciona el lienzo al div con el atributo id igual a canvas-container
  canvas.parent("canvas-container");
  // No se va a usar directamente el objeto video por ende se oculta.
  // En su lugar se va a pintar cada una de las imágenes del video para poder
  // editarlas.
  videoConejo.hide();
  // Se inicia la reproducción del video en ciclo
  videoConejo.loop();
  // Se establece un valor para la variable filtro (no se aplica ninguno)
  filtro = 8;
}

// FUNCIÓN DONDE SE PROGRAMA LA FUNCIONALIDAD
function draw() {
  // Pinta en el lienzo cada uno de los cuadros del video
  image(videoConejo, 0, 0, 640, 360);
  // Aplica el filtro a la imagen del video
  switch (filtro) {
    case 0:
      filter(THRESHOLD);
      break;
    case 1:
      filter(GRAY);
      break;
    case 2:
      filter(OPAQUE);
      break;
    case 3:
      filter(INVERT);
      break;
    case 4:
      filter(POSTERIZE, 3);
      break;
    case 5:
      filter(DILATE);
      break;
    case 6:
      filter(BLUR, 3);
      break;
    case 7:
      filter(ERODE, 3);
      break;
    default:
      break;
  }
  // Pinta la imagen del icono de filtro.
  image(imagenFiltro, 10, 10, 32, 32);
}

// FUNCIÓN QUE SE LLAMA AL PRESIONAR CLIC EN EL RATÓN
function mouseClicked() {
  // Si se hace clic sobre la imagen del icono de filtro se da un valor al filtro
  if (mouseX > 10 && mouseX < 42 && mouseY > 10 && mouseY < 42) {
    filtro = Math.round(random(0, 7));
  }
}
