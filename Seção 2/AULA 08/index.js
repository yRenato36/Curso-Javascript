const nome = "Renato";
const sobrenome = "Santana";
const idade = 20;
const peso = 75;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - 20;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", 
    peso, "kg tem", altura, "de altura e seu IMC é de", imc);

console.log(nome, sobrenome, "nasceu em:", anoNascimento);

console.log("\n"); // pula linha

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em: ${anoNascimento}`);