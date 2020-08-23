import React from 'react';
import './style.css';
import WaitUser from "../WaitUser";

const WaitUserList = ({users}) => {
    return (
        <div className={'wait-user-list'} >
            {users.map((user, idx) => <WaitUser key={idx} name={user.name} lastActive={user.lastActive} current={user.current} />)}
        </div>
    );
};

export default WaitUserList;
