import React from "react";
import BoxText from "../../../../../../components/BoxText";
import './style.css';
import SkillList from "../../../../../../components/SkillList";
import ProductDetails from "../../../../../../components/ProductDetails";
import HindOverview from "../../../../../../assets/img/hind-overview.png";

const overviewProduct = {
    type: 'video',
    text: 'المقدمة التعريفية لـ هند الناهض',
    price: '299',
    downloads: 299,
    image: HindOverview
};

const Overview = (props) => {
    return (
        <div className={'overview'}>
            <div className="right-section">
                <BoxText id={'overview-text'}/>
                <SkillList/>
            </div>
            <div className="left-section">
                <ProductDetails product={overviewProduct}/>
            </div>
        </div>
    )
};

export default Overview;
