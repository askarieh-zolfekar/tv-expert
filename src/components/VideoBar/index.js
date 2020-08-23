import React from "react";
import './style.css';
import IcVideo from '../../assets/img/ic-video.svg';
import IcVolume from '../../assets/img/ic-volume.svg';
import IcFullScreen from '../../assets/img/ic-full-screen.svg';
import Text from "../Text";

const VideoBar = () => {
    return (
        <div className="video-bar">
            <img id={'fullscreen'} src={IcFullScreen} alt="IcFullScreen"/>
            <img id={'volume'} src={IcVolume} alt="IcVolume"/>
            <Text id={'time'}>2:29 / 0:00</Text>
            <div id="video-line" />
            <img id={'ic-play'} src={IcVideo} alt="IcVideo"/>
        </div>
    )
};

export default VideoBar;
