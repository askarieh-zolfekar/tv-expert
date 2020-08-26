import React, {useEffect} from "react";
import BoxText from "../../../../../../components/BoxText";
import './style.css';
import SkillList from "../../../../../../components/SkillList";
import ProductDetails from "../../../../../../components/ProductDetails";
import HindOverview from "../../../../../../assets/img/hind-overview.jpg";
import {useDispatch} from "react-redux";
import {changeExpertActiveTab} from "../../../../../../actions";
import {TAB_OVERVIEW_INDEX} from "../../../../../../constants";

const overviewProduct = {
    type: 'video',
    text: 'المقدمة التعريفية لـ هند الناهض',
    price: '299',
    downloads: 299,
    image: HindOverview
};

const Overview = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeExpertActiveTab(TAB_OVERVIEW_INDEX, false))
    });
    return (
        <div className={'overview'}>
            <div className="right-section">
                <BoxText id={'overview-text'}>هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.</BoxText>
                <SkillList/>
            </div>
            <div className="left-section">
                <ProductDetails product={overviewProduct}/>
            </div>
        </div>
    )
};

export default Overview;
