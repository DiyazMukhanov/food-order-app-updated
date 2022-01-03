import React from "react";
import CartButton from "./CartButton";
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <div>
        <h1>My Meals App</h1>
        <CartButton onClick = {props.onCartOpen}/>
        <img src={mealsImage}></img>
        
    </div>
  );
};


export default Header;

