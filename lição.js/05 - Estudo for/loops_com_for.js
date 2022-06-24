let spacechip = "Helmet"
let newSpaceship = ""
//explicando abaixo, criando uma variavel i que é igual a 0; enquanto i for menor < ao tamanho da palavra Spaceship
// no caso esta com o atributo "Helmet"; for vai adicionar mais 1 i = i + 1 (i++)
for(let i = 0; i < spacechip.length; i++){ // i++ mesma coisa que i += 1
    if(spacechip[i] == "e" || spacechip[i] == "E"){ // se spaceship na posição que estiver o i for igual a letra e
        newSpaceship += "i" // ele vai adicionar a letra "i"
    }else{ // se não for a letra "e"
        newSpaceship += spacechip[i] // atribui o valor normal da possição i
    }
}
console.log(newSpaceship)
//codigo camufla a variavel spaceship trocando a letra "e"