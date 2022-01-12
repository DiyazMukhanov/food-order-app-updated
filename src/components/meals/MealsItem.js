import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from './MealsItem.module.css';



const MealsItem = (props) => {
    const cartCtx = React.useContext(CartContext);

    const price = `KZT ${props.price}`;
    const AddItemHandler = (quantityPurchased) => {
       cartCtx.addItem({
          name: props.name,
          price: props.price,
          quantityPurchased: quantityPurchased,
          id: props.id
       });
  };

   return (
       <li key={props.key} className={classes.list}>
           <div className={classes.leftPart}>
           <h3>{props.name}</h3>
           <div className={classes.description}>
               {props.description}
           </div>
           <div className={classes.price}>
               {price}
           </div>
           </div>
           <div className={classes.rightPart}>
           <MealItemForm onAddItem = {AddItemHandler}/>
           </div>
       </li>
   );
};


export default MealsItem;

// items = [
//     {name: 'Sushi', price: 22.99, quantityPurchased: 5, id: 'it1'},
//     {name: 'Bread', price: 17.66, quantityPurchased: 2, id: 'it2'},
// ]