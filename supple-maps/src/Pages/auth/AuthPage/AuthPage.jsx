import React from 'react';

import classes from './AuthPage.module.css';

import Block from '../../../components/ui/Block/Block';


const AuthPage = ({children}) => {
    return (
        <div className={classes.wrap}>
            <Block style={{width: "300px"}}>
                {children}
            </Block>
        </div>
    );
};

export default AuthPage;