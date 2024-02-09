/*Recomendamos usar `src/main.js` para todo o seu código relacionado à exibição dos dados na tela.
Basicamente, nos referimos à interação com o DOM. Operações como criação de nós, registro de 
manipuladores de eventos (*event listeners* ou *event handlers*).
Neste arquivo, você encontrará uma série de *imports* prontos para *carregar* as diferentes fontes
de dados.*/

import { example } from './dataFunctions.js';

import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);




 //botão de limpar  - escuta e limpa
const limpaFiltros = document.querySelector('[data-testid="limpar"]');
limpaFiltros.addEventListener('click', () => {
    // Limpar todos os elementos <select>
    document.querySelectorAll('select').forEach(select => {
        select.value = '';
    });
});

//filtro areaDeAtuação - escuta mudanças e revela o valor
const selecionaElemento = document.getElementById('areaDeAtuação');
selecionaElemento.addEventListener('change', function (event) {
    // Obtém o valor selecionado
    const valorSelecionado = event.target.value;
});

const root = document.querySelector("#root")
console.log(root)
root.interHTML = renderItems(data)