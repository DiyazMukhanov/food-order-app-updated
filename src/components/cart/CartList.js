import React, {useContext} from "react";
import CartContext from "../../store/cart-context";

const CartList = props => {
 const cartCtx = useContext(CartContext);

 const cartItemAddHandler = (item) => {
       cartCtx.addItem({...item, quantityPurchased: 1});
 }   

 const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
 }

  return (
     <ul>
         {cartCtx.items.map(item => <li key={item.id}><div><span>{item.name}</span> <span>{item.price}</span> <span>Requested: {item.quantityPurchased}</span></div> 
            <div><button onClick={cartItemRemoveHandler.bind(null, item.id)}>-</button><button onClick={cartItemAddHandler.bind(null, item)}>+</button></div>
         </li>)}
     </ul>
  );
};


export default CartList;

// items = [
//     {name: 'Sushi', price: 22.99, quantityPurchased: 5, id: 'it1'},
//     {name: 'Bread', price: 17.66, quantityPurchased: 2, id: 'it2'},
// ]