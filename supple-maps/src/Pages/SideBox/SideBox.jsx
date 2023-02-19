import React, { useState, useEffect } from 'react';

import classes from "./SideBox.module.css";

import Block from '../../components/ui/Block/Block';
import Button from '../../components/ui/Button/Button';
import api_url from '../../config';
import Search from '../../components/Search/Search';

import PopularPois from '../../components/PopularPois/PopularPois';


const SideBox = ({}) => {
    // useEffect(() => {
    //     fetch(api_url + "/api/art_images/")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)

    //         setArts(data.map((p, i) =>
    //             <div>123</div>
    //         ));
    //     });
    // }, [art_id]);

    return (
        <Block style={{padding: 0, gap: 0}}>
            <Search/>

            <div className={classes.content}>
                <PopularPois amount={4}/>
            </div>

            <div className={classes.btns}>
                <Button rounded empty><h3>Сообщество</h3></Button>
            </div>
        </Block>
    );
};

export default SideBox;