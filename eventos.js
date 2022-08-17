//Eventos que sao ativados pela mudança nos inputs, disparam mudanças nos inputs
eVelocidadeMinutoT.addEventListener("change", mudancaPM)
eVelocidadeHoraT.addEventListener("change", mudancaPH)

function teste() {
    eVelocidadeHoraT.value = 5
}

//Evento que gera o historico de producao
ebtnGerarTurno.addEventListener("click", verificacao)



const tr = document.querySelector(".tr")

let eTr
const eCorpo = document.querySelector(".corpo")
function criarTr() {
    eTr = document.createElement("tr")
    eTr.classList = "tr"

    eCorpo.appendChild(eTr)
    console.log("criou")
}

let horas = 0
let coluna
let textoColuna
function criarColuna() {
    coluna = document.createElement("th")
    coluna.classList = "item"

    textoColuna = document.createTextNode(horas)
    
    
    coluna.appendChild(textoColuna)
    eTr.appendChild(coluna)
}

function tabela() {

    item = document.createElement("td")
    item.classList = "item"
    textoItem = document.createTextNode(registroH)
    item.appendChild(textoItem)
    eTr.appendChild(item)
}

let ideal = 0
let real = 0

let verificador
let tabelaFeita = false

let verificador2

function linha() {
    for (let i = 0; i < 8; i++) {

        horas += 1


        criarTr()
        criarColuna()
        relatorioFeito = true
        registroH = produtividadePM(eVelocidadeMinutoT.value)
        tabela()
        ideal = registroH
        registroH = 0

        gerarParada()
        checarParada()
        registroH = produtividadePM(eVelocidadeMinutoT.value)
        registroH = registroH * coeficiente
        tabela()
        real = registroH
        registroH = 0

        grauEficiencia()
        tabela()

        registroH = 0
        real = 0
        ideal = 0
    }
    verificador = document.querySelectorAll(".item")

}
let intermediario = 0
let metaDesejada = 0.1

function grauEficiencia() {
    registroH = real / ideal
}





function verificacao() {
    if (relatorioFeito === true) {
        for (var i = verificador.length - 1; i >= 0; i--) {
            verificador[i].remove()
        }
        relatorioFeito = false

        linha()
    }
    else {
        linha()
    }
}

function gerarParada() {
    parada = Math.floor(Math.random() * 2 + 1)


    if (parada > 1) {
        parou = true

    }
    else {
        parou = false
    }
}

function checarParada() {
    if (parou === true) {
        gerarCoeficienteEficiencia()
    }
    else {
        coeficiente = 1
    }

}