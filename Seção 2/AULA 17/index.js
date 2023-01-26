// Tudo que está dentro do bloco de código da função será executado quando a função for chamado durante a execução do programa
function mensagem(nome) {
    console.log(`Hello ${nome}, everything is ok?\n`);
}

mensagem('Renato');

//////////////////////////////////////////////////////////////////
// FUNÇÃO COM RETORNO, É POSSÍVEL ARMAZENAR O RETORNO DE UMA FUNÇÃO DENTRO DE UMA VARIÁVEL
function saudacao(nome) {
    return `Olá, tudo bem? ${nome}`; // O código só é executado até o return, nada após executa
}

const retorno = saudacao('Karina');
console.log(retorno);

function somatorio(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}
// printa o retorno da soma que foi feita dentro da função somatorio
console.log(`Seu resultado é: ${somatorio(20, 3)}`); 

//////////////////////////////////////////////////////////////////
// Também é possível colocar a função direto dentro de uma variável
const raizQuadrada = function(numero) {
    return numero ** (1/2);
}; //obrigatório o uso do ;

console.log(`Sua raiz quadrada é: ${raizQuadrada(81)}\n`);

// ARROW FUNCTION, função com a sintaxe mais simplificada
const raiz = valor => {
    return valor ** (1/2);
}
console.log(`Arrow function menos simplificada: ${raiz(25)}`);

const raiz1 = n => n ** (1/2);
console.log(`Utilizando a Arrow function: ${raiz1(9)}`);


