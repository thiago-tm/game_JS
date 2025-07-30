let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirNaTela('h1', 'Jogo do Número Secreto');
    exibirNaTela('p', 'Escolha um numero de 1 a 10');
}
    
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirNaTela('p', `${mensagemTentativas}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

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

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}