import React from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
      <div className={classes.mealsSummary}>
        
        <img src={mealsImage}></img>
        
        <div className={classes.summary}>
          <h1 className={classes.header}>Вкусная еда для тебя</h1>
          <p>Выбери своё любимое блюдо из нашего меню и наслаждайся прекарсным обедом или ужином</p>
          <p>у себя дома. Настоящие профессионалы своего дела - наши повара, вкладывают смысл  </p>
          <p>в кулинарные произведения искусства!</p>
          </div>
      </div>
  );
};


export default MealsSummary;