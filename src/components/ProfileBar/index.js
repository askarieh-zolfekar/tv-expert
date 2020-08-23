import React from 'react';
import './style.css';
import TimeViewer from '../../assets/img/time-viewer.svg';
import ExpertOverview from "../ExpertOverview";
import BellWhite from "../../assets/img/ic-bell-white.svg";
import WelcomeUser from "../WelcomeUser";
import {BrowserView, MobileView} from 'react-device-detect';

const ProfileBar = () => {
    return (
        <div className={'profile-bar'}>
            <BrowserView viewClassName="right-section">
                <ExpertOverview />
            </BrowserView>
            <MobileView viewClassName="right-section">
                <img src={BellWhite} alt={'bell'} style={{marginLeft: '14.4px'}}/>
                <WelcomeUser />
            </MobileView>
            <div className="left-section">
                <img className={'time-viewer'} src={TimeViewer} alt={'TimeViewer'}/>
            </div>
        </div>
    );
};

export default ProfileBar;
