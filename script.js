let order = [];
let clickedOrder = [];
let score = 0;

/*
    0 - Verde
    1 - Vermelho
    2 - Amarelo
    3 - Azul
 */

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');


//Cria uma ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


//Acende a proxíma cor
let lightColor = (element, number) => {
    number = number * 1000;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert('Pontuação: '+score+'\nVocê acertou ! Iniciando próximo nível!')
        nextLevel();
    }
}

//Função para clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//Função para o clique do usuário
let createColorElement = (color) => {
    switch(color){
        case 0:
            return green;
            break;
        case 1:
            return red;
            break;
        case 2:
            return yellow;
            break;
        case 3:
            return blue;
            break;
    }
}

//Função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para GameOver
let lose = () => {
    alert(`Pontuação: ${score}\nVocê Perdeu o Jogo!\nClick em OK para Iniciar um NOVO`);
    order = [];
    clickedOrder = [];

    playgame();
}

//Inicia o Jogo
let playgame = () => {
    alert(`Bem Vindo ao Gênesis! Iniciando o Jogo!`);
    score = 0;

    nextLevel();
}

//Evento de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Iniciar Jogo
playgame();