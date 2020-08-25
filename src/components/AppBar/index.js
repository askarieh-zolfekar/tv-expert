import React, {Fragment} from 'react';
import './style.css';
import Bell from '../../assets/img/bell.svg';
import WelcomeUser from "../WelcomeUser";
import WaitListButton from "../WaitListButton";
import Text from "../Text";
import IcBurgerMenu from '../../assets/img/ic-burger.svg';
import {MobileView, BrowserView} from 'react-device-detect';
import {useDispatch, useSelector} from "react-redux";
import {toggleLeftMenu, toggleMainMenu} from "../../actions";

const AppBar = () => {
    const dispatch = useDispatch();
    const leftMenu = useSelector(({generalReducer}) => generalReducer.leftMenu);

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

            <MobileView viewClassName={'app-bar mobile'}>
                <Text style={{visibility: (leftMenu?'hidden':'visible'),fontFamily: 'LoewNextArabic-ExtraBold', fontSize:'13px', marginTop: '21px', marginBottom: '19px'}} onClick={() => dispatch(toggleLeftMenu())}>14 قائمة الانتظار</Text>
                <img src={IcBurgerMenu} alt="burger-menu" onClick={() => dispatch(toggleMainMenu())}/>
            </MobileView>
        </Fragment>
    )
};

export default AppBar;
