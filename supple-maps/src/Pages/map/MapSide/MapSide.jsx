import React, { useState, useEffect } from 'react';

import Block from '../../../components/ui/Block/Block';
import Input from '../../../components/ui/Input/Input';
import Search from '../../../components/Search/Search';
import Button from '../../../components/ui/Button/Button';
import TextButton from '../../../components/ui/TextButton/TextButton';


import classes from './MapSide.module.css';
import PoiInPath from './PoiInPath/PoiInPath';
import CheckBox from '../../../components/ui/CheckBox/CheckBox';
import api_url from '../../../config';


const MapSide = ({...props}) => {
    const [router, setRouter] = useState({state: "editing", path: ""});

    const [path, setPath] = useState([]);

    useEffect(() => {
        fetch(api_url + "/router/", {method: "GET", headers: {
            Authorization: "Bearer" + props.token,
            Accept: 'application/json',
        }})
        .then(resp => resp.json())
        .then(data => {
            setRouter(data);
        })  
    }, []);

    
    return (
        <Block style={{padding: 0, gap: 0}}>
            <Search/>
            <div className={classes.router_wrap}>
                <h2>{{"editing": "Построение маршрута"}[router.state]}</h2>
                <div className={classes.path_wrap}>
                    {path}
                    <PoiInPath token={props.token} poi_id={1} number={0}/>
                    <PoiInPath token={props.token} poi_id={2} number={1}/>
                    <PoiInPath token={props.token} poi_id={3} number={2}/>
                    <PoiInPath token={props.token} poi_id={4} number={3}/>
                    <Input placeHolder="Введите точку интереса..." wrap_st  wrap_style={{padding: "11px"}} style={{padding: "0"}}><img src={require('../../../img/router/-1.svg').default}/></Input>
                </div>
                <div className={classes.comm_wrap}>
                    <TextButton><h3>Добавить точку</h3></TextButton>
                    <TextButton><h3>Сбросить</h3></TextButton>
                </div>
                <div className={classes.cheks_wrap}>    
                    <CheckBox><h3>Учитывать время посещения</h3></CheckBox>
                    <CheckBox><h3>Ограничение по времени</h3></CheckBox>
                </div>
            </div>
            <div className={classes.btns}>
                <Button rounded><h3>Построить маршрут</h3></Button>
                <Button rounded empty><h3>Поделиться</h3></Button>
            </div>
        </Block>
    );
};

export default MapSide;