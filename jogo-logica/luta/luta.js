const body = document.querySelector('body');
const botao_musica = document.querySelector('.botao-musica');
const hp_barra_boss = document.querySelector('.boss .hp .hp-barra-interna');
const hp_barra_player = document.querySelector('.player .hp .hp-barra-interna');
const boss_sprit = document.querySelector('.boss-sprit');
const musica = document.querySelector('#musica');
const som_dano = document.querySelector('#som-dano');
const corte = document.querySelector('.corte');
const som_ataque = document.querySelector('#som-ataque');
const pergunta = document.querySelector('.pergunta');
const confirmar_resposta = document.querySelector('.responder');

let hp_boss = 100;
let hp_player = 100;
hp_barra_boss.style.width = hp_boss + '%';
hp_barra_player.style.width = hp_player + '%';

botao_musica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

const perguntas = [
    'Qual é a capital da França?',
    'Qual é a capital da Alemanha?',
    'Qual é a capital do Brasil?',
    'Qual é a capital do Japão?',
    'Qual é a capital da Itália?'
]

const respostas = [
    'paris',
    'berlim',
    'brasília',
    'tóquio',
    'roma'
]

let pergunta_atual = 0;

pergunta.textContent = perguntas[pergunta_atual];

confirmar_resposta.addEventListener('click', function() {

    const resposta = document.querySelector('#itexto').value.toLocaleLowerCase();

    if (resposta == '') {
        return;
    }

    if (resposta === respostas[pergunta_atual]) {
        hp_boss -= 10;

        boss_sprit.classList.add('ataque-boss');
        corte.classList.add('corte-ativo');

        setTimeout(()=> {
            boss_sprit.classList.remove('ataque-boss');
            corte.classList.remove('corte-ativo');
        }, 300);
        
    } else {
        hp_player -= 10;

        body.classList.add('tremer');

        setTimeout(() => {
            body.classList.remove('tremer')
        }, 300);
    }

    hp_barra_boss.style.width = hp_boss + '%';
    hp_barra_player.style.width = hp_player + '%';

    document.querySelector('#itexto').value = '';

    if (hp_boss <= 0) {
        alert('Você venceu');
    } else if (hp_player <= 0) {
        alert('Derrota');
    } else {
        pergunta_atual ++;

        if (pergunta_atual < perguntas.length) {
            pergunta.textContent = perguntas[pergunta_atual];
        } else {
            alert('Fim das perguntas');
        }
    }
});