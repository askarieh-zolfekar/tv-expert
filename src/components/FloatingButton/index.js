import React from 'react';
import './style.css';
import Text from "../Text";

const FloatingButton = ({children}) => {
    return (
        <div className={'floating-button'}>
            <Text id={'label'}>{children}</Text>
        </div>
    );
};

export default FloatingButton;
