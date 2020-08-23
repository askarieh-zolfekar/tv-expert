import React from 'react';
import './style.css';
import IcMicrophone from "../../assets/img/ic-microphone.svg";
import IcCamera from "../../assets/img/ic-camera.svg";
import IcWifi from "../../assets/img/ic-wifi.svg";

const types = {
    camera: [IcCamera, 'camera'],
    wifi: [IcWifi, 'wifi'],
    microphone: [IcMicrophone, 'microphone'],
};
const FeatureIcon = ({type}) => {
    const [image, classType] = types[type];
    return (
        <div className={`icon-wrapper ${classType}`}>
            <img src={image} alt={classType}/>
        </div>
    );
};

export default FeatureIcon;
