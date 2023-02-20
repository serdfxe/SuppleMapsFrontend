import React from 'react';
import Page from '../../Page/Page';

import Block from '../../components/ui/Block/Block';
import RandArts from '../../components/RandArts/RandArts';

import SideBox from '../SideBox/SideBox';

import MainPageContent from './MainPageContent/MainPageContent';

const MainPage = ({...props}) => {
    return (
        <Page content={<MainPageContent token={props.token}/>} side_box={<SideBox/>} sidebar_info={<RandArts amount={3} />}/>
    );
};

export default MainPage;