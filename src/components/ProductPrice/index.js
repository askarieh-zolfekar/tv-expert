import React from 'react';
import './style.css';
import Text from "../Text";

const ProductPrice = ({price, priceSize, currencySize, style}) => {
    return (
        <div className={'product-price'} style={{display: 'flex', alignItems: 'center', ...style}} >
            <Text style={{fontFamily: 'LoewNextArabic-Bold',   color: 'var(--bluegrey)',  fontSize: priceSize, margin: 0}}>{price}</Text>
            <Text style={{fontFamily: 'LoewNextArabic-Medium',   color: 'var(--bluegrey)',  fontSize: currencySize, margin: '0 6px 0 0'}}>دينار كويتي</Text>
        </div>
    );
};

export default ProductPrice;
