import React from 'react';

import classes from './SideBarInfo.module.css'; 

const SideBarInfo = ({children, ...props}) => {
    return (
        <div {...props} className={classes.def}>
            {children}
        </div>
    );
};

export default SideBarInfo;