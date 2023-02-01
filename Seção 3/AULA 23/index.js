/* 
valores que são avaliados em false, chamados de falsy:

false (o valor literal)
// todos esses valores dentro de um teste lógico são considerados falsos
0, '', "", ``, null, undefined, NaN

// valores que são diferentes dos valores falsy são considerados true
*/

console.log('Ranato' && undefined && 'André'); // retorna o undefined
console.log('Matheus' && 'Pedro' && NaN); // retorna o NaN


function dizOi() {
    return "Oi, tudo bem?";
}
let teste = true;
/* como os dois lados do teste lógico são verdadeiros é printado 
no console o último elemento (execução da function), ou apenas true (invertendo as posições)*/
console.log(dizOi() && teste);


/* se o usuário escolher uma cor, ela será atribuida a variável userColor, depois será feito um teste lógico na variável defaultColor
se foi selecionado alguma cor pelo usuário, essa cor será printada, caso contrário é printado o 'Orange' */
const userColor = null;
const defaultColor = userColor || 'Orange'; // retorna o primeiro elemento verdadeiro (true) da expressão

console.log(defaultColor);
