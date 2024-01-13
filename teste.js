//odds e apostas
let futsal = document.getElementById("jogos_ocorrendo")
let volei = document.getElementById("jogos_volei")
let basquete = document.getElementById("jogos_basquete")
let natacao = document.getElementById("natacao")
let atletismo = document.getElementById("atletismo")

function exibir_futsal(){
    futsal.style.display = futsal.style.display === 'none' ? 'block' : 'none';
}
function exibir_volei(){
    volei.style.display = volei.style.display === 'none' ? 'block' : 'none';
}
function exibir_basquete(){
    basquete.style.display = basquete.style.display === 'none' ? 'block' : 'none';
}
function exibir_natacao(){
    natacao.style.display = natacao.style.display === 'none' ? 'block' : 'none';
}
function exibir_atletismo(){
    atletismo.style.display = atletismo.style.display === 'none' ? 'block' : 'none';
}