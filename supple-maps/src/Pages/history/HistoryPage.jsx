import React from 'react';

import SideBox from '../SideBox/SideBox';
import RandArts from '../../components/RandArts/RandArts';

import Page from '../../Page/Page';
import HistoryList from './HistoryList/HistoryList';

const HistoryPage = ({...props}) => {
    return (
        <Page sidebar_info={<RandArts amount={3} />} side_box={<SideBox />} content={<HistoryList token={props.token}/>}/>
    );
};

export default HistoryPage;