import React, { useEffect } from "react";
import Card from "../UI/Card";
import MealsItem from "./MealsItem";
import classes from './AvailableMeals.module.css';
import { useState } from "react/cjs/react.development";

// const availableMealsData = [
//     {
//       name: 'Суши',
//       description: 'Вкусная рыбка и овощи',
//       price: 1200,
//       id: 'meal1'
//     },
//     {
//         name: 'Шницель',
//         description: 'Немецкое качество!',
//         price: 2000,
//         id: 'meal2'
//      },
//      {
//         name: 'Бургер Барбекю',
//         description: 'По-американски... Вкусно и сытно',
//         price: 750,
//         id: 'meal3'
//      },
//      {
//         name: 'Салат из горошка',
//         description: 'Полезно...и зелено...',
//         price: 2100,
//         id: 'meal4'
//      },
// ];



const AvailableMeals = () => {
    const [isLoading, setIsloading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const fetchMeals = async () => {
           const response = await fetch('https://food-app-react-342dd-default-rtdb.firebaseio.com/meals.json');
           if(!response.ok){
                throw new Error('Something went wrong!');
           }
           const responseData = await response.json();
           console.log(responseData);
           const availableMealsArr = [];
           for (const key in responseData ){
            availableMealsArr.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price
            });
           };
           setMeals(availableMealsArr);
           setIsloading(false);
        };
        fetchMeals().catch(error => {
            setIsloading(false);
            setFetchError(true);
        });
        
    }, []);
    const mealsList = meals.map(meal => 
        <MealsItem key = {meal.id} name = {meal.name} description = {meal.description} price = {+meal.price} id = {meal.id}/>
        );

        if(isLoading) {return <p>Loading meals...</p>};
        if(fetchError) {
            return <p>Loading error. Please check connection</p>
        }

  return (
      <Card>
      <ul className={classes.unorderedList}>
          {mealsList}
          
          
      </ul>
      </Card>
  );
};


export default AvailableMeals;