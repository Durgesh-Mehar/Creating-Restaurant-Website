import React, {Fragment, useState} from 'react';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
//console.log(cartIsShown)
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider >
     {cartIsShown && <Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={setCartIsShown}/>
      <Meals />
    </CartProvider>
  )
}

export default App
