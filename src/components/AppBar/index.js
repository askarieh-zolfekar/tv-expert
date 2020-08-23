import React, {Fragment} from 'react';
import './style.css';
import Bell from '../../assets/img/bell.svg';
import WelcomeUser from "../WelcomeUser";
import WaitListButton from "../WaitListButton";
import Text from "../Text";
import IcBurgerMenu from '../../assets/img/ic-burger.svg';
import {MobileView, BrowserView} from 'react-device-detect';

const AppBar = () => {
    return (
        <Fragment>
            <BrowserView viewClassName={'app-bar'}>
                <div className="right-section">
                    <img src={Bell} alt={'bell'}/>
                    <WelcomeUser />
                </div>
                <div className="left-section">
                    <WaitListButton />
                </div>
            </BrowserView>

            <MobileView viewClassName={'app-bar'}>
                <Text style={{fontFamily: 'LoewNextArabic-ExtraBold', fontSize:'13px', marginTop: '21px', marginBottom: '19px'}}>14 قائمة الانتظار</Text>
                <img src={IcBurgerMenu} alt="burger-menu"/>
            </MobileView>
        </Fragment>
    )
};

export default AppBar;
