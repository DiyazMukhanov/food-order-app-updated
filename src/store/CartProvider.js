import React, {useReducer} from "react";
import CartContext from "./cart-context";

const initialCartState = {
   items: [],
   totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantityPurchased;
        const indexOfExistingItem = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[indexOfExistingItem];
        let updatedItems;
        if(existingItem){
            const updatedItem = {...existingItem, quantityPurchased:existingItem.quantityPurchased + action.item.quantityPurchased};
            updatedItems = [...state.items ];
            updatedItems[indexOfExistingItem] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        
         
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    };

    // if(action.type === 'REMOVE'){
    //     const updatedItems = state.items.filter(item => item.id !== action.id);
    //     const 
    //     return {
    //         items: updatedItems,
    //         totalAmount: updatedTotalAmount
    //     }
    // }
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