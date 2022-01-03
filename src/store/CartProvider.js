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

    if(action.type === 'REMOVE'){
        const reducedItemArray = state.items.filter(item => item.id === action.id);
        
        if(reducedItemArray[0].quantityPurchased === 1){
            const updatedItems = state.items.filter(item => item.id !== action.id);
            const updatedTotalAmount = updatedItems.reduce((accum, item) => {
                return accum + item.quantityPurchased * item.price;
                }, 0);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        }; 
        
        const reducedItem = reducedItemArray[0];
        const indexOfReducedItem = state.items.indexOf(reducedItem);
        const reducedItemInItems = state.items[indexOfReducedItem];
        const updatedItem = {...reducedItemInItems, quantityPurchased:reducedItemInItems.quantityPurchased - 1};
        const updatedItems = [...state.items];
        updatedItems[indexOfReducedItem] = updatedItem;
        const updatedTotalAmount = updatedItems.reduce((accum, item) => {
            return accum + item.quantityPurchased * item.price;
            }, 0);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
            



        // if(reducedItem.quantityPurchased === 1){
        // const updatedItems = state.items.filter(item => item.id !== action.id);
        // const updatedTotalAmount = updatedItems.reduce((accum, item) => {
        // return accum + item.quantityPurchased * item.price;
        // }, 0);
        
        };
       

        
    }



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