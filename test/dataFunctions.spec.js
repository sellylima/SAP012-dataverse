//esta função recebe a matriz de dados para renderizar os
//elementos de cada item e deve retornar um elemento DOM ou uma string de HTML.

import { filterData, sortData } from "../src/dataFunctions.js";
import { crescente, decrescente, data } from "./data.js";

describe("testes da função filterData", () => {
  it("Deve ser retornado 3 celebridades brasileira", () => {
    const filtroDados = filterData(data, "nacionalidade", "Brasileira");
    expect(filtroDados.length).toBe(3);
  });
});

describe("testes da função sortData", () => {
  it("Retorna o nome das celebridades em ordem crescente", () => {
    const sortDataOrdem = sortData(data, "name", "asc");
    expect(sortDataOrdem).toEqual(crescente);
  });
});

describe("testes da função sortData", () => {
  it("Retorna o nome das celebridades em ordem decrescente", () => {
    const sortDataOrdem = sortData(data, "name", 'desc');
    expect(sortDataOrdem).toEqual(decrescente);
  });
});
