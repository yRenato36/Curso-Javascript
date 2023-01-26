const numero = Number(prompt('Digite um número: ')); // converte o que foi recebido para tipo numérico
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

/* é possível inserir tags HTML com esse método, converte uma 2º vez
texto.innerHTML = `<p>Seu número + 2 é ${Number(numero) + 2}</p>`; */

texto.innerHTML = '';
texto.innerHTML += `Raiz quadrada do seu Número: ${numero ** (1/2)}</br>`; // cálculo de raiz quadrada
texto.innerHTML += `Seu número ${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong> </br>`;
texto.innerHTML += `Seu número ${numero} é um NaN? <strong>${Number.isNaN(numero)}</strong> </br>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} </br>`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} </br>`;
texto.innerHTML += `Número formatado com 2 casas decimais ${numero.toFixed(2)}`;



