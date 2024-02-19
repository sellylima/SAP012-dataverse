// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//dados - filtro - valor
export const filterData = (data, filterBy, value) => {
  const dadosFiltrados = data.filter(
    (artista) => artista.facts.nacionalidade === value
  );
  return dadosFiltrados;
}

// dados - ordenação - tipo asc/desc
export const sortData = (data, sortBy, sortOrder) => { 
  return "sortData"
}

// cálculos estatisticos básicos - esta função deve usar o método reduce.
export const computeStats = (data) => { 
  return "computeStats"
}


