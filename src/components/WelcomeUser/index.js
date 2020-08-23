import React from 'react';
import './style.css';
import ProfileIcon from "../ProfileIcon";
import Text from "../Text";

const WelcomeUser = () => {
    return (
        <div className={'welcome-user'}>
            <ProfileIcon/>
            <Text className={'desktop'} style={{fontFamily: 'LoewNextArabic-Bold', marginRight: '7.5px'}}>مرحبا بك</Text>
            <Text className={'desktop'} style={{fontFamily: 'LoewNextArabic-ExtraBold', fontSize: '19px', marginRight: '7px'}}>مالك محمد</Text>
        </div>
    );
};

export default WelcomeUser;
