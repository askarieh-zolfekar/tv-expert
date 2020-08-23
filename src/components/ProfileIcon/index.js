import React from 'react';
import IcProfile from '../../assets/img/ic-profile.svg';
import IcGreyCircle from '../../assets/img/ic-grey-circle.svg';
import './style.css';

const ProfileIcon = () => {
    return (
        <div className={'profile-icon'} >
            <img src={IcGreyCircle} alt={'grey-circle'} />
            <img src={IcProfile} alt={'ic-profile'} />
        </div>
    );
};

export default ProfileIcon;
