const eVelocidadeMinutoT = document.querySelector("#mVelocidadeMinutoT")
const eVelocidadeHoraT = document.querySelector("#mVelocidadeHoraT")
const ebtnGerarTurno = document.querySelector("#btnGerarTurno")
const ehistoricoProducao = document.querySelector(".historicoProducao")


let item
let contadorItem
let contadorItemArray

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
ebtnGerarTurno.addEventListener("click", gerarTurno)



function mudancaPM() {
    eVelocidadeHoraT.value = produtividadePM(eVelocidadeMinutoT.value)
}

function mudancaPH() {
    eVelocidadeMinutoT.value = produtividadePH(eVelocidadeHoraT.value)
}


function gerarTurno() {
    for (let i = 0; i < 8; i++) {
        registroH = produtividadePH(eVelocidadeHoraT.value)

        item = document.createElement("li")
        item.classList = "listaHora"
        textoItem = document.createTextNode(registroH)
        item.appendChild(textoItem)
        ehistoricoProducao.appendChild(item)

        registroH = 0
    }
    contadorItem = document.querySelectorAll(".listaHora")
    contadorItemArray = Array.from(contadorItem)
    console.log(contadorItemArray)
}

