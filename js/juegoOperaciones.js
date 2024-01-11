// numeros de la suma
var n1, n2, aux;
// respuesta de la suma
var resp;
// opcion correcta
var opc;

txt_suma = document.getElementById("sum");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("result");

function VaciarCampos(){
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
}

function AsignarResultado(){
    opc = Math.round(Math.random() * 2 );
    aux = Math.round(Math.random() * 3 );
    if (opc == 0){
        op1.innerHTML = resp;
        op2.innerHTML = resp + aux;
        op3.innerHTML = resp - aux;
    } 
    if (opc == 1){
        op2.innerHTML = resp;
        op1.innerHTML = resp + aux;
        op3.innerHTML = resp - aux;
    } 
    if (opc == 2) {
        op3.innerHTML = resp;
        op1.innerHTML = resp + aux;
        op2.innerHTML = resp - aux;
    }
}

function JuegoSuma(num1, num2){
    resp = num1 + num2;
}

function JuegoResta(num1, num2){
    resp = num1 - num2;
}


function AsignarNumeros(){
    VaciarCampos();

    n1 = Math.round(Math.random() * 9);
    n2 = Math.round(Math.random() * 9);

    aux = Math.round(Math.random() * 1);
    if (aux == 0) {
        JuegoSuma(n1, n2);
        txt_suma.innerHTML = n1 + " + " + n2 + " = ";
    }else {
        JuegoResta(n1, n2);
        txt_suma.innerHTML = n1 + " - " + n2 + " = ";
    }

    AsignarResultado(); 
}


function SeleccionarRespuesta(opcCorrecta){
    var miSonido;
    txt_resultado.innerHTML = opcCorrecta.innerHTML;

    if (resp == opcCorrecta.innerHTML) {
        miSonido = document.getElementById("acierto");
        txt_msj.innerHTML = "¡¡¡Bien Hecho!!!";
        txt_msj.style.color = 'purple';
        miSonido.play();
        setTimeout(AsignarNumeros, 2000);
    } else {
        miSonido = document.getElementById("fallo");
        txt_msj.innerHTML = "¡¡¡Vuelve a intentarlo!!!";
        txt_msj.style.color = 'red';
        miSonido.play();
        setTimeout(VaciarCampos, 2000);
    }
}

// limpiara los campos cada que cargue la pagina
AsignarNumeros();