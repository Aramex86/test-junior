import { getProducts } from 'Api/api';
import React, { createContext, FC, useEffect, useState } from 'react';
import { Category, ContextType, Product } from 'Types/types';

const contextDefaulValue: ContextType = {
  products: [],
  category: [],
  addItem: () => {},
  removeItem: () => {},
  cartItems: [],
};

export const ProductsContext = createContext<ContextType>(contextDefaulValue);

const ProductProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Array<Product>>(contextDefaulValue.products);
  const [category, setCategory] = useState<Array<Category>>(contextDefaulValue.category);
  const [cartItems, setCartItems] = useState<Array<Product>>(contextDefaulValue.cartItems);

  useEffect(() => {
    getProducts
      .getProducts()
      .then((data) =>
        data.map((item: any) => {
          return {
            ...item,
            qty: 0,
          };
        }),
      )
      .then((data) => setProducts(data));
    getProducts.getCategory().then((data) => setCategory(data));
  }, []);

  const addItem = (id: number) => {
    products.filter((item: any) => {
      if (item.id === id) {
        return setCartItems([...cartItems, item]);
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // console.log(category)
  return (
    <ProductsContext.Provider
      value={{
        products,
        addItem,
        removeItem,
        cartItems,
        category,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
