import React from 'react';
import './style.css';
import Text from "../Text";
import {Link} from "react-router-dom";

const TabItem = ({active, title, link, onItemClick}) => {
    return (
        <div className={`tab-item ${active?'active':''}`}>
            <Link className={'link'} to={link} onClick={onItemClick}>
                <Text className={'title'}>{title}</Text>
                <div className={'line'} />
            </Link>
        </div>
    );
};

export default TabItem;
