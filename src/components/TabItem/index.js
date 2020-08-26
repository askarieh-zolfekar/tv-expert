import React from 'react';
import './style.css';
import IcArrowRightWhite from '../../assets/img/ic-arrow-right-white.svg';
import Text from "../Text";
import {Link} from "react-router-dom";
import {BrowserView} from 'react-device-detect';

const TabItem = ({active, title, link, onItemClick, details}) => {
    return (
        <div className={`tab-item ${active?'active':''}`} onClick={onItemClick}>
            <Link className={'link'} to={link}>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'}}>
                    <Text className={'title'}>{title}</Text>
                    {active && details && <img id={'details-arrow'} src={IcArrowRightWhite} alt="IcArrowRightWhite" />}
                </div>
                <BrowserView viewClassName={'line'} />
            </Link>
        </div>
    );
};

export default TabItem;
