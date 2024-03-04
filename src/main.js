import { filterData, sortData } from './dataFunctions.js';
//, sortData, computeStats
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);

//      renderiza os cards pelo root/html
const listaCards = document.querySelector('#root');
let dadosRenderizados = data; // Variável para armazenar os dados renderizados

const mostraCards = (dados) => {
  listaCards.innerHTML = renderItems(dados);
};

mostraCards(dadosRenderizados);







