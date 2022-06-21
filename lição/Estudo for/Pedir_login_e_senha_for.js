let user = prompt("Seu login:") // variavel
console.log(user)

for(let nome = "Ed"; nome != user;){
  user = prompt("Login errado, digite novamente")
  console.log(user)
}

let keyUser = prompt("Sua senha:") // variavel

for(let key = "123"; key != keyUser;){
  keyUser = prompt("Senha errda, digite novamente")
  console.log(keyUser)
}