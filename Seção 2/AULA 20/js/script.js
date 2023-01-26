function meuEscopo() {
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
   
    const valoresArmazenados = [];

    function recebeEnventoForm(evento) {
        //não permite que o browzer realize seu comportamento padrão (reload na página quando um form é enviado)
        evento.preventDefault();
        // Armazena na variável o atributo que está dentro da TAG form
        const nome = formulario.querySelector('.nome'); 
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        // Função responsável por receber os values das pessoas 
        function pessoa (nome, sobrenome, peso, altura) {
            return {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            }
        }

        // função .push() adiciona um elemento ao final do array (o elemento que é adicionado é um objeto) - ARMAZENA OS VALORES
        valoresArmazenados.push(pessoa(nome, sobrenome, peso, altura));
        console.log(valoresArmazenados);
        
        // apresenta o que foi escrito nos inputs
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;


    /*
    formulario.onsubmit = function (evento) {
        //não permite que o browzer realize seu comportamento padrão (reload na página quando um form é enviado)
        evento.preventDefault();
        alert("Form enviado");
        console.log("O Formulário foi enviado");
    */

    }
    formulario.addEventListener('submit', recebeEnventoForm);   
}

// Apenas executa a função
meuEscopo();