let spaceshipName = "Supernova" // atribuindo "Supernova" para

for(let i = 0; i < spaceshipName.length; i++){ // fazendo a variavel i percorrer pela string "Supernova"
    if(spaceshipName[i] == "o"){ // damos uma condião para achar a letra "o"
        break // caso ache a letra "o" pede para parar a a função for
    }
    console.log(spaceshipName[i]) // enquanto não acha a condição pedida no if conua imprimindo
}