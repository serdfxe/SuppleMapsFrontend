import React from 'react';
import classes from "./Block.module.css";

const Block = ({children, fit=false, ...props}) => {
    return (
        <div className={classes.def} style={ Object.assign({}, {width: fit ? "fit-content" : "100%"}, props.style)}>
            {children}
        </div>
    );
};

export default Block;