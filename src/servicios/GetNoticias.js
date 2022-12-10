

const API_KEY = 'f09b2dd186d3487dbc30833fe2c3a9aa';
//f09b2dd186d3487dbc30833fe2c3a9aa
const OMDB_API = 'https://newsapi.org/v2/everything';
/*
https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page
  =1&pageSize=10&language=es
*/
export const obtenerListaNoticias = async (criterioBusqueda,paginaActual) => {
  try {
    const respuesta = await fetch(`${OMDB_API}?q=${criterioBusqueda}&apiKey=${API_KEY}&page=${paginaActual}&pageSize=10&language=es&sortBy=publishedAt`)
    const noticias = await respuesta.json(); 
    return noticias;
  } catch(error) {
    console.error('se produjo un error');
    
  }  
};

