let multa
let valor

function verificaMulta(){
    let res = document.getElementById("resultado")
    let val = document.getElementById("valor")
    let velocidade = Number(document.getElementById("velocidade").value)
    if(velocidade > 60 || velocidade < 30){
        multa = true
    }else{
        multa = false
    }

    if(multa == true){
        res.innerHTML = "Foi aplicada multa de: "
    }else{
        res.className = "green";
        res.innerHTML = "Não foi aplicada multa"
        
    }

    if(velocidade <= (1.2*60) && velocidade > 60 || velocidade < 30){
        val.className = "red";
        val.innerHTML = "R$ 130,16 + 4 Pontos na CNH"
    }else if(velocidade > (1.2*60) && velocidade <= (1.5*60)){
        val.className = "red";
        val.innerHTML = "R$ 195,23 + 5 Pontos na CNH"
    }else if(velocidade > (1.5*60)){
        val.className = "red";
        val.innerHTML = "R$ 880,41 + 7 Pontos na CNH"
    }else{
        val.innerHTML = " "
    }
}