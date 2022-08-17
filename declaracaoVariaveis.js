//Inputs de Velocidade
const eVelocidadeMinutoT = document.querySelector("#mVelocidadeMinutoT") 
const eVelocidadeHoraT = document.querySelector("#mVelocidadeHoraT")



const ebtnGerarTurno = document.querySelector("#btnGerarTurno")

//São as tabelas que estao sendo geradas
const ehistoricoProducao = document.querySelector(".historicoProducao")
const ehistoricoProducaoReal = document.querySelector(".historicoProducaoReal")

//Estão sendo usadas para acompanhar as tabelas e gerar a comparação de produção
const eproducaoDia = document.querySelector(".producaoDia")
const eproducaoDiaReal = document.querySelector(".producaoDiaReal")
const eproducaoRelativa = document.querySelector(".producaoRelativa")

//Utilizadas para gerar os campos de produção
let somaTurno = 0
let somaTurnoReal = 0

//Usadas para criar os elementos hmtl que são usados nas tabelas
let item
let textoItem
let contadorItem
let contadorItemArray

//Usada para impedir a geração de tabelas infinitas
let relatorioFeito = false

//Usada para gerar os valores dos elementos das tabelas
let registroH = 0

//Usada para gerar os eventos de parada 
let parada = 0
let parou = false

//Input de meta que é usada para comparar com a producaoRelativa
const eMeta = document.querySelector(".meta")