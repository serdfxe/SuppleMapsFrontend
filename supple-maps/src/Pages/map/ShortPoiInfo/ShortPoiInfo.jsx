import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Block from '../../../components/ui/Block/Block';
import Button from '../../../components/ui/Button/Button';
import api_url from '../../../config';

import classes from './ShortPoiInfo.module.css';

const ShortPoiInfo = () => {
    const [poi_id, setPoi_id] = useState(null);
    const [poi, setPoi] = useState({name: "", description: "", images: []});

    const navigate = useNavigate();

    window.onmessage = function(e) {
        if (e.data.name === 'show_short_poi_info') {
            setPoi_id(e.data.id)
        }
    };


    useEffect(() => {
        if (poi_id === null) {return}
        fetch(api_url + "/api/poi_info/" + poi_id, {method: "GET", headers: {
            'Accept': 'application/json',
        }})
        .then(resp => resp.json())
        .then(data => {
            setPoi({name: data.short_name, description: data.short_description, images: data.image.split(" ")});
        })
    }, [poi_id]);

    return (
        <>
            {poi_id !== null ? 
            <Block className={classes.info}>
                <img src={poi.images[0]} alt="" />
                <div className={classes.info_wrap}>
                    <h2><b>{poi.name}</b></h2>
                    <h2>{poi.description}</h2>
                    <div className={classes.btns}>
                        <Button rounded empty onClick={() => navigate("/app/art/" + poi_id)}><h3>Читать далее...</h3></Button>
                        <Button rounded><h3>+ Добавить в маршрут</h3></Button>
                    </div>
                </div>
            </Block> : ''}
        </>
    );
};

export default ShortPoiInfo;