import React, { useEffect, useState } from 'react';

import Block from '../../../components/ui/Block/Block';
import SideBar from '../../../components/SideBar/SideBar';
import BodyWrap from '../../../components/BodyWrap/BodyWrap';
import Side from '../../../components/Side/Side';
// import Input from '../../../components/ui/Input/Input';
import api_url from '../../../config';

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
        <BodyWrap>
            <Side>
                <SideBar/>
            </Side>
                
            <Block fit>
                <h1>{user.name}</h1>
            </Block>            
        </BodyWrap>
    );
};

export default Accountpage;