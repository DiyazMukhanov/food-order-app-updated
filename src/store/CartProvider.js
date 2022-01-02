import React, {useReducer} from "react";
import CartContext from "./cart-context";

const initialCartState = {
   items: [],
   totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantityPurchased;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    };
};


const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

    const addItemToCartHandler = (item) => {
       dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE', id: id});
    }
    
    return (
        <CartContext.Provider value = {{
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addItemToCartHandler,
            removeItem: removeItemFromCartHandler
               }}>{props.children}</CartContext.Provider>
    );
}

export default CartProvider;

// items = [
//     {name: 'Sushi', price: 22.99, quantityPurchased: 5, id: 'it1'},
//     {name: 'Bread', price: 17.66, quantityPurchased: 2, id: 'it2'},
// ]