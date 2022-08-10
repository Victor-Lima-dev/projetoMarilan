const eVelocidadeMinutoT = document.querySelector("#mVelocidadeMinutoT")
const eVelocidadeHoraT = document.querySelector("#mVelocidadeHoraT")
const ebtnGerarTurno = document.querySelector("#btnGerarTurno")
const ehistoricoProducao = document.querySelector(".historicoProducao")
const ehistoricoProducaoReal = document.querySelector(".historicoProducaoReal")

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
        gerarTurnoReal()
        gerarTurno()
        
    }
    else {
        console.log("chegou aqui")
        relatorioFeito = true
        for (var i = contadorItem.length - 1; i >= 0; i--) {
            contadorItem[i].remove()
        }
        gerarTurno()
        gerarTurnoReal()
    }
}

function gerarTurno() {
    relatorioFeito = true
    for (let i = 0; i < 8; i++) {
        registroH = produtividadePM(eVelocidadeMinutoT.value)

        item = document.createElement("li")
        item.classList = "listaHora"
        textoItem = document.createTextNode("Hora" + " " + i + " " + registroH)
        item.appendChild(textoItem)
        ehistoricoProducao.appendChild(item)
        
        registroH = 0
    }
    contadorItem = document.querySelectorAll(".listaHora")
}


function gerarTurnoReal() {
    relatorioFeito = true
    for (let i = 1; i < 9; i++) {
        registroH = produtividadePM(eVelocidadeMinutoT.value)

        item = document.createElement("li")
        item.classList = "listaHora"
        textoItem = document.createTextNode("Hora" + " " + i + " " + registroH)
        item.appendChild(textoItem)
        ehistoricoProducaoReal.appendChild(item)
        
        registroH = 0
    }
    contadorItem = document.querySelectorAll(".listaHora")
}


// gerar um evento de parada que vai fazer com que a produção daquela hora seja descartada
