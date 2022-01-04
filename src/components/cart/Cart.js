import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import classes from './Cart.module.css';

const Cart = props => {
  const cartCtx = useContext(CartContext);

  const cartCloseHandler = () => {
    props.onClose();
  };

  return (
     <Modal>
         <div>
             <CartList />
         </div>
         <div className={classes.bottomCart}>
           <div className={classes.topPart}>
             <h1 className={classes.h1}>Total Amount</h1>
             <span className={classes.amount}>KZT {cartCtx.totalAmount}</span>
             </div>
             <div className={classes.buttonsBottom}>
             <button onClick={cartCloseHandler} className={classes.buttonClose} >Close</button> <button className={classes.buttonOrder}>Order</button>
             </div>
         </div>
     </Modal>
  );
};


export default Cart;