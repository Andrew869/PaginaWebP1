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
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'autoplay': 0, // Cambia a 1 para autoplay
            'controls': 1,
            'rel': 0,
            'showinfo': 0
        }
    });
}

function show(){
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