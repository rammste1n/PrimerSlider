var kratos = ["images/imagen1.jpg", "images/imagen2.jpg", "images/imagen3.jpg","images/imagen4.jpg","images/pelea.gif"];
var contador = 0;

function alante(){
    document.getElementById("imagen").src = kratos[contador];
    contador++;
    if (contador >= kratos.length) {
        contador = 0;
    }
}

function atras(){
    document.getElementById("imagen").src = kratos[contador];
    contador--;
    if (contador < 0) {
        contador = 4;
    }
}

function automatico(){
    document.getElementById("imagen").src = kratos[contador];
    contador++;
    if (contador >= kratos.length) {
        contador = 0;
    }

}
setInterval("automatico()", 5000);