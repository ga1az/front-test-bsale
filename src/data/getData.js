const urlBase = "http://localhost:3000";

// Obtengo los productos de la api

export const getProducts = (param) => {
  const urli =
    param && param !== ""
      ? `${urlBase}/api/products/name/${param}`
      : `${urlBase}/api/products`;
  return fetch(urli)
    .then((response) => response.json())
    .then((data) => data);
};

// Obtengo los productos por categoria
export const getByCategory = (param) => {
  const urli =
    param && param !== ""
      ? `${urlBase}/api/categories/${param}/products`
      : `${urlBase}/api/products`;
  return fetch(urli)
    .then((response) => response.json())
    .then((data) => data);
};

// Obtengo todas las categorias de la api
export const getAllCategories = () => {
  return fetch(`${urlBase}/api/categories`)
    .then((response) => response.json())
    .then((data) => data);
};

export default { getProducts, getAllCategories, getByCategory };
