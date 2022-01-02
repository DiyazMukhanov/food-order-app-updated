import React, {useRef} from "react";

const MealItemForm = (props) => {

    const quantityInputRef = useRef();
  const onSubmitHandler = (event) => {
   event.preventDefault();
   const enteredQuantity = quantityInputRef.current.value;
   const enteredQuantityNumber = +enteredQuantity;
   props.onAddItem(enteredQuantityNumber);
  }

  return (
      <form onSubmit={onSubmitHandler}>
          <label>Amount</label>
          <input ref={quantityInputRef}></input>
          <button type="submit">+ Add</button>
      </form>
  );

};


export default MealItemForm;