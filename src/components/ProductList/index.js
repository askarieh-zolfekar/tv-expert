import React from 'react';
import './style.css';
import Product from "../Product";
import {isMobile} from 'react-device-detect';

const ProductList = ({productList, onProductClick, id}) => {
    return (
        <div className={'product-list'}>
            {productList.map((product, idx) => <Product key={idx} onProductClick={() => onProductClick(idx)} style={{marginLeft: isMobile?'0':'14px', marginBottom: '42px', flex: '1', flexGrow: 0}} product={product}/>)}
        </div>
    )
};

export default ProductList;
