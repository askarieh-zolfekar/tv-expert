import React, {useEffect, useState} from "react";
import './style.css';
import HindDetails from "../../../../../../assets/img/hind-details-min.jpg";
import ProductList from "../../../../../../components/ProductList";
import ProductDetails from "../../../../../../components/ProductDetails";
import Text from "../../../../../../components/Text";
import {useDispatch} from "react-redux";
import {changeExpertActiveTab} from "../../../../../../actions";
import {TAB_COURSES_INDEX} from "../../../../../../constants";
import BoxText from "../../../../../../components/BoxText";
import {BrowserView, MobileView} from 'react-device-detect';

const courseDetails = {
    description: 'لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.',
    sections: [
        {
            label: '',
            videos: [
                {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '299', downloads: 299, image: HindDetails},
                {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
                {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
                {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
                {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
                {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
            ]
        },
        {
            label: 'صناعة محتوي تسويقي فعال',
            videos: [
                {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '299', downloads: 299, image: HindDetails},
                {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
                {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
            ]
        },
        {
            label: 'صناعة محتوي تسويقي فعال',
            videos: [
                {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '299', downloads: 299, image: HindDetails},
                {type: 'video', text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: '149', downloads: 39, image: HindDetails},
                {type: 'video', text: 'دورة صناعة المحتوى مع هند الناهض', price: '550', downloads: 12, image: HindDetails},
            ]
        },
    ]
};

const CourseDetails = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeExpertActiveTab(TAB_COURSES_INDEX, true))
    });
    const [selectedProduct, setSelectedProduct] = useState(courseDetails.sections[0].videos[0]);

    const handleVideoClick = (sectionIndex, videoIndex) => {
        setSelectedProduct(courseDetails.sections[sectionIndex].videos[videoIndex])
    };

    return (
        <div className={'course-details'}>
            <div id={'course-sections'} style={{width: '100%', maxWidth: '659.9px'}}>
                <BrowserView><BoxText id={'course-desc'} title={'وصف الكورس'}>{courseDetails.description}</BoxText></BrowserView>
                {courseDetails.sections.map((list, sectionIndex) => [
                    list.label ? (<Text className={'section-title'}>{list.label}</Text>) : '',
                    <ProductList productList={list.videos} onProductClick={(videoIndex) => handleVideoClick(sectionIndex, videoIndex)}/>
                ])}
            </div>
            <ProductDetails product={selectedProduct}/>
            <MobileView><BoxText id={'course-desc'} title={'وصف الكورس'}>{courseDetails.description}</BoxText></MobileView>
        </div>
    );
};

export default CourseDetails;
