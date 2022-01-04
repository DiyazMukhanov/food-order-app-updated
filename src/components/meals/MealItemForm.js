import React, {useRef} from "react";
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const quantityInputRef = useRef();
  const onSubmitHandler = (event) => {
   event.preventDefault();
   const enteredQuantity = quantityInputRef.current.value;
   const enteredQuantityNumber = +enteredQuantity;
   props.onAddItem(enteredQuantityNumber);
  }

  return (
      <form onSubmit={onSubmitHandler} className={classes.form}>
          <div>
          <label className={classes.label}>Amount</label>
          <input ref={quantityInputRef} className={classes.input}></input>
          </div>
          <button type="submit" className={classes.button}>+ Add</button>
      </form>
  );

};


export default MealItemForm;