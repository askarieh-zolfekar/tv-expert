import React from 'react';
import './style.css';

const Text = ({style, className, children, id, onClick}) => {
    return (
        <p className={`text ${className}`} style={style} id={id} onClick={onClick}>
            {children}
        </p>
    );
};

export default Text;
