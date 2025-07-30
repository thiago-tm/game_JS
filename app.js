let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNaTela('h1', 'Jogo do Número Secreto');
exibirNaTela('p', 'Escolha um numero de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirNaTela('p', `${mensagemTentativas}`);
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela('p', 'O número secreto é menor');
        } else {
            exibirNaTela('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}