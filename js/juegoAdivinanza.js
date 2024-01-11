
const imagenes = ["cebra.jpg", "leon.jpg", "hipopotamo.jpg", "jirafa.jpg", "mono.jpg", "oso.jpg", "reno.jpg", "tigre.jpg"];

// Obtén el botón y la imagen por sus ID
const boton = document.getElementById("btn1");
const imagen = document.getElementById("imgBoton");
var nombImg;

// Función para seleccionar aleatoriamente una imagen
function seleccionarImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    const nombreImagen = imagenes[indiceAleatorio];
    nombImg = nombreImagen;
    const rutaImagen = "../img/" + nombreImagen;

    // Cambia la fuente de la imagen en el botón
    imagen.src = rutaImagen;
    llenarNombres();
}


function llenarNombres(){
    var bt1 = document.getElementById("btn2");
    var bt2 = document.getElementById("btn3");
    var bt3 = document.getElementById("btn4");

    var opc1, opc2, opc3;
    var nomb1, nomb2, nomb3;

    opc1 = nombImg.split(".");
    var valido = true;
    while (valido){
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        const nombreImagen = imagenes[indiceAleatorio];
        if (nombreImagen != nombImg){
            opc2 = nombreImagen.split("."); 
            valido = false;
        }
    }
    valido = true
    while (valido){
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        const nombreImagen = imagenes[indiceAleatorio];
        if (nombreImagen != nombImg){
            opc3 = nombreImagen.split("."); 
            valido = false;
        }
    }
    nomb1 = opc1[0];
    nomb2 = opc2[0];
    nomb3 = opc3[0];

    var btns = [bt1, bt2, bt3];
    nomb4 = [nomb2, nomb3];
    var aleatorio = Math.floor(Math.random() * btns.length);

    btns[aleatorio].innerHTML = nomb1.toUpperCase();
    var contador = 0;
    for (var i = 0; i < btns.length; i++){
        
        if(i != aleatorio){
            btns[i].innerHTML = nomb4[contador].toUpperCase();
            contador = contador + 1;
        }
    }

}

function SeleccionarRespuesta(opcCorrecta){
    var miSonido;
    var res = nombImg.split(".");
    var respuesta = res[0].toUpperCase();
    if (respuesta == opcCorrecta.innerHTML) {
        miSonido = document.getElementById("acierto");
        miSonido.play();
        setTimeout(seleccionarImagenAleatoria, 2000);
    } else {
        miSonido = document.getElementById("fallo");
        miSonido.play();
    }
}


// Llama a la función al cargar la página
seleccionarImagenAleatoria();