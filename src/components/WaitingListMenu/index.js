import React from 'react';
import './style.css';
import Text from "../Text";
import WaitUserList from "../WaitUserList";
import SocialMediaBar from "../SocialMediaBar";
import {BrowserView} from 'react-device-detect';
import {useDispatch} from "react-redux";
import {toggleLeftMenu} from "../../actions";

const waitUsers = [
    {name:'مستخدم 1', lastActive: '15 دقيقة'},
    {name:'مستخدم 2', lastActive: '12 دقيقة'},
    {name:'مستخدم 3', lastActive: '11 دقيقة'},
    {name:'مالك محمد', lastActive: '10 دقيقة', current:1},
    {name:'مستخدم 4', lastActive: '8 دقيقة'},
    {name:'مستخدم 5', lastActive: '5 دقيقة'},
    {name:'مستخدم 6', lastActive: '2 دقيقة'},
];

const WaitingListMenu = ({open}) => {
    const dispatch = useDispatch();
    return (
        <div className={`left-menu ${open?'in':''}`}>
            <div id="content">
                <Text id={'wait-list-title'} onClick={() => dispatch(toggleLeftMenu())}>14 قائمة الانتظار</Text>
                <div id="wait-list-line" className={'desktop'}></div>
                <WaitUserList users={waitUsers} />
                <BrowserView>
                    <Text className={'policy-text'} style={{marginTop: '149px'}}>جميع الحقوق محفوظة</Text>
                    <Text className={'policy-text'}>تايم فيوير © ٢٠١٣ - ٢٠٢٠</Text>
                    <SocialMediaBar style={{marginTop: '24px'}}/>
                </BrowserView>
            </div>
        </div>
    );
};

export default WaitingListMenu;
