import React from 'react';
import './style.css';
import Text from "../Text";
import WaitUserList from "../WaitUserList";
import SocialMediaBar from "../SocialMediaBar";

const waitUsers = [
    {name:'مستخدم 1', lastActive: '15 دقيقة'},
    {name:'مستخدم 2', lastActive: '12 دقيقة'},
    {name:'مستخدم 3', lastActive: '11 دقيقة'},
    {name:'مالك محمد', lastActive: '10 دقيقة', current:1},
    {name:'مستخدم 4', lastActive: '8 دقيقة'},
    {name:'مستخدم 5', lastActive: '5 دقيقة'},
    {name:'مستخدم 6', lastActive: '2 دقيقة'},
];

const LeftMenu = ({open}) => {
    return (
        <div className={`left-menu ${open?'in':''}`}>
            <div id="content">
                <Text style={{fontFamily: 'LoewNextArabic-ExtraBold', fontSize:'20px', marginTop: '6px', marginRight: '19px'}}>14 قائمة الانتظار</Text>
                <div id="wait-list-line"></div>
                <WaitUserList users={waitUsers} />
                <Text className={'policy-text'} style={{marginTop: '149px'}}>جميع الحقوق محفوظة</Text>
                <Text className={'policy-text'}>تايم فيوير © ٢٠١٣ - ٢٠٢٠</Text>
                <SocialMediaBar style={{marginTop: '24px'}}/>
            </div>
        </div>
    );
};

export default LeftMenu;
