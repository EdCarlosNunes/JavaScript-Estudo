/*function primeiroBloco(){
    setTimeout( function(){
    console.log('Esse é o primeiro bloco de comandos após 5 segundos');
    }, 3000 );
}
function segundoBloco(){
	console.log('Esse é o segundo bloco de comandos');
}
primeiroBloco();
segundoBloco();
*/
//calback

function exibeMensagensNaOrdem(mensagem, callback) {
	console.log(mensagem);
	callback();
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', function() {
	console.log('Essa é a segunda mensagem exibida na ordem');
});