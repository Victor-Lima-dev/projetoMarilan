//Funções de produtividade, que pegam os inputs e os utilizam dependendo de qual esta preenchido
//Talvez poderia ser um switch(estudar)
function produtividadePM(x) {
    let producao = x * 60
    return producao
}
function produtividadePH(x) {
    var producao = x / 60
    return producao
}


//Funçoes que executam a produtividade e modificam o dom, aqui também poderia ser um switch
function mudancaPM() {
    eVelocidadeHoraT.value = produtividadePM(eVelocidadeMinutoT.value)
}

function mudancaPH() {
    eVelocidadeMinutoT.value = produtividadePH(eVelocidadeHoraT.value)
}


//Essa função gera os valores do lado ideal, portanto sem nenhum evento aleatorio e também
//cria os itens novos no html, usa o for para executar pelo menos 8 vezes, também fornece
//dados para a funçao de gerar a soma total do turno.
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

// Função que gera dados com simulação de paradas, portanto ela dispara o gerar parada
// também dispara o checarParada que vai verificar a parada e rodar o coeficiente de parada
// por fim ele vai gerar a lista com os dados modificados pelo coeficiente
function gerarTurnoReal() {
    relatorioFeito = true
    for (let i = 1; i < 9; i++) {
        gerarParada()
        checarParada()
      
    }
    //Essa variavel é utilizada na hora de verificar se já existe uma lista ou não, caso
    // exista a propriedade letngh será >1, portanto será preciso limpar esses campos
    // para nao gerar listas infinitas
    contadorItem = document.querySelectorAll(".listaHora")

}


//Funçao que gera o evento de parada a partir da biblioteca de matemática do js
// solta um valor booleano que vai ser utilizado pelo checarParada
function gerarParada() {
    parada = Math.floor(Math.random() * 2 + 1)

    if (parada > 1) {
        console.log("parou")
        parou = true
    }
    else {
        console.log("Segue o jogo")
        parou = false
    }
}

//Essa função que roda depois do gerarParada vai pegar o booleano parou e vai dependendo dele
// gerar um coeficiente aleatório que irá afetar o valor do item da lista ou se ele vai usar um
// que já está predefinino
function checarParada() {
    if (parou === true) {
        gerarCoeficienteEficiencia()
        
        registroH = produtividadePM(eVelocidadeMinutoT.value) * coeficiente
        gerarLista()
    }
    else {
        registroH = produtividadePM(eVelocidadeMinutoT.value) * 0.9
        gerarLista()
    }

}

//Função que gera o coeficiente aleatório que é usado para modificar o valor do item criado
let coeficiente = 0
function gerarCoeficienteEficiencia() {
    coeficiente = Math.random().toFixed(2)
}


//Essa função gera os elementos no hmtl e também injeta os valores nela, fornece dados
// para a função que irá calcular a soma total dos itens
function gerarLista() {

    somaTurnoReal += registroH
    eproducaoDiaReal.textContent = somaTurnoReal

    interB = registroH

    //Rotina de Criação de um elemento que também coloca uma classe nele
    item = document.createElement("li")
    item.classList = "listaHora"
    textoItem = document.createTextNode(registroH)
    item.appendChild(textoItem)
    ehistoricoProducaoReal.appendChild(item)

    registroH = 0
}

//Função que calcula, a partir da soma totais das duas listas, o grau de eficiencia
// Também roda o metaConfere que compara a eficiencia com a meta

let producaoRelativa = 0
function gerarProdutividadeRelativa() {
    producaoRelativa = somaTurnoReal / somaTurno
    eproducaoRelativa.textContent = producaoRelativa
    somaTurno = 0
    somaTurnoReal = 0
    metaConfere()
}


//Função que compara o valor do input meta e os compara, dependendo do resultado ele vai
// setar uma classe que irá modificar a cor do elemento, afim de indicar se a meta foi
// atendida ou não
function metaConfere()
{
    if (producaoRelativa >= eMeta.value / 100)
    {
        eproducaoRelativa.classList = "green"
    }
    else
    {
        eproducaoRelativa.classList = "red"
    }
}
