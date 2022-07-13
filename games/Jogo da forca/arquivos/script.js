let temas = [
    nomes = ["michell", "gabriel", "higor", "luiz", "bianca", "melissa", "diana", "cristiane"],
    frutas = ["morango", "abacate", "coco", "goiaba", "framboesa", "kiwi", "cereja", "laranja"],
    informatica = ["programa", "hardware", "software", "internet", "navegador", "script" , "sistemas", "planilha"],
    estado = ["pernabuco", "amazonas", "bahia", "acre", "roraima", "sergipe", "tocantins", "alagoas"],
    planetas = ["saturno", "urano", "netuno", "marte", "terra"],
    carros =  ["lancer", "uno", "veneno", "corsa", "celta", "fusca", "astra", "prisma"],
    games = ["minecraft", "pou", "paladins", "forza", "hungman", "valorant", "fortnite", "control"],
    fastfood = ["bobs", "subway", "giraffas", "kfc", "habibs", "popeyes"],
    times= ["vasco", "corinthians", "santos", "palmeiras", "gremio", "chelsea", "juventus", "barcelona"],
    animais = ["tartaruga", "zebra", "macaco", "lobo", "pinguim", "cabra", "ovelha", "anta"]];
    
let dica = document.querySelector("[data-dica]");

let palavras = temas[Math.floor(Math.random() * temas.length)];
let palavra = palavras[Math.floor(Math.random() * palavras.length)];

if(animais == palavras){
    dica.innerText = 'Dica: Animal'
};
if(nomes == palavras){
    dica.innerText = 'Dica: Nome'
};
if(frutas == palavras){
    dica.innerText = 'Dica: Fruta'
};
if(informatica == palavras){
    dica.innerText = 'Dica: Informática'
};
if(estado == palavras){
    dica.innerText = 'Dica: Estado Brasileiro'
};
if(planetas == palavras){
    dica.innerText = 'Dica: Planeta'
};
if(carros == palavras){
    dica.innerText = 'Dica: Carro'
};
if(games == palavras){
    dica.innerText = 'Dica: Game'
};
if(fastfood == palavras){
    dica.innerText = 'Dica: Fast Food'
};
if(times == palavras){
    dica.innerText = 'Dica: Time de Futebol'
};

let winningMessageTextElement = document.querySelector("[data-winning-message-text]");

let winningMessage = document.querySelector("[data-winning-message]");

let restartButton = document.querySelector("[data-restart-button]");

let chances = 6;
let acertos = 0;

let imagem = 0;

let posicao;

for (posicao = 0; posicao < palavra.length; posicao++) {
    let span = document.createElement("span");
    span.setAttribute('id', posicao);

    let div = document.getElementById("palavra");
    div.appendChild(span);
}

let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letras = alfabeto.split("");

for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);
    
    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
}

function escolheLetra(letra) {

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        if (letra === palavra[posicao]) {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);
            botao.setAttribute('class', 'certa');
            botao.removeAttribute('onclick');

            acertos++;
            acertou = true;
        }
    }

    if (acertou === false) {
        imagem++;
        document.getElementById("forca").src = "imagens/forca-"+imagem+".png";

        var botao = document.getElementById(letra);
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');

        chances--;
    }

    if (chances === 0) {
        
        winningMessage.classList.add("show-winning-message");
        winningMessageTextElement.innerText = 'A Palavra Era:\n'+palavra
       
    }

    if (acertos === palavra.length) {
        
        winningMessage.classList.add("show-winning-message");
        winningMessageTextElement.innerText = 'Palavra Correta !'
    }
}
