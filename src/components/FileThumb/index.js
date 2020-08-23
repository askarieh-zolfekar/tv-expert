import React from 'react';
import './style.css';

const FileThumb = ({filetype}) => {
    if (filetype !== 'pdf' && filetype !== 'pdf' && filetype !== 'voice') {
        return '';
    }
    return (
        <div className={'file-thumb'}>
        </div>
    );
};

export default FileThumb;
