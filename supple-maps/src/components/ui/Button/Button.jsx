import React from 'react';
import classes from "./Button.module.css";

const Button = ({children, rounded=false, empty=false, ...props}) => {
    return (
        <button {...props} className={`${rounded ? classes.rounded : ""} ` + `${empty ? classes.empty : ""} ` + classes.default}>
            {children}
        </button>
    );
};

export default Button;