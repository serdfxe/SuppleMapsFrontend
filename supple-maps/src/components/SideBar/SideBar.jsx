import React from 'react';

import Block from '../ui/Block/Block';

import SideBarComp from './SideBarComp/SideBaRComp';

import classes from "./SideBar.module.css";

import logo from './logo.svg';

const SideBar = ({...props}) => {
    const components = [
        ["Главная", "main"],
        ["Личный кабинет", "account"],
        ["Карта", "map"],
        ["Поиск", "search"],
        ["Статические пути", "static_path"],
        ["Настройки", "settings"],
        ["История", "history"],
    ]

    return (
        <Block className={classes.def} style={{gap: '0px'}}>
            <div className={classes.logo_wrap}>
                <img src={logo} alt="Supple Maps"/>
            </div>
            {components.map((x, i) =>
                <SideBarComp image={components[i][1]} text={components[i][0]} className={`${i === 1 ? classes.current_page : classes.comp}`}/>
            )}  
        </Block>
    );
};

export default SideBar;