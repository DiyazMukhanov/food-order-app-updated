import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";



const MealsItem = (props) => {
    const cartCtx = useContext(CartContext);
    const AddItemHandler = (quantityPurchased) => {
       cartCtx.addItem({
          name: props.name,
          price: props.price,
          quantityPurchased: quantityPurchased,
          id: props.id
       });
  };

   return (
       <li key={props.key}>
           <h3>{props.name}</h3>
           <div>
               {props.description}
           </div>
           <div>
               {props.price}
           </div>
           <MealItemForm onAddItem = {AddItemHandler}/>
       </li>
   );
};


export default MealsItem;

// items = [
//     {name: 'Sushi', price: 22.99, quantityPurchased: 5, id: 'it1'},
//     {name: 'Bread', price: 17.66, quantityPurchased: 2, id: 'it2'},
// ]