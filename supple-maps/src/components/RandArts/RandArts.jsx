import React, { useState, useEffect } from 'react';

import Block from "../../components/ui/Block/Block";

import api_url from '../../config';
import PoiLink from './PoiLink/PoiLink';

import classes from './RandArts.module.css';

const RandArts = ({amount}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(api_url + "/rand_pois/" + amount)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            setData(data.map((p, i) =>
                <PoiLink key={i+"_dsfsdf"} id={data[i].id} image={data[i].image} url={"/app/art/"+data[i].id} name={data[i].name} type={data[i].type}/>
            ));
        });
    }, [amount]);

    return (
        <Block>
            <h2 className={classes.header}>Другие места</h2>
            {data}
        </Block>
    );
};

export default RandArts;