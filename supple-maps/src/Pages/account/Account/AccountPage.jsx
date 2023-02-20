import React, { useEffect, useState } from 'react';

import Page from '../../../Page/Page';

import RandArts from '../../../components/RandArts/RandArts';
import Content from './Content/Content';

// import Input from '../../../components/ui/Input/Input';
import api_url from '../../../config';
import SideBox from '../../SideBox/SideBox';

const Accountpage = ({...props}) => {
    const [user, setUser] = useState({name: null});

    useEffect(() => {
        fetch(api_url + "/auth/profile", {method: "GET", headers: {
            'Accept': 'application/json',
            Authorization: 'Bearer ' + props.token
          }})
        .then(resp => resp.json())
        .then(data => setUser(data))
    }, [props.token]);

    return (
        <Page side_box={<SideBox token={props.token}/>} sidebar_info={<RandArts amount={3}/>} content={<Content data={user}/>}/>
    );
};

export default Accountpage;