export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  qty: number;
}

export interface ContextType {
  products: Array<Product>;
  category: Array<Category>;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems: Array<Product>;
}
