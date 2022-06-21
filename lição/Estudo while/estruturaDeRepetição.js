let velocity = 50 //damos um valor para variavel inicial de 50
let acceleration = 5 // quanto vai acelerar toda vez que repetir
 
while(velocity <= 100){ // aqui o while ele repete até ter a condição que voce coloca
    console.log("Acelerando: Estamos a "+ velocity +" km/s") 
    velocity += acceleration // mesma coisa que colocar velocity = velocity + acceleration
}
//vai imprimir de 5 em 5 até o valor 100 que foi o que foi passado na while

//Exemplo 2 

let constellation =  "Andromeda" // atribuindo valor string
let pos = 0 //atribuindo numero
let constellationlength = constellation.length // contando quantar letras tem na variavel costallation

while(pos < constellationlength){ // enquanto a pos "posição" for igual ao numero de letras da variavel vai continuar
    if(constellation[pos] == "a" || constellation[pos] == "A"){ // ve se a variavel na posição que esta começando por 0
        console.log(pos) // se tem A ou a e mostrar a posição da letra [pos]
    }
    pos += 1 // para a pos partir de 0 que foi declarado adicionamos uma posisão acada loop
}
//no fim do codigo ele vai mostrar toda posiçoes que tem a letra A e a