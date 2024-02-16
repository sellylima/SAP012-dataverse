//import { filterData, sortData, computeStats } from './dataFunctions.js';

import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);

const listaCards = document.querySelector('#root');

const filtroNacionalidade = document.getElementById('filtroNacionalidade');

const ordenação = document.getElementById('filtroOrdem');

const limparSeleções = document.getElementById('botaoLimpar');

//selectElement.addEventListener('change', (event) => {  });
  



limparSeleções.addEventListener('click', () => {
  listaCards.innerHTML = "";
  ordenação.innerHTML = "";
  filtroNacionalidade.innerHTML = "";
  listaCards.innerHTML = renderItems(data)
})