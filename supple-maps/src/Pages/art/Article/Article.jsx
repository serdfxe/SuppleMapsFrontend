import React from 'react';
import Page from '../../../Page';

// import Block from '../../../components/ui/Block/Block';
import RandArts from '../../../components/RandArts/RandArts';
import ArtBody from './ArtBody/ArtBody';
import { useParams } from 'react-router';
import ArtBox from './ArtBox/ArtBox';

const Article = () => {
    const params = useParams();

    return (
        <Page content={<ArtBody art_id={params.art_id}/>} side_box={<ArtBox art_id={params.art_id}/>} sidebar_info={<RandArts amount={3} />}/>
    );
};

export default Article;