


// esta função recebe a matriz de dados para renderizar os
//elementos de cada item e deve retornar um elemento DOM ou uma string de HTML.

renderItems(data) 



import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
