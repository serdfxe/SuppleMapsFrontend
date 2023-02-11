import React from 'react';

import classes from './Content.module.css';

const Content = ({children, ...props}) => {
    return (
        <div className={classes.def} {...props}>
            {children}
        </div>
    );
};

export default Content;