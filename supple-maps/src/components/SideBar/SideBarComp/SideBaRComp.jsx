import React from 'react';

import classes from './SideBarComp.module.css';

const SideBaRComp = ({text, image}) => {
    return (
        <a href={"/app/" + image} className={classes.def}>
            <img src={require(`./comps/${image}.svg`)} alt="#"/>
            <h2>{text}</h2>
        </a>
    );
};

export default SideBaRComp;