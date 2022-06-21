let nome_nave = prompt("Por favor fale o nome da nave")// nome da nave
let dobra = 0 // começa declarando dobra 0 pois não fez nnhenhuma
let dobraUser = prompt("Deseja entrar em dobra\n1- sim\n2- Não")// pergunta se vai  realizar a dobra

while(dobraUser == "1"){ //Enquanto a resposta for "1- sim" continua o loop
    dobra += 1 // se colocou 1 conta a primeira dobra
    alert("A "+ nome_nave+" ja realizou "+ dobra+ " dobras.") 
    dobraUser = prompt("Deseja entrar em outra dobra\n1- sim\n2- Não") // pergunta se quer continuar
}//enquanto a pesso digita "1" vai contabilizando se digitar "2" para 

alert("Nome da Nave: "+nome_nave+"\nDobras feitas: "+dobra)// e quando para mostra a quantidade que foi feita 