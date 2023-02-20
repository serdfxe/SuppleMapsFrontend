import React, { useState, useEffect } from 'react';

import classes from './PoiInPath.module.css';

import api_url from '../../../../config';



const PoiInPath = ({poi_id, islimit, state, ismand, number, ...props}) => {
    const [poi, setPoi] = useState({"short_name": ""});

    useEffect(() => {   
        fetch(api_url + "/api/poi_info/" + poi_id, {headers: {
            Authorization: 'Bearer ' + props.token
          }, method: "GET"})
        .then(resp => resp.json())
        .then(data => setPoi(data))
        .catch(err => err)
    }, [poi_id, props.token]);


    // function add_to_mand() {
    //     fetch(api_url + "/router/switchmand/" + poi_id, {method: "POST", headers: {
    //         Authorization: 'Bearer ' + props.token
    //     }})
    //     .then(resp => {
    //         setIsmand(1 - ismand);
    //     })
    // }

    function delete_poi_from_path(id) {
        
        fetch(api_url + "/router/del/" + id, {method: "POST", headers: {
            Authorization: 'Bearer ' + props.token
        }})
        .then(resp => {
            if (window.router_state !== 'editing') {
                window.update_map()
            }
            window.update_router()
        })
    }
    
    return (
        <div onClick={props.onClick} className={classes.def} style={{cursor: number !== 0 ? "pointer" : "default", borderColor: number ? "var(--g5)" : "var(--g10)", backgroundColor: ismand ? "#c6c6c6" : "var(--bg)"}}>
            <div className={classes.info}>
                <img src={require('../../../../img/router/' + number + '.svg')} alt={number} />
                <h3 style={{color: number ? "var(--g5)" : "var(--g10)", fontWeight: "500"}}>{poi.short_name}</h3>
            </div>
            <div style={{display: "flex"}}>
                {number !== 0 ? <div style={{cursor: "pointer", backgroundColor: "transparent"}} onClick={() => delete_poi_from_path(poi_id)}><img src={require("../../../../img/router/x.svg").default}/></div> : ""}
            </div>
        </div>
    );
};

export default PoiInPath;