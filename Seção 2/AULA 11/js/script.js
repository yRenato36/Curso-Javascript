window.alert("Minha mensagem");

// essa função retorna um valor true ou false
window.confirm("Deseja prosseguir?");

// essa função pede ao usuário que insira dados na caixinha
window.prompt("Digite o seu nome:");

// colocando uma função dentro de uma variável, o valor dessa função será atribuida à variável
const confirmar = window.confirm("Escolha uma opção");
console.log(confirmar);

// recebe um valor em string, converte para número depois atribui o valor já convertido à variável
let num1 = Number(window.prompt("Digite um número"));
let num2 = Number(window.prompt("Digite outro número"));

//num1 = Number(num1);
//num2 = Number(num2);
window.alert(`Somatória dos números digitados: ${num1 + num2}`);