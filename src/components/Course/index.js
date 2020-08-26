import React from 'react';
import './style.css';
import Text from "../Text";
import Thumbnail from "../Thumbnail";
import {isMobile} from 'react-device-detect';

const Course = (props) => {
    const {course, onCourseClick} = props;
    return (
        <div className={'course'} {...props} onClick={onCourseClick}>
            <Thumbnail filetype={'course'} filenumber={course.videosNum} />
            <div style={{position: 'relative', minHeight: '53px'}}>
                <Text style={{fontFamily: 'LoewNextArabic-Bold',   color: '#ffffff',  fontSize: '14px', marginTop: '17px', marginBottom: '11px', marginRight:'9px', marginLeft:'3px', lineHeight: '1.43', maxWidth: '72%'}}>{course.text}</Text>
                <div style={{position: 'absolute',bottom: (isMobile?'8px':0), left: 0, display: 'flex', alignItems: 'center', marginRight: '6px'}}>
                    <Text style={{fontFamily: 'LoewNextArabic-Bold',   color: 'var(--bluegrey)',  fontSize: isMobile?'14px':'19px', margin: 0}}>{course.price}</Text>
                    <Text style={{fontFamily: 'LoewNextArabic-Medium',   color: 'var(--bluegrey)',  fontSize: isMobile?'11px':'14px', margin: '0 6px 0 0'}}>دينار كويتي</Text>
                </div>
            </div>
        </div>
    );
};

export default Course;
