let num1 = 200;
let num2 = 102.32343;

console.log(num1.toString() + num2); // faz a concatenação de num1 (transformado em string) com o num2 (number)
console.log(num1.toString(2)); // printa o num1 em seu modo binário
console.log(num2.toFixed(2)); // num2 retorna seu valor com apenas 2 casas decimais
console.log(Number.isInteger(num1)); // verifica se o valor que está na variável é inteiro

let calculoTemp = num1 * "teste";
console.log(Number.isNaN(calculoTemp)); // verifica se o valor da variável cálculo é numérico ou um NaN (Not a Number)


let numUm = 0.7;
let numDois = 0.1;

// quando é feita essa somatória, não retorna um número inteiro - valor retornado 0.9999999999999999
numUm += numDois;
numUm += numDois;
numUm += numDois;

numUm = Number(numUm.toFixed(2)); // dessa forma é possível corrigir a somatória que não intera à 1
console.log("Corrigindo com funções do Javascript ", numUm);

numUm = 0.7; // só para resetar o valor de numUm
numUm = ((numUm * 100) + (numDois * 100)) / 100// outra forma de corrigir o mesmo problema
numUm = ((numUm * 100) + (numDois * 100)) / 100
numUm = ((numUm * 100) + (numDois * 100)) / 100

console.log("corrigindo com operações matemáticas: ", numUm);

