//add the global timer variable
var slides,timer;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    //put the timeout in the timer variable
    timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(position) {
    //clear/stop the timer
    clearTimeout(timer);
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[index-1].style.display = "block";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

// FUNCION DE VIDEO AL CARUSEL
function playVideo(url) {
    let div = document.getElementsByClassName("video-embeded");
    let frame = document.getElementsByClassName("video-iframe");
    div[0].style.display = "flex";
    frame[0].src=url;
    var symbol = frame[0].src.indexOf("?") > -1 ? "&" : "?";
    //modify source to autoplay and start video
    frame[0].src += symbol + "&autoplay=1&mute=1";
}

function exitVideo() {
    let div = document.getElementsByClassName("video-embeded");
    let frame = document.getElementsByClassName("video-iframe");
    div[0].style.display = "none"
    frame[0].src="";
}

var player; // Variable global para el reproductor de YouTube

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-container', {
    videoId: 'TU_ID_DE_VIDEO',
    playerVars: {
      'autoplay': 1, // Auto reproducción
      'controls': 0, // No mostrar controles nativos de YouTube
      'loop': 1, // Repetir el video
      'rel': 0, // Evitar videos relacionados al final
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo(); // Iniciar la reproducción del video
}

function show(){
    let datos;
    datos="";
    datos+="Nombre: "+document.getElementById("nombre").value;
    datos+='\n';
    datos+="Edad: "+document.getElementById("edad").value;
    datos+='\n';
    datos+="Fecha: "+document.getElementById("fechanam").value;
    datos+="Correo: "+document.getElementById("email").value;
    if(document.getElementById('dama').checked){
        datos+="sexo: femenino ";
    }else if(document.getElementById('caballero').checked){
        datos+="sexo: masculino";
    }
    datos+='\n';
    if(document.getElementById('cuesla').checked){
        datos+="Uso en: Cuestiones laborales";
    }else if(document.getElementById('cuesesc').checked){
        datos+="Uso en: Cuestiones Escolares";
    }else if(document.getElementById('otros').checked){
        datos+="Uso en: Otros"
    }
    datos+='\n';
    datos+="Tipo de membresia: "+document.getElementById("memb").value;
    datos+='\n';
    datos+="Recomendarias utilizar Zoom: "+document.getElementById("recozoom").value;
    datos+='\n';
    alert(datos);
}