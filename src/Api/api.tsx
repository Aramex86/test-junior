export const getProducts = {
  getProducts() {
    return fetch(`http://localhost:3001/api/products/`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err.message));
  },
  getCategory() {
    return fetch(`http://localhost:3001/api/product/categories/`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err.message));
  },
};
