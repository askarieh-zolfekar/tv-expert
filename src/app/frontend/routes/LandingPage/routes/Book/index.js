import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeExpertActiveTab} from "../../../../../../actions";
import {TAB_BOOK_INDEX} from "../../../../../../constants";

const Book = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeExpertActiveTab(TAB_BOOK_INDEX, false))
    });
    return (
        <div></div>
    )
};

export default Book;
