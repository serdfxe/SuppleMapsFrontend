import React, { useState, useEffect } from 'react';

import Page from '../../../Page/Page';
// import SideBar from '../../../components/SideBar/SideBar';
import Block from '../../../components/ui/Block/Block';
import api_url from '../../../config';

import classes from './MapPage.module.css';
import ShortPoiInfo from '../ShortPoiInfo/ShortPoiInfo';
import MapSide from '../MapSide/MapSide';

const MapPage = ({...props}) => {
    const [map, setMap] = useState("");

    function update_map() {
        fetch(api_url + '/map/', {method: "GET", headers: {
            'Accept': 'application/json',
            Authorization: 'Bearer ' + props.token
          }})
        .then(resp => resp.json())
        .then(data => setMap(data.map))
        .catch(err => update_map())
    }

    useEffect(() => {
        update_map();
    }, []);

    window.update_map = update_map;

    

    return (
        <>  
            <div className={classes.map_wrap}>
                <iframe allowfullscreen sandbox="allow-scripts" title="MAP" srcDoc={map} className={classes.map}></iframe>
            </div>
            <Page sidebar_info={<ShortPoiInfo token={props.token}/>} side_box={<MapSide token={props.token}/>}/>
        </>
    );
};

export default MapPage;