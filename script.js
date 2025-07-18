const numeroScreto = Math.floor(Math.random()*10 +1);
let tentativas = 10;
let score = 0;

function verificarPalpite(){
    const palpite = parseInt(document.getElementById("campo_palpite").value);
    const mensagem = document.getElementById("mensagem");
    const scoreMensagem = document.getElementById("score");
    
    if(tentativas > 0){
        if(palpite < 1 || palpite > 10){
            mensagem.textContent = "O Numero é invalido, digite um numero de 1 a 10!";
        }else if(palpite === numeroScreto){
            mensagem.textContent = "Parabens, você venceu!!";
            scoreMensagem.textContent = `Você usou ${score} tentativas`;
            mensagem.style.color = "blue";
        }else if(palpite > numeroScreto){
            mensagem.textContent = "Tente um numero menor!";
            tentativas--;
            score++;
        }else if(palpite < numeroScreto){
            mensagem.textContent = "Tente um numero maior!";
            tentativas--;
            score++;
        }
    }else{
        mensagem.textContent = "Você excedeu suas tentativas"
    }

}
