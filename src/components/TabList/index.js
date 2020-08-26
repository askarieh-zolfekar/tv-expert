import React, {useState} from 'react';
import './style.css';
import TabItem from "../TabItem";
import {useDispatch, useSelector} from "react-redux";
import {changeExpertActiveTab} from "../../actions";

const TabList = ({tabs, style}) => {
    const dispatch = useDispatch();
    const {tabIndex, details} = useSelector(({generalReducer}) => generalReducer.expertTab);

    return (
        <div className={'tab-list'} style={style}>
            {tabs.map((tab, idx) => <TabItem details={details} className={'tab-item'} key={idx} active={tabIndex === idx} {...tab} onItemClick={() => dispatch(changeExpertActiveTab(idx))}/>)}
        </div>

    );
};

export default TabList;
