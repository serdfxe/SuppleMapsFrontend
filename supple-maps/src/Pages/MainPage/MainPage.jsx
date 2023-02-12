import React from 'react';
import Page from '../../Page';

import Block from '../../components/ui/Block/Block';
import RandArts from '../../components/RandArts/RandArts';

const MainPage = () => {
    return (
        <Page content={<Block>контент</Block>} side_box={<Block>чото</Block>} sidebar_info={<RandArts amount={3} />}/>
    );
};

export default MainPage;