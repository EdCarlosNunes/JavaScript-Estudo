/*
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.
Uma função JavaScript é executada quando "algo" a invoca (chama).
*/

function algumaTarefa(){
    // <bloco de codigo>
 }
 algumaTarefa()
 
 // exemplo 1
 
 function greetPilot1(){ // estamos atribundo um nome a nossa função
     console.log("Bom dai, piloto")// e atribuimos a função alerta
 }
 // porem assim como esta não da alerta nenhum 
 
 //exemplo 2
 
 function greetPilot2(){ // estamos atribundo um nome a nossa função
     console.log("Bom dai, piloto")// e atribuimos a função alerta
 }
 greetPilot2()//aqui estamos chamando a função
 //nessa o alerta vai aparecer pois chamamos a função 
 
 //exemplo 3
 
 function NameFutbol(){
     let jogador1 = "Neymar"
 }
 
 let jogadro2 = "cristiano"
 
 console.log("Jogador 1: "+ jogador1 +"\nJogador 2: "+ jogadro2)
 /*
 Variáveis ​​locais
 Variáveis ​​declaradas dentro de uma função JavaScript tornam-se LOCAL para a função.
 Variáveis ​​locais só podem ser acessadas de dentro da função.
 */
 //exemplo 4