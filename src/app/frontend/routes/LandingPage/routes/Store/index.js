import React, {useEffect, useState} from "react";
import ProductList from "../../../../../../components/ProductList";
import ProductDetails from "../../../../../../components/ProductDetails";
import HindDetails from "../../../../../../assets/img/hind-details-min.jpg";
import './style.css';
import {useDispatch} from "react-redux";
import {changeExpertActiveTab} from "../../../../../../actions";
import {TAB_STORE_INDEX} from "../../../../../../constants";

const productList = [
    {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '299', downloads: 299, image: HindDetails},
    {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
    {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
    {type: 'pdf', text: 'دورة صناعة المحتوى مع هند الناهض', price: '300', downloads: 120},
    {type: 'word', text: 'فوكس حلقة ٥', price: '150', downloads: 100},
    {type: 'voice', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '550', downloads: 12},
];
const Store = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeExpertActiveTab(TAB_STORE_INDEX, false))
    });
    const [selectedProduct, setSelectedProduct] = useState(productList[0]);

    const handleProductClick = (index) => {
        setSelectedProduct(productList[index])
    };

    return (
        <div className={'store'} >
            <div id={'store-products'} style={{width: '100%', maxWidth: '659.9px'}}>
                <ProductList productList={productList} onProductClick={handleProductClick}/>
            </div>
            <ProductDetails product={selectedProduct}/>
        </div>
    );
};

export default Store;
