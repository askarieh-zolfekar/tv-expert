import React from 'react';
import './style.css';
import Text from "../Text";
import FeatureIcon from "../FeatureIcon";

const Feature = (props) => {
    const {icon, title, status} = props;
    return (
        <div className={'feature'} {...props}>
            <FeatureIcon type={icon} />
            <div className={'details'}>
                <Text id={'title'}>{title}</Text>
                <Text id={'status'}>{status}</Text>
            </div>
        </div>
    );
};

export default Feature;
