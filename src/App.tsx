import ChartOfProducts from 'components/ChartOfProdects/CartOfProducts';
import ListOfProducts from 'components/ListOfProducts/ListOfProducts';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductProvider from './Context';

const App = () => {
  return (
    <div>
      <ProductProvider>
        <Switch>
          <Route path="/cart" component={ChartOfProducts} />
          <Route path="/" component={ListOfProducts} />
        </Switch>
      </ProductProvider>
    </div>
  );
};

export default App;
