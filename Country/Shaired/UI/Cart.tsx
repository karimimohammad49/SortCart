import React from "react";

import classes from "./Cart.module.css";

type cart={
    header:React.ReactNode;
    content:String;
    className?:String;
}

const Cart=(prop:cart)=>{
    return <div className={`${classes.cart} ${prop.className}`}>
            <header className={classes.cart__header}>
                {prop.header}
            </header>
        <hr/>
        <div className={classes.cart__content}>
            {prop.content}
        </div>
    </div>
};

export default Cart;