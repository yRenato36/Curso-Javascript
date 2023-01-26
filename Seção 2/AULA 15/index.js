let num1 = 9.32321332;
let num2 = Math.floor(num1); // arredondamento para baixo
console.log(`arredondamento para baixo: ${num2}`);

num2 = Math.ceil(num1); // arredondamento para cima
console.log(`arredondamento para cima: ${num2}`);

/* >= 0.5 = arredondamento para cima, 
<= 0,49 arredondamento para baixo */
let numero = 9.24; 
num2 = Math.round(numero);
console.log(`arredondamento para o número mais próximo: ${num2}`);

console.log(Math.max(2,3,4,21,123,54)); //Localiza o maior número
console.log(Math.min(2,3,4,21,123,54)); //Localiza o menor número

const numAleatorio = Math.round(Math.random() * (10 - 5) + 5); // imprime um número de 5 à 10
console.log(numAleatorio);