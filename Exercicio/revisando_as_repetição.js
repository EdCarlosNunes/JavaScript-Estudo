let name_spaceship = prompt("Qual o nome da sua nave?")//dando um nome a variavel 
let nameNew = "" // o novo nome atribundo 
let list = name_spaceship.split("") // .split("") vai pegar a palavra e deixar em uma lista 
let reverse = list.reverse() // .reverse() inverte a lista 
let newNameSpaceship = reverse.join("") //.join junta a lista

for(let i = 0; i < newNameSpaceship.length; i++){// crio a variavel i e atribuo 0 e faço ela percorrer a palavra 
    if(newNameSpaceship[i] == "e"){// crio if para quando o [i] for igual == "e"
        break //se if for true ele da um break para
    }else{
        nameNew +=newNameSpaceship[i] // enquanto a função if não é true ele vai atribuindo
    }
}

alert("O nome da Nave:  "+name_spaceship+ "\n Nome após ocutação "+ nameNew)// e no final ele imprime o novo nome 
//codificado de tras para frente e parando no e

// maneira 2 

let spaceshipName = prompt("Qual é o nome da nave?")//dando um nome a variavel 
let invertedName = "" // o novo nome atribundo 

for(let i = spaceshipName.length - 1; i >= 0; i--){// crio a variavel i e faz ela percorrer de tras para frente
    if(spaceshipName[i] == "e"){// crio if para quando o [i] for igual == "e"
        break//se if for true ele da um break para
    }
    invertedName += spaceshipName[i]// enquanto a função if não é true ele vai atribuindo
}
alert("O nome da Nave:  "+spaceshipName+ "\n Nome após ocutação "+ invertedName)