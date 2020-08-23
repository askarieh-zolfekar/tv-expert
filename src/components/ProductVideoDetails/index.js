import React from 'react';
import './style.css';
import Text from "../Text";
import VideoBar from "../VideoBar";

const ProductVideoDetails = ({product}) => {
    return (
        <div className={`product-video-details`}>
            <div id="overlay-content">
                <Text id={'title'}>{product.text}</Text>
                <VideoBar />
            </div>
            <img src={product.image} alt="HindDetails"/>
        </div>
    );
};

export default ProductVideoDetails;
