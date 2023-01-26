// Operadores aritméticos

/*  
    + adição, 
    - subtração, 
    / divisão, 
    * multiplicação, 
    ** potenciação
*/

/*
    Incremento = ++
    Decremento = --
*/

/*
parseInt: para conversão de string para inteiro
parseFloat: para conversão de string para ponto flutuante
Number: para conversão para tipo número, sendo Float ou Int

const num1 = Number('10.2');
const num2 = Number("2");
*/
const num1 = parseFloat('10.2');
const num2 = parseInt("2");

console.log("Soma:", (num1 + num2));
console.log("Subtração:", (num1 - num2));
console.log("Divisão:", (num1 / num2));
console.log("Multiplicação:", (num1 * num2));
console.log("Potenciação:", (num1 ** num2));
console.log("Resto da Divisão:", (num1 % num2)); // quando a divisão for exata, é resultado é 0