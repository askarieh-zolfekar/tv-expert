import React from 'react';
import IcShoppingCart from '../../assets/img/ic-shopping-cart.svg';
import BgShoppingCart from '../../assets/img/bg-shopping-cart.svg';
import './style.css';

const ShoppingCartIcon = () => {
    return (
        <div className={'shopping-cart-icon'} >
            <img src={BgShoppingCart} alt={'bg-shopping-cart'} />
            <img src={IcShoppingCart} alt={'ic-shopping-cart'} />
        </div>
    );
};

export default ShoppingCartIcon;
