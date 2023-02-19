import React from 'react';

import classes from './CheckBox.module.css';


const CheckBox = ({children, ...props}) => {
    
    
    return (
        <div className={classes.def}>
            <input type="checkbox" className={classes.box} {...props}/>
            {children}
        </div>
    );
};

export default CheckBox;