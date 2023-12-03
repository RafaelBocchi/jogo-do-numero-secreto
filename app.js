let numerosSortidos = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemInicial(){
        exibirTextoNaTela('h1', 'Jogo do numero secreto');
        exibirTextoNaTela('p', 'Chute um numero de 1 a 10' );

}

mensagemInicial();

function verificarChute(){
        let chute = document.querySelector('input').value;

        if(chute == numeroSecreto){
                exibirTextoNaTela('h1', 'acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
                let mensagemTentativas = `Voce descobriu o numero secreto em ${tentativas} ${palavraTentativa}`;
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
                if(chute > numeroSecreto){
                        exibirTextoNaTela('p', 'o numero secreto é menor');
                }else{
                        exibirTextoNaTela('p', 'o numero secreto é maior');
                }
                tentativas++;
                limparCampo();
        }
}




function gerarNumero(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementos = numerosSortidos.length;

   if(quantidadeDeElementos == numeroLimite){
        numerosSortidos = [];
   }

   if(numerosSortidos.includes(numeroEscolhido)){
        return gerarNumero();
   } else{
        numerosSortidos.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;
   }
}

function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo(){
        numeroSecreto = gerarNumero();
        limparCampo();
        tentativas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
}
