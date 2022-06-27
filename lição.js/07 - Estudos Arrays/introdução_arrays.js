let listspaceship = ["Super nova", "Saturno", "Elemental", "Spaceship"]
//                    0             1          2           3            ordem de uma lista
console.log(listspaceship[0]) // chama o a variavel array e estou pedindo [0]= posição primeira
console.log(listspaceship[4]) // se chamar uma posição que não tem ele retorna undefined = indeterminado

let listspaces2 = ["Supernova", 7, true] // podemos criar array com numero string e booleanos

console.log(listspaces2[0]) // prmeiro da lista [0]
console.log(listspaces2[1]) // segundo da lista [1]
console.log(listspaces2[2]) // terceiro da lista [2]

let listspace3 = new Array("Supernova", "Elemental", "Spaceship") // outra maneira de criar array
let listspace4 = new Array(1, 2, 3, 4) //e tambem pode numero igual a outra, não podemos passar apenas um numero

console.log(listspace3) // chamando toda a array
console.log(listspace4) // chamando toda a array

//só chamar o new Array apenas quando for usar uma lista vazia 
// quando usar lista normal chamar com [1, 2, 3, 4]