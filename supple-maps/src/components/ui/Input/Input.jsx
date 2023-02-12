import React from 'react';

import classes from './Input.module.css';

const Input = ({children, ...props}) => {
    return (
        <div className={classes.wrap}>
            {children}
            <input type="text" {...props}></input>
        </div>
    );
};

export default Input;