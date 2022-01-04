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
          <input ref={quantityInputRef} className={classes.input} type='number' min='1' step='1' defaultValue='1' ></input>
          </div>
          <button type="submit" className={classes.button}>+ Add</button>
      </form>
  );

};


export default MealItemForm;