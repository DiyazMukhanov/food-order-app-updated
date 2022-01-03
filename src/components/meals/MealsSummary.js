import React from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
      <div>
        <div>
        <img src={mealsImage}></img>
        </div>
        <div>
          <h1>Delicious Food, Delivered To You</h1>
          <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious</p> 
          <p>lunch or dinner at home.</p>
          <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by</p>
          <p>experienced chefs!</p>
          </div>
      </div>
  );
};


export default MealsSummary;