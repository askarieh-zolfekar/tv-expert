import React, {useState} from "react";
import ProductList from "../../../../../../components/ProductList";
import ProductDetails from "../../../../../../components/ProductDetails";
import HindDetails from '../../../../../../assets/img/hind-details-min.jpg';
import './style.css';

const Broadcast = (props) => {
    const broadCastList = [
        {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '299', downloads: 299, image: HindDetails},
        {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
        {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
        {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '300', downloads: 120, image: HindDetails},
        {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
        {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '300', downloads: 120, image: HindDetails},
        {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '299', downloads: 299, image: HindDetails},
        {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
        {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
        {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '300', downloads: 120, image: HindDetails},
        {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
        {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '300', downloads: 120, image: HindDetails},
    ];
    const [selectedBroadCast, setSelectedBroadCast] = useState(broadCastList[0]);

    const handleBroadCastClick = (index) => {
        setSelectedBroadCast(broadCastList[index])
    };
    return (
        <div className={'broadcast'}>
            <div id={'broadcast-list'} style={{width: '100%', maxWidth: '659.9px'}}>
                <ProductList productList={broadCastList} onProductClick={handleBroadCastClick}/>
            </div>
            <ProductDetails product={selectedBroadCast}/>
        </div>
    )
};

export default Broadcast;
