let varA = "A"; // B
let varB = "B"; // C 
let varC = "C"; // A

let acum = varA;
varA = varB;
varB = varC;
varC = acum;
console.log(varA, varB, varC);