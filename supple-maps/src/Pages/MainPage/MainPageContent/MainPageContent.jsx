import React from 'react';

import Block from '../../../components/ui/Block/Block';


import classes from './MainPageContent.module.css';

import HistoryList from './HistoryList/HistoryList';

const MainPageContent = ({...props}) => {
    return (
        <div style={{width: "-fill-available"}}>
            <Block className={classes.info}>
                <div className={classes.logo_wrap}>
                    <img src={require("../../../img/big_logo.jpg")} alt="" style={{height: "200px"}}/>
                </div>
                <h1>О нас</h1>
                <h2>Supple maps - это удобные карты для туристов и жителей города, которые хотят узнать культурное наследие России. С помощью сервиса Supple maps пользователи смогут удобно построить необходимый им маршрут по интересным локациям ВДНХ, а также узнать описание и историю этих мест.</h2>
            </Block>

            <div className={classes.stat_wrap}>
                <HistoryList token={props.token}/>
            </div>
        </div>
    );
};

export default MainPageContent;