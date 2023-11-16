const inNome = document.getElementById("nome")
const rbM = document.getElementById("sexMasc")
const rbF = document.getElementById("sexFem")
const inAlt = document.getElementById("alt")
const outResp = document.getElementById("res")

const calc = document.getElementById("calc")
calc.addEventListener('click', function(){
    let nome = inNome.value
    let masculino = rbM.checked
    let feminino = rbF.checked
    let altura = Number(inAlt.value)
    let peso = 0
    
    // console.log(nome, masculino, feminino, altura)

    if (altura == '' || altura > 2.20 || altura < 0.60){
        window.alert("[ERRO!]-NÃO FOI POSSIVEL CALCULAR OS VALORES RECEBIDOS -\nDigite uma altura entre 2.20 e 0.60!")
        inAlt.focus()
        return
    }else if(nome == "" || (masculino === false && feminino === false)){
        window.alert("[ERRO!]-NÃO FOI POSSIVEL IDENTIFICAR O NOME OU SEXO -\nDigite um nome dentro do campo OU selecione um gênero")
        inNome.focus()
        return
    }else{
        if(masculino === true){
            peso = 22 * (Math.pow(altura, 2))
            peso = peso.toFixed(2)
        }else{
            peso = 21 * (Math.pow(altura, 2))
            peso = peso.toFixed(2)
        }
    }

    outResp.innerHTML = `Olá ${nome}, com sua altura de ${altura}m, seu peso ideal é de: ${peso}kg`
})