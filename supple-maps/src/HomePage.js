import React from 'react';
import Button from './components/ui/Button/Button';

import Block from './components/ui/Block/Block';
import SideBar from './components/SideBar/SideBar';
import BodyWrap from './components/BodyWrap/BodyWrap';
import Side from './components/Side/Side';
import Input from './components/ui/Input/Input';

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
                    <Input placeholder="Ввод..."></Input>
                    <Input placeholder="Поиск..."> <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.805 15.7414L11.8374 11.7738C12.7796 10.6227 13.3461 9.15271 13.3461 7.55326C13.3454 3.87393 10.352 0.879883 6.67271 0.879883C2.99338 0.879883 0 3.87393 0 7.5526C0 11.2313 2.99338 14.2253 6.67271 14.2253C8.27283 14.2253 9.74283 13.6588 10.8932 12.7166L14.8608 16.6842C14.9909 16.8143 15.1617 16.8797 15.3326 16.8797C15.5034 16.8797 15.6742 16.8143 15.8043 16.6842C16.0652 16.4233 16.0659 16.0023 15.805 15.7414ZM1.33454 7.5526C1.33454 4.60926 3.72938 2.21443 6.67271 2.21443C9.61605 2.21443 12.0109 4.60926 12.0109 7.5526C12.0109 10.4959 9.61605 12.8908 6.67271 12.8908C3.72938 12.8908 1.33454 10.4966 1.33454 7.5526Z" fill="#9D9D9D"/></svg></Input>
                </Block>            
            </BodyWrap>
        </div>
    );
};

export default HomePage;