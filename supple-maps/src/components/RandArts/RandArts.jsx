import React, { useState, useEffect } from 'react';

import Block from "../../components/ui/Block/Block";

// import api_url from '../../config';
import PoiLink from './PoiLink/PoiLink';

const RandArts = ({amount}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:80/api" + "/rand_pois/" + amount)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0])
            setData(data.map((p, i) =>
                <PoiLink key={i+"_dsfsdf"} image_url={data[i].image.split(" ")[0]} url={data[i].id} name={data[i].name} type={data[i].type_id}/>
            ));
        });
    }, []);
    return (
        <Block>
            {data}
        </Block>
    );
};

export default RandArts;