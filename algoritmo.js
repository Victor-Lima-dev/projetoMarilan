const eVelocidadeMinutoT = document.querySelector("#mVelocidadeMinutoT")
const eVelocidadeHoraT = document.querySelector("#mVelocidadeHoraT")
const ebtnGerarTurno = document.querySelector("#btnGerarTurno")
const ehistoricoProducao = document.querySelector(".historicoProducao")
const ehistoricoProducaoReal = document.querySelector(".historicoProducaoReal")
const eproducaoDia = document.querySelector(".producaoDia")
const eproducaoDiaReal = document.querySelector(".producaoDiaReal")
const eproducaoRelativa = document.querySelector(".producaoRelativa")


let somaTurno = 0
let somaTurnoReal = 0
let item
let contadorItem
let contadorItemArray

let relatorioFeito = false

let textoItem
let registroH = 0

function produtividadePM(x) {
    let producao = x * 60
    return producao
}

function produtividadePH(x) {
    var producao = x / 60
    return producao
}

eVelocidadeMinutoT.addEventListener("change", mudancaPM)
eVelocidadeHoraT.addEventListener("change", mudancaPH)
ebtnGerarTurno.addEventListener("click", confereTurno)



function mudancaPM() {
    eVelocidadeHoraT.value = produtividadePM(eVelocidadeMinutoT.value)
}

function mudancaPH() {
    eVelocidadeMinutoT.value = produtividadePH(eVelocidadeHoraT.value)
}

function confereTurno() {
    if (relatorioFeito === false) {
        gerarTurno()
        gerarTurnoReal()
        gerarProdutividadeRelativa()
        
    }
    else {

        relatorioFeito = true
        for (var i = contadorItem.length - 1; i >= 0; i--) {
            contadorItem[i].remove()
        }
        gerarTurno()
        gerarTurnoReal()
        gerarProdutividadeRelativa()
    }
}

function gerarTurno() {
    relatorioFeito = true
    for (let i = 0; i < 8; i++) {
        registroH = produtividadePM(eVelocidadeMinutoT.value)

        somaTurno += registroH
        eproducaoDia.textContent = somaTurno

        item = document.createElement("li")
        item.classList = "listaHora"
        textoItem = document.createTextNode(registroH)
        item.appendChild(textoItem)
        ehistoricoProducao.appendChild(item)


        registroH = 0
    }
    contadorItem = document.querySelectorAll(".listaHora")
    
}


function gerarTurnoReal() {
    relatorioFeito = true
    for (let i = 1; i < 9; i++) {
        gerarParada()
        checarParada()
    }
    contadorItem = document.querySelectorAll(".listaHora")
    
}


let parada = 0
let parou = false

function gerarParada() {
    parada = Math.floor(Math.random() * 2 + 1)
    console.log(parada)

    if (parada > 1) {
        console.log("parou")
        parou = true
    }
    else {
        console.log("Segue o jogo")
        parou = false
    }
}

function checarParada() {
    if (parou === true) {
        registroH = 0
        gerarLista()
    }
    else {
        registroH = produtividadePM(eVelocidadeMinutoT.value)
        gerarLista()
    }
}

function gerarLista() {

    somaTurnoReal += registroH
    eproducaoDiaReal.textContent = somaTurnoReal

    item = document.createElement("li")
    item.classList = "listaHora"
    textoItem = document.createTextNode(registroH)
    item.appendChild(textoItem)
    ehistoricoProducaoReal.appendChild(item)

    registroH = 0
}

let producaoRelativa = 0

function gerarProdutividadeRelativa()
{
    producaoRelativa = somaTurnoReal / somaTurno
    eproducaoRelativa.textContent = producaoRelativa
    somaTurno = 0
    somaTurnoReal = 0
}
