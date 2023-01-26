// constantes não podem ser iniciadas sem valores
// constantes não podem ser alteradas seus valores
const numero1 = 2;
const numero2 = 10;

/*  o ideal é sempre evoluir o valor da variável durante a execução do
código, para que quando necessário será possível resgatar o 
valor original da variável */
const resultado = numero1 * numero2;
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

console.log(typeof resultado); // typeof identifica o tipo de dado de uma variável
console.log(typeof (numero1 * numero2), "resultado: ", resultado);
