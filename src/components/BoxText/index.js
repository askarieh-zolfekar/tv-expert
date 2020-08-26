import React from 'react';
import './style.css';
import Text from "../Text";

const BoxText = ({id, title, children}) => {
    return (
        <div className="box-text" id={id}>
            {title && (
                <Text className={'title-text'}>
                    {title}
                </Text>
            )}
            <Text className={'main-text'}>
                {children}
            </Text>
        </div>
    );
};

export default BoxText;
