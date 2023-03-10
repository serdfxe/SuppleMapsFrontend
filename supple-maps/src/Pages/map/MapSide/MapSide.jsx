import React, { useState, useEffect } from 'react';

import Block from '../../../components/ui/Block/Block';
import Input from '../../../components/ui/Input/Input';
import Search from '../../../components/Search/Search';
import Button from '../../../components/ui/Button/Button';
import TextButton from '../../../components/ui/TextButton/TextButton';
import PoiInPathSearch from '../../../components/PoiInPathSearch/PoiInPathSearch'; 


import classes from './MapSide.module.css';
import PoiInPath from './PoiInPath/PoiInPath';
import CheckBox from '../../../components/ui/CheckBox/CheckBox';
import api_url from '../../../config';
import { useLocation } from 'react-router';




const MapSide = ({...props}) => {
    const [router, setRouter] = useState({state: "editing", path: [], length: 0, walk_time: "", full_time: ""});

    const location = useLocation();

    const [dur, setDur] = useState(false);
    const [time_limit, setTime_limit] = useState(10);
    const [islimit, setIslimit] = useState(false);

    useEffect(() => {
        setDur(false);
        setIslimit(false);
    }, [location]);

    // const [path, setPath] = useState([]);


    function add_to_mand(id) {
        fetch(api_url + "/router/switchmand/" + id, {method: "POST", headers: {
            Authorization: 'Bearer ' + props.token
        }})
        .then(resp => resp.json())
        .then(data => {
            console.log("Switch!!")
            update_router()
        })
    }

    function update_router() {
        fetch(api_url + "/router/", {method: "GET", headers: {
            Authorization: "Bearer " + props.token,
            Accept: 'application/json',
        }})
        .then(resp => resp.json())
        .then(data => { 
            console.log("Router !!")

            const path = data.path.map((p, i) =>
                <PoiInPath onClick={() => add_to_mand(p)} ismand={data.mandatory_points.includes(p)} token={props.token} poi_id={p} number={i + 1 <= 10 ? i + 1 : -1} key={i + "path_"}/>
            );

            data.path = path;

            setRouter(data);
        })
    }

    window.router_state = router.state;
    window.update_router = update_router;

    function build_path() {
        fetch(api_url + "/router/build", {method: "POST", body: JSON.stringify({"dur_of_visit": dur, "time_limit": islimit ? time_limit >= 10 && time_limit <= 100000 ? time_limit : 100000 : 100000}), headers: {
            Authorization: "Bearer " + props.token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        .then(data => {
            update_router()
            window.update_map()
        })
    }

    function clear_router() {
        fetch(api_url + "/router/clear", {method: "POST", headers: {
            Authorization: "Bearer " + props.token,
            Accept: 'application/json',
        }})
        .then(data => {
            update_router()
        })
        .then(window.update_map())
    }

    function save_path() {
        fetch(api_url + "/router/save", {method: "POST", headers: {
            Authorization: "Bearer " + props.token,
            Accept: 'application/json',
        }})
    }

    useEffect(() => {
        update_router();
    }, []);


    
    return (
        <Block style={{padding: 0, gap: 0}}>
            <Search/>
            <div className={classes.router_wrap}>
                <h2>{{"editing": "???????????????????? ????????????????", "viewing": "???????????????? ????????????????"}[router.state]}</h2>
                <div className={classes.path_wrap}>
                    <div style={{display: "flex", flexDirection: "column", gap: "var(--d2)"}}>
                        <PoiInPath token={props.token} poi_id={1} number={0}/>
                        {router.path}
                    </div>
                    {router.state === "editing" ? <PoiInPathSearch token={props.token}/> : ""}
                </div>
                <div className={classes.comm_wrap}>
                    {/* <TextButton><h3>???????????????? ??????????</h3></TextButton> */}
                    <TextButton onClick={clear_router}><h3>????????????????</h3></TextButton>
                </div>
                {router.state === "editing" ? 
                <div className={classes.cheks_wrap}>
                    <CheckBox value={dur} onChange={e => setDur(e.target.checked)}><h3>?????????????????? ?????????? ??????????????????</h3></CheckBox>
                    <CheckBox value={islimit} onChange={e => setIslimit(e.target.checked)}><h3>?????????????????????? ???? ??????????????</h3></CheckBox>
                    {!islimit ? "" : <div style={{width: "100%", display: "flex", alignItems: 'flex-end', gap: '11px'}}><input min="10" max="10000" type="number" value={time_limit} onChange={e => setTime_limit(e.target.value)}/> <h3>??????????</h3></div>}
                </div> : <div className={classes.info_wrap}>
                    <div><h3>??????????</h3> <h3>{router.walk_time}</h3></div>
                    <div><h3>?? ???????????? ??????????????????</h3> <h3>{router.full_time}</h3></div>
                    <div><h3>??????????</h3> <h3>{router.length}</h3></div>
                    </div>}    
            </div>  
            <div className={classes.btns}>
                {router.state === "editing" ? 
                    [<Button rounded onClick={build_path}><h3>?????????????????? ??????????????</h3></Button>] : 
                    [<Button rounded onClick={build_path}><h3>???????????? ??????????????</h3></Button>,
                    <Button rounded empty onClick={save_path}><h3>??????????????????</h3></Button>]
                }   
            </div>
        </Block>
    );
};

export default MapSide;