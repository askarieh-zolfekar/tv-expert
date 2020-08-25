import React from 'react';
import './style.css';
import Text from "../Text";

const items = [
    {label: 'الرئيسية', link: '', special: true},
    {label: 'نبذه عنا', link: ''},
    {label: 'الخبراء', link: ''},
    {label: 'سؤال وجواب', link: ''},
    {label: 'اختبارات كورونا', link: ''},
    {label: 'أتصل بنا', link: ''},
    {label: 'أنضم كخبير', link: '', special: true},
];

const MainMenu = ({open}) => {
    return (
        <div className={`main-menu ${open?'in':''}`}>
            <div className="main-menu-content">
                {items.map((item,idx) => (
                    <Text className={`main-menu-item ${item.special ? 'special' : ''}`}>{item.label}</Text>
                ))}
            </div>
        </div>
    );
};

export default MainMenu;
