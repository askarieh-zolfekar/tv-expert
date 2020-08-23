import React from 'react';
import './style.css';
import Text from "../Text";

import FullStar from '../../assets/img/ic-full-star.svg';
import EmptyStar from '../../assets/img/ic-empty-star.svg';

const Ratings = ({value}) => {
    let stars = [];
    for (let i = 0; i < 4; i++) {
        stars.push(
            <img className={'star'} src={value > i ? FullStar : EmptyStar} alt="star" key={i}/>
        )
    }

    return (
        <div className="ratings">
            <div className="stars">
                {stars}
            </div>
            <Text className={'label'}>
                تقييم
            </Text>
        </div>
    );
};

export default Ratings;
