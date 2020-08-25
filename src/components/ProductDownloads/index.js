import React from 'react';
import './style.css';
import Text from "../Text";
import IcDownload from "../../assets/img/ic-download.svg";
import IcDownloadBig from "../../assets/img/ic-download-big.svg";
import {isMobile} from 'react-device-detect';

const ProductDownloads = ({downloads, textStyle, style, big}) => {
    const widthOfIcon = isMobile?(big ? '21.3px' : '13.7px'):'unset';
    return (
        <div className={'product-downloads'} style={{display: 'flex', alignItems: 'center', ...style}}>
            <Text style={{color: 'var(--bluegrey)', margin: '0 0 0 6.3px', ...textStyle}}>{downloads}</Text>
            <img src={big ? IcDownloadBig : IcDownload} alt="IcDownload" style={{marginLeft: '3px', width: widthOfIcon }}/>
        </div>
    );
};

export default ProductDownloads;
