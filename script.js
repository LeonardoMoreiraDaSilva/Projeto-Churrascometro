let inputAdultos = document.getElementById("Adultos");
let inputCriancas = document.getElementById("Criancas");
let inputDuracao = document.getElementById("Duracao");

let Resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");
    let Adultos = inputAdultos.value;
    let Criancas = inputCriancas.value;
    let Duracao = inputDuracao.value;

    let TotalCarne = (carnePP(Duracao) * Adultos) + (carnePP(Duracao)/2 * Criancas);
    let TotalCerveja = (cervejaPP(Duracao) * Adultos);
    let TotalBebidas = (bebidasPP(Duracao) * Adultos) + (carnePP(Duracao)/2 * Criancas);

    Resultado.innerHTML =`<p>${TotalCarne/1000} kg de Carne </p>`
    Resultado.innerHTML +=`<p>${Math.ceil(TotalCerveja/355)} Latas de cerveja </p>`
    Resultado.innerHTML +=`<p>${TotalBebidas/1000} Litros de bebidas </p>`
    
}
function carnePP(Duracao){
    if (Duracao >= 6){
       return 650;
    }
    else{
        return 400;
    }
}
function cervejaPP(Duracao){
    if (Duracao >= 6){
       return 2000;
    }
    else{
        return 1200;
    }
}
function bebidasPP(Duracao){
    if (Duracao >= 6){
       return 1500;
    }
    else{
        return 1000;
    }
}