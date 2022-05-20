const inputTexto = document.querySelector(".input-texto");
const outputTexto = document.querySelector(".output-texto");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    outputTexto.value = textoEncriptado;
    outputTexto.style.backgroundImage="none"
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    outputTexto.value = textoDesencriptado
    outputTexto.style.backgroundImage="none"
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringDesencriptada;
}


function copyToClipBoard() {
    var textoCopiado = outputTexto;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0,99999)
    document.execCommand('copy');
    alert("Texto copiado!");
    
    inputTexto.value = "";
    outputTexto.value = "";
    inputTexto.focus();
    
}

  function btnLimpar() {
    var clearText = document.querySelector(".output-texto");
    clearText.select();
    document.querySelector(".output-texto").style.display = "block";
    document.querySelector(".output-texto").value = "";
    document.execCommand('limpar');
    
    inputTexto.value = "";
    outputTexto.value = "";
    inputTexto.focus();

}  
    



  
    

  
   
    