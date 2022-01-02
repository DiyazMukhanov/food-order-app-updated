import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import CartContext from './store/cart-context';
import CartProvider from './store/CartProvider';
import Cart from './components/cart/Cart';

function App() {
  return (
    
      <CartProvider>
        <Cart />
        <Header />
        <Meals />
      </CartProvider>
     
    
  );
}

export default App;
