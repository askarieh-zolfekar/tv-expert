import React from 'react';
import './style.css';
import ProductFileDetails from "../ProductFileDetails";
import ProductVideoDetails from "../ProductVideoDetails";

const ProductDetails = ({product}) => {
    if (product.type === 'video') {
        return <ProductVideoDetails product={product}/>
    }
    return <ProductFileDetails product={product}/>
};

export default ProductDetails;
