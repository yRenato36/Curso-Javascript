/* 
Dados Primitivos (imutáveis): string, number, undefined,  null
(bigint, symbol) 

Dados por Referência (mutável): array, object, funtion
    - esses tipos de dados são referenciados em um local na memória RAM
*/

let A = [1, 2, 3];
let B = A; // variável B recebe o array que está em A
console.log(`valor a: ${A} valor b: ${B}`);

/* quando é alterado o array em A, o array em B também muda
isso ocorre porque a variável B está apontando para o mesmo endereço na memória que A */
A.push(4);
console.log(`valor a: ${A} valor b: ${B}`);

let A1 = [1, 2, 3];

/* dessa forma, é possível copiar o array da variável A1 e colocar na variável B1
o que torna o array A1 independente do array B1 */
let B1 = [...A1];

////////////////////////////////////////////////////////////////////////////////
const objectA = {
    nome: 'Renato',
    sobrenome: 'Santana'
};

// nesse caso, o objectB está recebendo o mesmo endereço na memória que o objectA
const objectB = objectA;

objectB.nome = 'Matheus';
console.log(objectA);
console.log(objectB, '\n');

// Fazendo uma cópia
const objectC = {...objectA}
objectC.nome = 'Cláudio'; // mudando o nome no objectC que copiou todos os atributos de objectA
console.log(objectC);