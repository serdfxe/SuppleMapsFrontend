import React, { useState, useEffect } from 'react';
import api_url from '../../../config';
import Path from '../Path/Path';

import classes from './SavedPathsList.module.css';

import { useNavigate } from 'react-router';



const SavedPathsList = ({...props}) => {
    const navigate = useNavigate();

    const [list, setList] = useState([]);

    function update_saved_paths() {
        fetch(api_url + "/router/saved/", {method: "GET", headers: {
            Authorization: "Bearer " + props.token,
            Accept: 'application/json',
        }})
        .then(resp => resp.json())
        .then(data => {
            console.log("SavedPathsData: ", data)

            setList(
                data.map((h, i) =>
                <Path hist={h} token={props.token}/>
                // <Path poi_list={h.path} image={h.image} len={p.length} full_time={}/>
            ));
        })
    }


    window.update_saved_paths = update_saved_paths;

    useEffect(() => {
        update_saved_paths();
    }, []);

    return (
        <>
            <div className={classes.head}>
                <svg onClick={() => navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clip-path="url(#clip0_119_1724)">
                    <path d="M20 0C8.97167 0 0 8.97167 0 20C0 31.0283 8.97167 40 20 40C31.0283 40 40 31.0283 40 20C40 8.97167 31.0283 0 20 0ZM20 38.3333C9.89167 38.3333 1.66667 30.1083 1.66667 20C1.66667 9.89167 9.89167 1.66667 20 1.66667C30.1083 1.66667 38.3333 9.89167 38.3333 20C38.3333 30.1083 30.1083 38.3333 20 38.3333Z" fill="#686868"/>
                    <path d="M29.1667 19.1668H11.8267C11.9317 18.8718 12.085 18.5918 12.305 18.3451C12.7483 17.8434 13.1833 17.3668 13.5 17.0501L18.2133 12.2518C18.5367 11.9234 18.5317 11.3951 18.2033 11.0718C17.8733 10.7501 17.345 10.7535 17.025 11.0818L12.3167 15.8751C11.9867 16.2051 11.525 16.7084 11.0567 17.2384C9.66167 18.8118 9.66167 21.1851 11.0567 22.7584C11.5267 23.2884 11.9883 23.7934 12.3117 24.1168L17.025 28.9151C17.1883 29.0818 17.4033 29.1634 17.6183 29.1634C17.8283 29.1634 18.04 29.0834 18.2033 28.9251C18.5317 28.6018 18.5367 28.0751 18.2133 27.7451L13.495 22.9418C13.1833 22.6301 12.7483 22.1534 12.3033 21.6518C12.085 21.4051 11.93 21.1251 11.8267 20.8301H29.1667C29.6267 20.8301 30 20.4568 30 19.9968C30 19.5368 29.6267 19.1634 29.1667 19.1634V19.1668Z" fill="#686868"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_119_1724">
                    <rect width="40" height="40" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <h1>???????????????????? ????????????????</h1>
            </div>
            <div className={classes.wrap}>
                {list}
            </div>
        </>
    );
};

export default SavedPathsList;