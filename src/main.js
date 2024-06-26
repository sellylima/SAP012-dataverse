import { filterData, sortData } from "./dataFunctions.js";
//, sortData, computeStats
import { renderItems } from "./view.js";

import data from "./data/dataset.js"; // importando todo o conteudo da pagina

//console.log(example, renderItems(data), data);

//renderiza os cards pelo root/html
const listaCards = document.querySelector("#root");
const dadosRenderizados = data; // Variável para armazenar os dados renderizados

const mostraCards = (dados) => {
  listaCards.innerHTML = renderItems(dados);
};

mostraCards(dadosRenderizados);

//FILTRANDO OS CARDS POR NACIONALIDADE
const elementoSelect = document.querySelector("#filtroNacionalidade");

elementoSelect.addEventListener("change", (event) => {
  const result = filterData(data, "nacionalidade", event.target.value);
  //console.log(result);
  return mostraCards(result);
  //root.textContent = `${event.target.value}`;
});

//FILTRO ORDEM
const filtroOrdem = document.querySelector("#filtroOrdem");

filtroOrdem.addEventListener("change", (event) => {
  const resultSortData = sortData(data, "name", event.target.value);
  mostraCards(resultSortData);
});

//BOTAO LIMPAR
const botaoLimpar = document.querySelector("#botaoLimpar");

botaoLimpar.addEventListener("click", () => {
  listaCards.innerHTML = "";
  mostraCards(data);
});
