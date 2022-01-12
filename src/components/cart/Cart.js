import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import classes from './Cart.module.css';
import Checkout from "./Checkout";

const Cart = props => {
  const cartCtx = React.useContext(CartContext);

  const cartCloseHandler = () => {
    props.onClose();
  };

  return (
     <Modal onClose = {props.onClose}>
         <div>
             <CartList />
         </div>
         <Checkout />
         <div className={classes.bottomCart}>
           <div className={classes.topPart}>
             <h1 className={classes.h1}>К оплате</h1>
             <span className={classes.amount}>KZT {cartCtx.totalAmount.toFixed(2)}</span>
             </div>
             <div className={classes.buttonsBottom}>
             <button onClick={cartCloseHandler} className={classes.buttonClose} >Выйти</button> <button className={classes.buttonOrder}>Заказать</button>
             </div>
         </div>
     </Modal>
  );
};


export default Cart;