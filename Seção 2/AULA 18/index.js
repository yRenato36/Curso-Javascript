/////////////////////////CRIANDO OBJETOS////////////////////////////
const pessoa = {
    nome: 'Renato',
    sobrenome: 'Santana',
    idade: 19
};
// acessando atributos dentro do objeto
console.log(pessoa.nome); // nome do objeto + atributo que está dentro dele
console.log(pessoa.sobrenome);

////////////////////////////////////////////////////////////////////////////// 
//função factory, função criadora de objetos
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const variavelPessoa = criaPessoa('Marcelo', 'Silva', 19);
console.log('Versão completa: ', variavelPessoa.nome, variavelPessoa.sobrenome);

/////////////////////////////////////////////////////////////////////////
// Forma contraída
function pessoas(nome, sobrenome, idade) {
// quando os parâmetro possui o mesmo nome que os atributos, não é necessário instanciar 2x
    return {nome, sobrenome, idade}; 
}

const pessoa1 = pessoas('Augusto', 'Marino', 20);
console.log('Versão comprimida: ', pessoa1.nome, pessoa1.sobrenome, pessoa1.idade, '\n');

////////////////////////OBJETOS COM MÉTODOS///////////////////////////////////////////////
const objPessoa = {
    nome: 'Karina',
    sobrenome: 'Couto',
    idade: 19,

    //funções dentro de objetos são chamadas de métodos
    falar() {
        //.this faz referência ao contexto atual onde foi instaciada a variável/atributo
        console.log(`${this.nome} ${this.sobrenome} de ${this.idade} anos está falando agora`);

    },

    // quando esse método pe chamado durante a execução é adicionado +1 a idade da pessoa
    incrementaIdade() {
        this.idade++;
    }
};

objPessoa.incrementaIdade();
objPessoa.falar();
