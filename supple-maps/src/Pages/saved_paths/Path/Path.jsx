import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Block from '../../../components/ui/Block/Block';
import Button from '../../../components/ui/Button/Button';

import api_url from '../../../config';
// import PoiInPath from '../../map/MapSide/PoiInPath/PoiInPath';

import classes from './Path.module.css';
import PoiInHist from './PoiInHist/PoiInHist';

const Path = ({hist, ...props}) => {
    const [path, setPath] = useState([]);

    const navigate = useNavigate();

    function update(){
        setPath(
            hist.path.map((p, i) =>
            <PoiInHist token={props.token} poi_id={p} key={i + "_hist_"}/>
        ));
    }

    useEffect(() => {
        update()
    }, []);

    function show_path() {
        fetch(api_url + "/router/loadsaved/" + hist.id, {method: "POST", headers: {
            Authorization: 'Bearer ' + props.token
          }})
        .then(data => navigate("/app/map/"))
    }

    function del() {
        fetch(api_url + "/router/delsaved/" + hist.id, {method: "POST", headers: {
            Authorization: 'Bearer ' + props.token
          }})
        .then(data => window.update_saved_paths())
    }


    return (
        <div>
            <Block style={{flexDirection: "row"}} className={classes.g_wrap}>
                <img src={hist.image} alt={hist.image} />
                <div className={classes.info_wrap}>
                    <div className={classes.path_wrap}>
                        {path}
                    </div>
                    <div className={classes.btns}>
                        <Button rounded empty><h3>Поделиться</h3></Button>
                        <Button rounded onClick={show_path}><h3>Просмотреть</h3></Button>
                        <Button rounded onClick={del} style={{backgroundColor: "var(--red)", borderColor: "var(--red)"}}><h3>Удалить</h3></Button>
                    </div>
                </div>
                
            </Block>
        </div>
    );
};

export default Path;