import React from 'react';
import './style.css';
import FeatureList from "../FeatureList";
import TabList from "../TabList";
import {BrowserView} from 'react-device-detect';
import {NAV_BAR_TABS} from '../../constants';

const ProfileNavBar = (props) => {
    return (
        <div className={'profile-nav-bar'}>
            <BrowserView viewClassName={"right-section"}>
                <TabList tabs={NAV_BAR_TABS}/>
            </BrowserView>
            <div className="left-section">
                <FeatureList />
            </div>
        </div>
    );
};

export default ProfileNavBar;
