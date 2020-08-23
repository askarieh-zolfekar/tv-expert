import React from 'react';
import ReactDom from 'react-dom';
import MainApp from './MainApp';
import './index.css';

const rootEl = document.getElementById('root');


ReactDom.render(
    <MainApp />,
    rootEl
);
