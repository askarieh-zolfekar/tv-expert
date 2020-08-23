import React from 'react';
import './style.css';
import CourseThumb from "../CourseThumb";
import VideoThumb from "../VideoThumb";
import ThumbnailDetails from "../ThumbnailDetails";
import {FILE_TYPES} from "../../constants";
import FileThumb from "../FileThumb";


const Thumbnail = (props) => {
    const {filetype, filenumber, product} = props;
    const fileMetadata = FILE_TYPES[filetype];

    return (
        <div className={`thumbnail ${product?'tproduct':''}`} {...props}>
            <CourseThumb filetype={filetype}/>
            <VideoThumb filetype={filetype}/>
            <FileThumb filetype={filetype}/>
            <ThumbnailDetails id={'details'} filemetadata={fileMetadata} filenumber={filenumber} />
        </div>
    );
};

export default Thumbnail;
