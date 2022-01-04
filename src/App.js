import React, {useState} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import CartContext from './store/cart-context';
import CartProvider from './store/CartProvider';
import Cart from './components/cart/Cart';
import Http from './components/Http';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  
  const cartCloseHandler = () => {
    setCartIsShown(false);
  }

  const cartOpenHandler = () => {
    setCartIsShown(true);
  }
  
  return (
       <div className='App'>
      <CartProvider>
        
         {cartIsShown && <Cart onClose = {cartCloseHandler}/>}
        <Header onCartOpen = {cartOpenHandler}/>
        <Meals />
      </CartProvider>
      </div>
    
  );
}

export default App;
