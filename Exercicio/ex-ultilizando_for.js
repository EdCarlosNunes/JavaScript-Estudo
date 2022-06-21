let name_nave = prompt("De um nome a Nave")
alert("vamos camuflar sua nave trocando algumas letras e voce escolhe")
let letra = prompt("Qual letra da sua nave quer muda digite apenas uma letra\nNome nave: "+name_nave)
let letra2 = prompt("E por qual letra trocar a "+ letra)
let newName_nave = ""
//explicando abaixo, criando uma variavel i que é igual a 0; enquanto i for menor < ao tamanho da palavra Spaceship
// no caso esta com o atributo "Helmet"; for vai adicionar mais 1 i = i + 1 (i++)
for(let i = 0; i < name_nave.length; i++){ // i++ mesma coisa que i += 1
    if(name_nave[i] == letra){ // se name_nave na posição que estiver o i for igual a letra que foi digitada 
        newName_nave += letra2 //ele vai adicionar a letra que o usuario digitou
    }else{ //se não for a letra que o usuario escolehu
        newName_nave += name_nave[i] // atribui o valor normal da possição i
    }
}

alert("O nome da Nave agora é "+newName_nave)
//codigo camufla a variavel name_nave trocando a letra pela qual o usuario esolehu