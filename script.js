//a --- ai
//e -- enter
//i -- imes
//o -- ober
//u -- ufat
function encriptar() {
    var texto = document.getElementById("input-text").value.toLowerCase();
    var textCifrado = texto.replace (/e/igm, "enter");
    var textCifrado = textCifrado.replace(/o/igm, "ober");
    var textCifrado = textCifrado.replace(/i/igm, "imes");
    var textCifrado = textCifrado.replace(/a/igm, "ai");
    var textCifrado = textCifrado.replace(/u/igm, "ufat");
    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-right").style.display = "none";
    document.getElementById("textarea-right").innerHTML = textCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-text").value.toLowerCase();
    var textCifrado = texto.replace(/enter/igm, "e");
    var textCifrado = textCifrado.replace(/ober/igm, "o");
    var textCifrado = textCifrado.replace(/imes/igm, "i");
    var textCifrado = textCifrado.replace(/ai/igm, "a");
    var textCifrado = textCifrado.replace(/ufat/igm, "u");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-right").style.display = "none";
    document.getElementById("textarea-right").innerHTML = textCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}
function copy(){
    var contenido = document.querySelector("#textarea-right");
    contenido.select();
    document.execCommand("copy");
}
