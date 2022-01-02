import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import CartList from "./CartList";

const Cart = props => {
   
  return (
     <React.Fragment>
         <div>
             <CartList />
         </div>
         <div></div>
     </React.Fragment>
  );
};


export default Cart;