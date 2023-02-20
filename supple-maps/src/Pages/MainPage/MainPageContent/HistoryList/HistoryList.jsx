import React, { useState, useEffect } from 'react';
import api_url from '../../../../config';
import Path from '../Path/Path';

import classes from './HistoryList.module.css';

import { useNavigate } from 'react-router';



const HistoryList = ({...props}) => {
    const navigate = useNavigate();

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(api_url + "/router/static", {method: "GET", headers: {
            Accept: 'application/json',
        }})
        .then(resp => resp.json())
        .then(data => {
            console.log("HistData: ", data)

            setList(
                data.map((h, i) =>
                <Path hist={h} token={props.token}/>
                // <Path poi_list={h.path} image={h.image} len={p.length} full_time={}/>
            ));
        })
    }, []);

    return (
        <>
            <div className={classes.head}>
                <h1>Статические маршруты</h1>
            </div>
            <div className={classes.wrap}>
                {list}
            </div>
        </>
    );
};

export default HistoryList;