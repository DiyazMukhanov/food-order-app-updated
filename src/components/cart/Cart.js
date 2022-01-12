import React from "react";
import { useContext, useState } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import classes from './Cart.module.css';
import Checkout from "./Checkout";

const Cart = props => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const cartCtx = React.useContext(CartContext);

  const cartCloseHandler = () => {
    props.onClose();
  };

  const checkOutHandler = () => {
    setIsCheckingOut(true);
  }

  return (
     <Modal onClose = {props.onClose}>
         <div>
             <CartList />
         </div>
         {isCheckingOut && <Checkout onCancel = {cartCloseHandler}/>}
         <div className={classes.bottomCart}>
           <div className={classes.topPart}>
             <h1 className={classes.h1}>К оплате</h1>
             <span className={classes.amount}>KZT {cartCtx.totalAmount.toFixed(2)}</span>
             </div>
             <div className={classes.buttonsBottom}>
             <button onClick={cartCloseHandler} className={classes.buttonClose} >Выйти</button> <button className={classes.buttonOrder} onClick = {checkOutHandler}>Заказать</button>
             </div>
         </div>
     </Modal>
  );
};


export default Cart;