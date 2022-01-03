import React from "react";
import CartButton from "./CartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.header}>
        <div>
        <h1>MyMealsApp</h1>
        </div>
        <div className={classes.cartButton}>
        <CartButton onClick = {props.onCartOpen} />
        </div>
        
        
    </div>
  );
};


export default Header;

