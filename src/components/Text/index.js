import React from 'react';
import './style.css';

const Text = ({style, className, children, id}) => {
    return (
        <p className={`text ${className}`} style={style} id={id}>
            {children}
        </p>
    );
};

export default Text;
