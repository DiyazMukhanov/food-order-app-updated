import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from './CartButton.module.css';

const CartButton = (props) => {
 const cartCtx = React.useContext(CartContext);
  const numberOfAddedMeals = cartCtx.items.reduce((accum, item) => {
      return accum + item.quantityPurchased;
  }, 0)
  return (
      <div onClick={props.onClick} className={classes.cartButton}>
          <h2 className={classes.header}>Корзина</h2>
         <span className={classes.span}>{numberOfAddedMeals}</span>
      </div>
  );
};



export default CartButton;

// items = [
//     {name: 'Sushi', price: 22.99, quantityPurchased: 5, id: 'it1'},
//     {name: 'Bread', price: 17.66, quantityPurchased: 2, id: 'it2'},
// ]