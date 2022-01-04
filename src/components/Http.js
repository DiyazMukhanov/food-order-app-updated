import React, {useRef, useState} from "react";

const Http = () => {
const foodName = useRef();
const foodDescription = useRef();
const [foods, setFoods] = useState([]);


const formSumitHandler = (event) => {
event.preventDefault();
const foods = {
    name: foodName.current.value,
    description: foodDescription.current.value,
}
console.log(foods);
addFoodHandler(foods);

};

const addFoodHandler = async (foods) => {
    const response = await fetch('https://food-order-app-f83d6-default-rtdb.firebaseio.com/foods.json', {
        method: 'POST',
        body: JSON.stringify(foods),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}



const fetchFoodsHandler = async () => {
   
        const response = await fetch('https://food-order-app-f83d6-default-rtdb.firebaseio.com/foods.json');
        const data = await response.json();
        console.log(data);
        const foodsArray = [];
        for(const key in data){
            foodsArray.push({
                id: key,
                title: data[key].name,
                description: data[key].description
            });
        }
        console.log(foodsArray);
        setFoods(foodsArray);
        
    } 
     
    


 return (
     <div>
         <form onSubmit={formSumitHandler}>
             <label>FoodName</label>
             <input ref={foodName}></input>
             <label>FoodDescription</label>
             <input ref={foodDescription}></input>
             <button >Add to DB</button>
         </form>
         <button onClick={fetchFoodsHandler}>Fetch</button>
         <ul>
             {foods.map(food => <li>
                 <h2>Title: {food.title} </h2>
                 <h2>{food.description}</h2>
             
             </li>)}
         </ul>
     </div>
 );
};


export default Http;