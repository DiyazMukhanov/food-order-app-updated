import React from "react";
import classes from './Modal.module.css';



const Modal = (props) => {
   return (
       <div>
   <div className={classes.backdrop}></div>
   <div className={classes.overlay}>{props.children}</div>
   </div>
   );

};


export default Modal;