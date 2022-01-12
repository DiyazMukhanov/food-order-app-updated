import React, {useState, useRef} from "react";
import classes from './Checkout.module.css';

const Checkout = props => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        phone: true,
        adress: true
    });
    
    const isEmpty = value => value.trim().length < 1;


    const inputNameRef = useRef();
    const inputPhoneRef = useRef();
    const inputAddressRef = useRef();

    const checkoutSubmitHandler = event => {
        event.preventDefault();
        const enteredName = inputNameRef.current.value;
        const enteredPhone = inputPhoneRef.current.value;
        const enteredAdress = inputAddressRef.current.value;

        //form validation
        const nameIsValid = !isEmpty(enteredName);
        const phoneIsValid = !isEmpty(enteredPhone);
        const adressIsValid = !isEmpty(enteredAdress);

        setFormInputsValidity({
            name: nameIsValid,
            phone: phoneIsValid,
            adress: adressIsValid
        });

        if(!nameIsValid || !phoneIsValid || !adressIsValid){
            return;
        }

        
    };

    const validNameMessage = <p>Введите валидное имя</p>
    const validPhoneMessage = <p>Введите валидный номер</p>
    const validAdressMessage = <p>Введите валидный адрес</p>

   return <div>
       <form onSubmit={checkoutSubmitHandler}>
           <label htmlFor="name">Введите имя</label>
           <input id="name" ref={inputNameRef} className={!formInputsValidity.name && classes.invalid}></input>
           <label htmlFor="phone">Введите телефона</label>
           <input id="phone" ref={inputPhoneRef} className={!formInputsValidity.phone && classes.invalid}></input>
           <label htmlFor="adress">Введите адрес</label>
           <input id="adress" ref={inputAddressRef} className={!formInputsValidity.adress && classes.invalid}></input>
           <button>Заказать</button>
       </form>
       <button>Отмена</button>
   </div>
};


export default Checkout;