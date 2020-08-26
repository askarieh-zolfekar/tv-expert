import React from 'react';
import './style.css';
import IcBellWhite from '../../assets/img/ic-bell-white.svg';

const IconBell = ({style}) => {
    return (
        <div className={`icon-bell`} style={style}>
            <img src={IcBellWhite} alt={IcBellWhite}/>
        </div>
    );
};

export default IconBell;
