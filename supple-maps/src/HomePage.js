import React from 'react';
import Button from './components/ui/Button/Button';

import Block from './components/ui/Block/Block';
import SideBar from './components/SideBar/SideBar';
import BodyWrap from './components/BodyWrap/BodyWrap';
import Side from './components/Side/Side';

const HomePage = () => {
    return (
        <div className="App">
            <BodyWrap>
                <Side>
                    <SideBar/>
                </Side>
                
                <Block fit>
                    <Button><h3>Построить маршрут</h3></Button>
                    <Button empty><h3>Построить маршрут</h3></Button>
                    <Button rounded><h3>Построить маршрут</h3></Button>
                    <Button rounded empty><h3>Построить маршрут</h3></Button>
                </Block>            
            </BodyWrap>
        </div>
    );
};

export default HomePage;