import React from "react";
import Card from "../UI/Card";
import MealsItem from "./MealsItem";
import classes from './AvailableMeals.module.css';

const availableMealsData = [
    {
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      id: 'meal1'
    },
    {
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.50,
        id: 'meal2'
     },
     {
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
        id: 'meal3'
     },
     {
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
        id: 'meal4'
     },
];

const AvailableMeals = () => {
    const mealsList = availableMealsData.map(meal => 
        <MealsItem key = {meal.id} name = {meal.name} description = {meal.description} price = {meal.price} id = {meal.id}/>
        );
  return (
      <Card>
      <ul className={classes.unorderedList}>
          {mealsList}
      </ul>
      </Card>
  );
};


export default AvailableMeals;