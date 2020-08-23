import React from 'react';
import './style.css';
import Text from "../Text";

const ThumbnailDetails = ({filemetadata, filenumber, id, big}) => {
    return (
        <div id={id} className={`thumbnail-details ${big?'big':''}`}>
            <div style={{display: 'flex', lignItems: 'center'}}>
                <Text id={'file-number'} style={{display: (filenumber?'inline-block':'none'), marginBottom: '4px'}}>{filenumber} فيديو</Text>
                <img id='file-icon' src={filemetadata.icon} alt={filemetadata.label} className={filemetadata.class}/>
            </div>
            <Text id={'file-type'}>{filemetadata.label}</Text>
        </div>
    );
};

export default ThumbnailDetails;
