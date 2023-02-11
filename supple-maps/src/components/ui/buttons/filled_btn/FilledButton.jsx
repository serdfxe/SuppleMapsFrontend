import React from 'react';
import classes from "./FilledButton.module.css";

const FilledButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.defB}>
            {chiledren}
        </button>
    );
};

export default FilledButton;