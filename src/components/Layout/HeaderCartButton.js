import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((curNumbar,item) => {
    return curNumbar + item.amount;
  },0)
  return (
   <button className={classes.button} onClick={props.onClick}>
    <samp className={classes.icon}>
        <CartIcon />
    </samp>
    <samp>Your Cart</samp>
    <samp className={classes.badge}>{numberOfCartItem}</samp>
   </button>
  )
}

export default HeaderCartButton
