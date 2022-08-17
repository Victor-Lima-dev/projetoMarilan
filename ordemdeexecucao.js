//Funçao principal, ela que dispara todas as outras e por enquanto ta fazendo uma verificaçao
// Esse if deveria ser removido por outra funçao
    //Nessa nova função ele vai fazer a verificação da variavel relatorioFeito e se precisar
    //Também vai rodar aquele "for" ali e excluir os itens caso seja necessario
    function confereTurno() {  
            gerarTurno()
            gerarTurnoReal()
            gerarProdutividadeRelativa()
            
    }


/*
Refatoração
1 - Refazer as referencias do DOM
2 - Transformar a lista ul em uma tabela

*/

 /*
Novas funções
1 - O input range gerar uma label com seu value
2 - Quando não houver parada, nós vamos ingetar a cor verde naquela linha da tabela
3 - Um modal que aparece na hora falando se a meta foi atingida ou não
 */