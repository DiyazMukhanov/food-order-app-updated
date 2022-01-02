import React from "react";
import CartButton from "./CartButton";
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <div>
        <h1>My Meals App</h1>
        <CartButton />
        <img src={mealsImage}></img>
        
    </div>
  );
};


export default Header;

