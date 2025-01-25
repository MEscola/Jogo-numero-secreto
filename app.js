let listaNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
    //narrar o jogo
}

function msgInicial() {
    exibirTextoTela('h1', 'Jogo do Numero Secreto');
    exibirTextoTela('p', 'Escolha entre 1 e 10');
}
msgInicial();


function verificarChute () {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoTela( 'h1','Parabéns, você acertou! :)');

        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
       
    } else {
        if (chute > numeroSecreto) {
            exibirTextoTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();

}

}
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numerolimite + 1 );
    let qtdElementoLista = listaNumerosSorteados.length;

    if (qtdElementoLista == 10) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
        
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log('Jogo reiniciado');
};

