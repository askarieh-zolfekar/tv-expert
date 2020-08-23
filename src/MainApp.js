import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import MainContainer from './containers/MainContainer';

export const store = configureStore();

const MainApp = () =>
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={MainContainer}/>
            </Switch>
        </Router>
    </Provider>


export default MainApp;
