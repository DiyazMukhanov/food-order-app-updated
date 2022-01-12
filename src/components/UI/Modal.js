import React from "react";
import classes from './Modal.module.css';



const Modal = (props) => {
   return (
       <div>
   <div className={classes.backdrop} onClick={props.onClose}></div>
   <div className={classes.overlay}>{props.children}</div>
   </div>
   );

};


export default Modal;