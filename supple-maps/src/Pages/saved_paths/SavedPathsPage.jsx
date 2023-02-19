import React from 'react';

import SideBox from '../SideBox/SideBox';
import RandArts from '../../components/RandArts/RandArts';

import Page from '../../Page/Page';
import SavedPathsList from './SavedPathsList/SavedPathsList';

const SavedPathsPage = ({...props}) => {
    return (
        <Page sidebar_info={<RandArts amount={3} />} side_box={<SideBox />} content={<SavedPathsList token={props.token}/>}/>
    );
};          

export default SavedPathsPage;