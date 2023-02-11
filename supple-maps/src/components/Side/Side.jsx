import React from 'react';

import classes from "./Side.module.css";

const Side = ({children}) => {
    return (
        <div className={classes.def}>
            {children}
        </div>
    );
};

export default Side;