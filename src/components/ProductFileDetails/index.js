import React from 'react';
import './style.css';
import Text from "../Text";
import ProductPrice from "../ProductPrice";
import ProductDownloads from "../ProductDownloads";
import ShoppingCartIcon from "../ShoppingCartIcon";
import ThumbnailDetails from "../ThumbnailDetails";
import {FILE_TYPES} from "../../constants";
import {isMobile} from 'react-device-detect';

const ProductFileDetails = ({product}) => {
    const filemetadata = FILE_TYPES[product.type];
    return (
        <div className={`product-file-details`}>
            <div id="overlay-content">
                <ThumbnailDetails big filemetadata={filemetadata} />
                <Text id={'title'}>{product.text}</Text>
                <ProductPrice price={product.price} priceSize={isMobile?'15px':'24px'} currencySize={isMobile?'10px':'16px'} />
            </div>
            <ProductDownloads big style={{position: 'absolute', left: '37.1px', bottom: '30.2px'}} downloads={product.downloads} textStyle={{fontSize: isMobile?'16px':'21px'}} />
            <div className={'buy-download'}>
                <ShoppingCartIcon />
                <Text >تحميل / شراء</Text>
            </div>
            <div style={{height: '251.9px'}}></div>
        </div>
    );
};

export default ProductFileDetails;
