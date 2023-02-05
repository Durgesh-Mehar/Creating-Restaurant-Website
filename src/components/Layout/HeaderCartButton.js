import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = () => {
  return (
   <button className={classes.button}>
    <samp className={classes.icon}>
        <CartIcon />
    </samp>
    <samp>Your Cart</samp>
    <samp className={classes.badge}>3</samp>
   </button>
  )
}

export default HeaderCartButton
