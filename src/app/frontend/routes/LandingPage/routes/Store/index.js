import React, {useState} from "react";
import ProductList from "../../../../../../components/ProductList";
import ProductDetails from "../../../../../../components/ProductDetails";
import HindDetails from "../../../../../../assets/img/hind-details.jpg";
import './style.css';

const productList = [
    {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '299', downloads: 299, image: HindDetails},
    {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
    {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
    {type: 'pdf', text: 'دورة صناعة المحتوى مع هند الناهض', price: '300', downloads: 120},
    {type: 'word', text: 'فوكس حلقة ٥', price: '150', downloads: 100},
    {type: 'voice', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '550', downloads: 12},
];
const Store = (props) => {
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
