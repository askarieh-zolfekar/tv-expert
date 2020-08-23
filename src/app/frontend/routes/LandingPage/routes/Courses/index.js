import React from "react";
import './style.css';
import Course from "../../../../../../components/Course";

const courseList = [
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
    {text: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال', price: 299, videosNum: 24},
];
const Courses = (props) => {
    return (
        <div className={'courses'}>
            {courseList.map(course => <Course course={course}/>)}
        </div>
    );
};

export default Courses;
