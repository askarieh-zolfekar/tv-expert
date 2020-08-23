import React from 'react';
import './style.css';
import Text from "../Text";
import IcDownload from "../../assets/img/ic-download.svg";
import IcDownloadBig from "../../assets/img/ic-download-big.svg";

const ProductDownloads = ({downloads, textStyle, style, big}) => {
    return (
        <div className={'product-downloads'} style={{display: 'flex', alignItems: 'center', ...style}}>
            <Text style={{color: 'var(--bluegrey)', margin: '0 0 0 6.3px', ...textStyle}}>{downloads}</Text>
            <img src={big ? IcDownloadBig : IcDownload} alt="IcDownload" style={{marginLeft: '3px'}}/>
        </div>
    );
};

export default ProductDownloads;
