// Todas as string são indexadas - possuem índices
//            0123456789                  
const nome = "Renato Santana";
console.log(nome[2]); // printa o 2º elemento da string

///////////////////////////////////////////////////////////////////////////

//                 0       1         2    
const alunos = ['Luiz', 'Renato', 'Karina'];
alunos[1] = 'Renato Santana'; // altera o valor do array no índice 1
alunos[3] = 'Carlos'; // adiciona um íncide a mais ao array
console.log(alunos[1]+ ", " +alunos[3]);

///////////////////////////////////////////////////////////////////////////

const numeros = [12, 23, 4324];

// encontra o tamanho total do array e atribui um valor ao último índice
numeros[numeros.length] = 3231;
numeros[numeros.length] = 10032;
numeros[numeros.length] = 329023901;

// função .push identifica o tamanho do array e adiciona um valor ao último índice
numeros.push(2023);

/* função .unshift identifica o tamanho do array e adiciona um valor ao primeiro índice
todos os índices serão acrescentados +1 */
numeros.unshift(2022);
console.log(numeros, '\n');

///////////////////////////////////////////////////////////////////////////

const carros = ['Ferrari', 'Mustang', 'Camaro'];
console.log(carros);

// função .pop() remove o último elemento do array (é possível armazenar o valor removido em uma variável)
const valorRemovidoFim = carros.pop(); 
console.log(`Valor removido do Final: ${valorRemovidoFim}`);

const valorRemovidoInicio = carros.shift(); 
console.log(`Valor removido do Início: ${valorRemovidoInicio}`);

console.log('Valor restante no Array: ', carros, '\n');

///////////////////////////////////////////////////////////////////////////

const casa = ['mesa', 'sofa', 'tapete', 'tv'];

delete casa[1]; // delete o valor de um índice, assim o tornando vazio
console.log(casa);
console.log(casa.slice(2, 4)); // função .slice(), recebe valor inicial + valor final para fazer o corte

console.log(casa instanceof Array); // retorna true para: sim é uma instância de array, false caso contrário

