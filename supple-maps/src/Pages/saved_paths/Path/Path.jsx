import React, { useState, useEffect } from 'react';

import Block from '../../../components/ui/Block/Block';
import Button from '../../../components/ui/Button/Button';

import api_url from '../../../config';
// import PoiInPath from '../../map/MapSide/PoiInPath/PoiInPath';

import classes from './Path.module.css';
import PoiInHist from './PoiInHist/PoiInHist';

const Path = ({hist, ...props}) => {
    const [path, setPath] = useState([]);

    useEffect(() => {
        setPath(
            hist.path.map((p, i) =>
            <PoiInHist token={props.token} poi_id={p} key={i + "_hist_"}/>
        ));
    }, []);


    return (
        <div>
            <Block style={{flexDirection: "row"}} className={classes.g_wrap}>
                <img src={hist.image} alt={hist.image} />
                <div className={classes.info_wrap}>
                    <div className={classes.path_wrap}>
                        {path}
                    </div>
                    <div className={classes.btns}>
                        <Button rounded empty>Поделиться</Button>
                        <Button rounded><h3>Просмотреть</h3></Button>
                    </div>
                </div>
                
            </Block>
        </div>
    );
};

export default Path;