import React from 'react';
import './style.css';
import IcUser from '../../assets/img/ic-user.svg';
import IcActiveUser from '../../assets/img/ic-active-user.svg';

const UserIcon = ({active, style}) => {
    return (
        <div className={`icon-user`} style={style}>
            <img src={active? IcActiveUser : IcUser} alt={'user'}/>
        </div>
    );
};

export default UserIcon;
