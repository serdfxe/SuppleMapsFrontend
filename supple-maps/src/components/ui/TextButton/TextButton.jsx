import React from 'react';
import classes from "./TextButton.module.css";

const TextButton = ({children, rounded=false, empty=false, ...props}) => {
    return (
        <button {...props} className={`${rounded ? classes.rounded : ""} ` + `${empty ? classes.empty : ""} ` + classes.default} style={{padding: 0}}>
            {children}
        </button>
    );
};

export default TextButton;