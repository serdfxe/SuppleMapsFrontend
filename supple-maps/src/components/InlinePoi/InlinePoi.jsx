import React, { useState, useEffect } from 'react';

import classes from './InlinePoi.module.css';

import { useNavigate } from 'react-router';

import api_url from '../../config';



const InlinePoi = ({poi_id, ...props}) => {
    const navigate = useNavigate();

    const [poi, setPoi] = useState({"short_name": "", "type_id": 1});

    useEffect(() => {
        fetch(api_url + "/api/poi_info/" + poi_id, {headers: {
            Authorization: 'Bearer ' + props.token
          }, method: "GET"})
        .then(resp => resp.json())
        .then(data => {
            setPoi(data)
        })
        .catch(err => err)  
    }, [poi_id, props.token]);
    
    return (
        <div className={classes.def} style={{borderColor: "var(--g10)"}} onClick={() => navigate("/app/art/" + poi_id)}>
            <img src={require(`../../img/types/${poi.type_id}.svg`)} style={{width: "16px", height: "16px"}}/>
            <h3 style={{color: "var(--g10)", fontWeight: "500"}}>{poi.short_name}</h3>
        </div>
    );
};

export default InlinePoi;   