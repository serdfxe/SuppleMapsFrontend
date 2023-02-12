import React from 'react';
import { useNavigate } from 'react-router';
// import api_url from '../../../config';

import classes from './PoiLink.module.css';

const PoiLink = ({image, name, type, id, url}) => {
    const navigate = useNavigate();

    function nav_to() {
        navigate(url);
    }

    return (
        <div className={classes.def} onClick={nav_to}>
            <img src={image} alt="no image ;(" />
            <div className={classes.info_wrap}>
                <h1>{name}</h1>
                <h2>{type}</h2>
            </div>
        </div>
    );
};

export default PoiLink;