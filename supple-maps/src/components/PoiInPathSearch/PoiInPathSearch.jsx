import React, { useState, useEffect } from 'react';
import api_url from '../../config';

import Block from '../ui/Block/Block';
import Input from '../ui/Input/Input';

import classes from './PoiInPathSearch.module.css';


const PoiInPathSearch = ({...props}) => {
    const [search, setSearch] = useState([]);
    const [input_value, setInput_value] = useState("");

    useEffect(() => {
        if (input_value.length <= 1) {
            setSearch([]);
            return
        }
        start_search(input_value)
    }, [input_value]);

    function add_poi_to_path(id) {
        fetch(api_url + "/router/add/" + id, {method: "POST", headers: {
            // 'Accept': 'application/json',
            Authorization: 'Bearer ' + props.token
        }})
        .then(resp => {
            setInput_value("");
            window.update_router(); 
        })
    }

    function start_search(text) {
        if (text.length <= 1) {
            setSearch([])
            return
        }
        fetch(api_url + "/router/search", {
            method: "POST", 
            body: JSON.stringify({"text": text}), 
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
        }})
        .then(resp => resp.json())
        .then(data => {
            setSearch(data.map((p, i) =>
                <div style={{cursor: "pointer"}} key={p.id + "_search_info"} onMouseDown={() => add_poi_to_path(p.id)}><h3>{p.name}</h3></div>
            ));
        })
    }

    function on_input_blur(el) {
        setSearch([]);
        el.value = "";
    }

    function on_input_focus(text) {
        start_search(text)
    }

    return (
        <div className={classes.wrap}>
            {/* onChange={e => start_search(e.target.value)} */}
            <Input onFocus={e => on_input_focus(e.target.value)} onBlur={e => on_input_blur(e.target)} className={classes.s_input} value={input_value} onChange={e => setInput_value(e.target.value)} placeHolder="Введите точку интереса..." wrap_style={{padding: "11px", borderColor: "var(--g5)"}} style={{padding: "0"}}><img src={require('../../img/router/-1.svg').default}/></Input>
            <div className={classes.search_info_wrap}>
                <Block className={classes.search_block} style={{display: search.length !== 0 ? "flex" : "none"}}>
                    <div className={classes.wrap_f}>
                        {search}
                    </div>
                </Block>
            </div>
        </div>
    );
};

export default PoiInPathSearch;