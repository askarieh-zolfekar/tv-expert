import React from 'react';
import Text from "../Text";
import IcArrowRight from '../../assets/img/ic-arrow-right.svg';
import IcArrowLeft from '../../assets/img/ic-arrow-left.svg';
import './style.css';
import {useDispatch} from "react-redux";
import {toggleLeftMenu} from "../../actions";

const WaitListButton = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={'wait-list-button'}>
            <img className={'open-details'} src={IcArrowRight} alt="ic-arrow-right" style={{marginLeft: '30px', marginBottom: '5px', cursor: 'pointer'}} onClick={() => dispatch(toggleLeftMenu())}/>
            <Text className={'open-details'} style={{fontFamily: 'LoewNextArabic-ExtraBold', fontSize:'20px'}}>
                14 قائمة الأنتظار
            </Text>
            <img className={'close-details'} src={IcArrowLeft} alt="ic-arrow-left" style={{cursor: 'pointer'}} onClick={() => dispatch(toggleLeftMenu())}/>
        </div>
    );
};

export default WaitListButton;
