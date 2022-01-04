import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartList from "./CartList";

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
         <div>
             <h1>Total Amount</h1>
             <span>{cartCtx.totalAmount}</span>
             <button onClick={cartCloseHandler}>Close</button> <button>Order</button>
         </div>
     </Modal>
  );
};


export default Cart;