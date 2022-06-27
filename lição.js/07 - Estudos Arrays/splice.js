//Splice significa "mendar" ou "costurar"
//subistitui o array original
// sintaxe
//Array.splice(index[, deleteCount [, elemento1[, ...[, elementoN]]]])

let spaceship = ["Elemental", "Darwin", "Artemis", "Supernova"]

console.log(spaceship)
let removespaceship = spaceship.splice(1, 2, "Deméter", "Puller", "Golias")// vai na posção 1 remover 2 apartir dela e adicionar os outros
console.log(spaceship)
console.log(removespaceship)// retorna o que foi excluido

spaceship.splice(1, 3) // apenas remover apartir da posição 1, 3 elementos, tambem é possivel sem adicionar nada
console.log(spaceshipn)