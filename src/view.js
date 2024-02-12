export const renderItems = (data) => {
  //console.log(data)

  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let result = '<ul>'
  data.forEach(element => {
    result += `
    <li>
    <p>${element.name}</p>
    <img src= ${element.imageUrl} alt= "">
    <p>${element.description}</p> 
    </li>n
    `
  })
  result = result + '</ul>';

  return result;
};

