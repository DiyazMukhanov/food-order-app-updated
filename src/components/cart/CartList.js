import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from './CartList.module.css';

const CartList = props => {
 const cartCtx = React.useContext(CartContext);

 const cartItemAddHandler = (item) => {
       cartCtx.addItem({...item, quantityPurchased: 1});
 }   

 const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
 }

  return (
     <ul className={classes.ul}>
         {cartCtx.items.map(item => <li key={item.id} className={classes.li}><div className={classes.leftBlock}><span className={classes.name}>{item.name}</span> <div className={classes.price}><span className={classes.price1}>KZT {item.price}</span> <span className={classes.quantity}>x {item.quantityPurchased}</span></div></div> 
            <div className={classes.buttons}><button onClick={cartItemRemoveHandler.bind(null, item.id)} className={classes.minus}>-</button><button onClick={cartItemAddHandler.bind(null, item)} className={classes.plus}>+</button></div>
         </li>)}
     </ul>
  );
};


export default CartList;

// items = [
//     {name: 'Sushi', price: 22.99, quantityPurchased: 5, id: 'it1'},
//     {name: 'Bread', price: 17.66, quantityPurchased: 2, id: 'it2'},
// ]