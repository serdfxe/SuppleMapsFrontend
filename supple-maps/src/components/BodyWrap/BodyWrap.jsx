import React from 'react';

import classes from './BodyWrap.module.css';

const BodyWrap = ({children}) => {
    return (
        <div className={classes.def}> 
            {children}
        </div>
    );
};
 
export default BodyWrap;