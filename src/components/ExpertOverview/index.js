import React from 'react';
import Hind from '../../assets/img/hind.png';
import './style.css';
import Text from "../Text";
import Ratings from "../Ratings";
import Badge from "../StatusBadge";
import IcHome from "../../assets/img/ic-home.svg";

const ExpertOverview = () => {
    return (
        <div className={'expert-overview'}>
            <div style={{display: 'flex'}}>
                <img className={'desktop'} style={{marginLeft: '20px'}} src={IcHome} alt="IcHome"/>
                <img id={'expert-img'} src={Hind} alt="Hind"/>
            </div>
            <ul>
                <li><Text id={'main-title'}>العيادة الرقمية</Text></li>
                <li style={{display: 'flex'}}>
                    <Text id={'expert-name'}>لـ د. هند الناهض</Text>
                    <Badge id={'expert-status'}>مشغول بإستشارة</Badge>
                </li>
                <li id={'expert-rating'}><Ratings value={3} /></li>
            </ul>
        </div>
    );
};

export default ExpertOverview;
