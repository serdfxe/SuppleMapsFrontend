import React from 'react';

import classes from './PoiLink.module.css';

const PoiLink = ({image_url, name, type}) => {
    return (
        <div className={classes.def}>
            <img src={image_url} alt="no image ;(" />
            <h3>{name}</h3>
            <h3>{type}</h3>
        </div>
    );
};

export default PoiLink;