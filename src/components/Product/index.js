import React from 'react';
import './style.css';
import Text from "../Text";
import Thumbnail from "../Thumbnail";
import ProductPrice from "../ProductPrice";
import ProductDownloads from "../ProductDownloads";
import {isMobile} from 'react-device-detect';
import * as PropTypes from "prop-types";

const Product = ({product, onProductClick, style}) => {
    return (
        <div className={'product'} style={style} onClick={onProductClick}>
            <Thumbnail filetype={product.type} product={1} />
            <Text id={'product-desc'}>{product.text}</Text>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <ProductPrice price={product.price} priceSize={isMobile?'13px':'19px'} currencySize={isMobile?'9px':'14px'} style={{marginRight: '6px'}}/>
                <ProductDownloads downloads={product.downloads} textStyle={{fontSize: isMobile?'10px':'14px'}} />
            </div>
        </div>
    );
};

Product.propTypes = {
    onProductClick: PropTypes.func
};

export default Product;
