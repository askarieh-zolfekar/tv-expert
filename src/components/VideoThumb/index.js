import React from 'react';
import './style.css';
import Hind from "../../assets/img/hind-video.jpg";

const VideoThumb = ({filetype}) => {
    if (filetype !== 'video') {
        return '';
    }
    return (
        <div className={'video-thumb'}>
            <img id={'image'} src={Hind} alt={'video'} />
        </div>
    );
};

export default VideoThumb;
