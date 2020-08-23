import React from 'react';
import './style.css';
import Text from "../Text";


const Skill = ({text}) => {
    return (
        <div className="skill">
            <Text id={'text'}>
                {text}
            </Text>
        </div>
    );
};

export default Skill;
