import React from 'react';
import './style.css';
import Hind from "../../assets/img/hond-course2.jpg";

const CourseThumb = ({filetype}) => {
    if (filetype !== 'course') {
        return '';
    }
    return (
        <div className={'course-thumb'}>
            <img id={'image'} src={Hind} alt={'course'} />
        </div>
    );
};

export default CourseThumb;
