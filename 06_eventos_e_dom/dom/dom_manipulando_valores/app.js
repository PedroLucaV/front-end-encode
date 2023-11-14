function separaCaracter(){
    //Selecionar o valor de um elemento = .value    
    let caracter = document.getElementById("entrada").value
    // console.log(typeof caracter)

    //Limpar o campo de input
    document.getElementById("entrada").value = '' //substitui o valor por vazio

    //Limpando os espaços em branco
    caracter.trim()

    if(caracter === "0" || caracter === "1" || caracter === "2" || caracter === "3" || caracter === "4" || caracter === "5" || caracter === "6" || caracter === "7" || caracter === "8" || caracter === "9"){
        document.getElementById("apenas_numeros").value += caracter;
    }else if(caracter === " "){
        console.log("espaço não contado")
    }
    else{
        document.getElementById("apenas_letras").value += caracter;
    }
}