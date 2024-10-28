const textos = [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "Segundo texto = aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "Terceiro texto = aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "Quarto texto = aaaaaaaaaaaaaaaaaaaaaaaaaaa",
];

let = indiceTexto = 0;

const textoCaixa = document.querySelector('#texto-caixa');
const botaoProximo = document.querySelector('#botao-proximo');
const botaoPular = document.querySelector('#botao-pular');
const botaoLutar = document.querySelector('#botao-lutar');

botaoProximo.addEventListener('click', function() {
    if (indiceTexto < textos.length - 1) {
        textoCaixa.textContent = textos[indiceTexto];
        indiceTexto ++;
    }
    
    if (indiceTexto === textos.length - 1) {
        botaoProximo.style.display = 'none';
        botaoPular.style.display = 'none';
        botaoLutar.style.display = 'block';
    }
});

botaoPular.addEventListener('click', function() {
    indiceTexto = textos.length - 1;
    textoCaixa.textContent = textos[indiceTexto];

    botaoProximo.style.display = 'none';
    botaoPular.style.display = 'none';
    botaoLutar.style.display = 'block';
});

botaoLutar.addEventListener('click', () => {
    location.href = '../luta/luta.html'
})