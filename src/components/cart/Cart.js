import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import CartList from "./CartList";

const Cart = props => {
  const cartCtx = useContext(CartContext);
  return (
     <React.Fragment>
         <div>
             <CartList />
         </div>
         <div>
             <h1>Total Amount</h1>
             <span>{cartCtx.totalAmount}</span>
         </div>
     </React.Fragment>
  );
};


export default Cart;