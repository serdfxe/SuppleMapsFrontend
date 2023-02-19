import React, { useState, useEffect } from 'react';

import {useLocation} from "react-router-dom";
import InlinePoi from '../InlinePoi/InlinePoi';

import api_url from '../../config';


const PopularPois = ({amount}) => {
    const [arts, setArts] = useState([]);

    const location = useLocation();


    useEffect(() => {
        fetch(api_url + "/api/rand_pois/" + amount)
        .then((response) => response.json())
        .then((data) => {
            setArts(data.map((p, i) =>
                <InlinePoi key={i+"_dsfsdf"} poi_id={p.id}/>
            ));
        });
    }, [amount, location]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', padding: '29px'}}>
            <h2>Популярные статьи</h2>
            {arts}
        </div>
    );
};

export default PopularPois;