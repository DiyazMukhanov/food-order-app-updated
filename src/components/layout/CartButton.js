import React, {useContext} from "react";
import CartContext from "../../store/cart-context";

const CartButton = () => {
 const cartCtx = useContext(CartContext);
  const numberOfAddedMeals = cartCtx.items.reduce((accum, item) => {
      return accum + item.quantityPurchased;
  }, 0)
  return (
      <div>
          <h2>Your Cart</h2>
          <span>{numberOfAddedMeals}</span>
      </div>
  );
};



export default CartButton;

// items = [
//     {name: 'Sushi', price: 22.99, quantityPurchased: 5, id: 'it1'},
//     {name: 'Bread', price: 17.66, quantityPurchased: 2, id: 'it2'},
// ]