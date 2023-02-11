import React from 'react';

import SideBar from './components/SideBar/SideBar';
import BodyWrap from './components/BodyWrap/BodyWrap';
import Side from './components/Side/Side';
import Content from './components/Content/Content';
import SideBarInfo from './components/SideBar/SideBarInfo/SideBarInfo';

const Page = ({sidebar_info, content, side_box, ...props}) => {
    return (
        <div className="App">
            <BodyWrap>
                <Side>
                    <SideBar/>

                    <SideBarInfo> 
                        {sidebar_info}
                    </SideBarInfo>
                </Side>

                <Content>
                    {content}
                </Content>

                <Side>
                    {side_box}
                </Side>           
            </BodyWrap>
        </div>
    );
};

export default Page;