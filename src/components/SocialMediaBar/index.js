import React from 'react';
import './style.css';
import IcInstagram from '../../assets/img/ic-instagram.svg';
import IcFacebook from '../../assets/img/ic-facebook.svg';
import IcTwitter from '../../assets/img/ic-twitter.svg';

const SocialMediaBar = ({style}) => {
    return (
        <div className={'social-media-bar'} style={style}>
            <img src={IcInstagram} alt="instagram"/>
            <img src={IcFacebook} alt="twitter"/>
            <img src={IcTwitter} alt="facebook"/>
        </div>
    );
};

export default SocialMediaBar;
