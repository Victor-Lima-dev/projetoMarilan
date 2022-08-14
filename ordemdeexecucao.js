//Funçao principal, ela que dispara todas as outras e por enquanto ta fazendo uma verificaçao
// Esse if deveria ser removido por outra funçao
    //Nessa nova função ele vai fazer a verificação da variavel relatorioFeito e se precisar
    //Também vai rodar aquele "for" ali e excluir os itens caso seja necessario
    function confereTurno() {  
            gerarTurno()
            gerarTurnoReal()
            gerarProdutividadeRelativa()
    }

