import React, {useEffect} from "react";
import './style.css';
import Course from "../../../../../../components/Course";
import {useDispatch} from "react-redux";
import {changeExpertActiveTab} from "../../../../../../actions";
import {TAB_COURSES_INDEX} from "../../../../../../constants";

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
const handleClickCourse = (props, idx) => {
    props.history.push(`${props.match.url}/${idx}`)
};
const Courses = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeExpertActiveTab(TAB_COURSES_INDEX, false))
    });
    return (
        <div className={'courses'}>
            {courseList.map((course, idx) => <Course key={idx} course={course} onCourseClick={() => handleClickCourse(props, idx)}/>)}
        </div>
    );
};

export default Courses;
