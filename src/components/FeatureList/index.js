import React from 'react';
import './style.css';
import Feature from "../Feature";

const FeatureList = (props) => {
    const features = [
        {icon: 'microphone', title: 'تجربة الصوت', status: 'جيد جدا'},
        {icon: 'camera', title: 'تجربة الكاميرا', status: 'لم نقم باختبارها'},
        {icon: 'wifi', title: 'سرعة الانترنت', status: '36 Mbps'},
    ];

    return (
        <div className={'feature-list'}>
            {features.map((feature, idx) => <Feature key={idx} {...feature} className={'feature'}/>)}
        </div>
    );
};

export default FeatureList;
