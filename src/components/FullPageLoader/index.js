import React from 'react';
import './style.css'
import CircleLoader from "../CircleLoader";

const FullPageLoader = () => {
    return (
        <div className='full'>
            <CircleLoader />
        </div>
    );
};

export default FullPageLoader;
