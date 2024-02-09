/*Recomendamos usar `src/main.js` para todo o seu código relacionado à exibição dos dados na tela.
Basicamente, nos referimos à interação com o DOM. Operações como criação de nós, registro de 
manipuladores de eventos (*event listeners* ou *event handlers*).
Neste arquivo, você encontrará uma série de *imports* prontos para *carregar* as diferentes fontes
de dados.*/

import { example } from './dataFunctions.js';

//botão de limpar 
const limpaFiltros = document.querySelector('[data-testid="limpar"]');
limpar.addEventListener('click', () => {
    filtros.value = '';
    //identificar "filtros"
});


import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);
