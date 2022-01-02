import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import CartContext from './store/cart-context';
import CartProvider from './store/CartProvider';

function App() {
  return (
    
      <CartProvider>
        <Header />
        <Meals />
      </CartProvider>
     
    
  );
}

export default App;
