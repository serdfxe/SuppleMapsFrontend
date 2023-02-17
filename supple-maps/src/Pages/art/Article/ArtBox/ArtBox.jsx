import React, { useState, useEffect } from 'react';

import classes from "./ArtBox.module.css";

import Block from '../../../../components/ui/Block/Block';
import Button from '../../../../components/ui/Button/Button';
import api_url from '../../../../config';
import Search from '../../../../components/Search/Search';
;

const ArtBox = ({art_id}) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch(api_url + "/api/art_images/" + art_id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            setImages(data.map((image, i) =>
                <img src={image} key={i + "_art_image"}></img>
            ));
        });
    }, [art_id]);

    return (
        <Block style={{padding: 0, gap: 0}}>
            <Search/>

            <div className={classes.content}>
                {images}
            </div>

            <div className={classes.btns}>
                <Button rounded empty><h3>Поделиться</h3></Button>
                <Button rounded><h3>+ Добавить в маршрут</h3></Button>
            </div>
        </Block>
    );
};

export default ArtBox;