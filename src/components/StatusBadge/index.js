import React from 'react';
import './style.css';
import Text from "../Text";

const Badge = (props) => {
    return (
        <div className={'badge'} {...props}>
            <Text>
                {props.children}
            </Text>
        </div>
    );
};

export default Badge;
