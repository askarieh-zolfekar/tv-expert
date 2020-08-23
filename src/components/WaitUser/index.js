import React from 'react';
import './style.css';
import Text from "../Text";
import UserIcon from "../UserIcon";

const WaitUser = ({name, lastActive, current}) => {
    return (
        <div className={`wait-user ${current?'selected':''}`} >
            <UserIcon active={current} style={{zIndex: 2}}/>
            <div id={'user-details'}>
                <Text id={'last-active'}>منذ {lastActive}</Text>
                <Text id={'user-name'}>{name}</Text>
            </div>
        </div>
    );
};

export default WaitUser;
