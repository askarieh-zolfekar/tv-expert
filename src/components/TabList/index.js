import React, {useState} from 'react';
import './style.css';
import TabItem from "../TabItem";

const TabList = ({tabs, style}) => {
    const [activeIDx, setActiveIDx] = useState(0);

    return (
        <div className={'tab-list'} style={style}>
            {tabs.map((tab, idx) => <TabItem className={'tab-item'} key={idx} active={activeIDx === idx} {...tab} onItemClick={() => setActiveIDx(idx)} />)}
        </div>

    );
};

export default TabList;
