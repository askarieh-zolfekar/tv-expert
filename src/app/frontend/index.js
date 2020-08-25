import React from 'react';
import './style.css';
import AppBar from "../../components/AppBar";
import {Route, Switch} from "react-router-dom";
import {AsyncAboutUs, AsyncContactUs, AsyncCoronaTests, AsyncLandingPage} from "../../components/AsyncComponent";
import {useSelector} from "react-redux";
import LeftMenu from "../../components/WaitingListMenu";
import MainMenu from "../../components/MainMenu";

const Frontend = ({match}) => {
    const leftMenu = useSelector(({generalReducer}) => generalReducer.leftMenu);
    const mainMenu = useSelector(({generalReducer}) => generalReducer.mainMenu);

    return (
        <div className={`front-end  ${leftMenu ? 'left-menu-in' : ''}`}>
            <LeftMenu open={leftMenu}/>
            <MainMenu open={mainMenu} />
            <div className={`wrapper ${mainMenu ? 'main-menu-in' : ''}`}>
                <AppBar/>
                <div className="page-wrapper">
                    <Switch>
                        <Route
                            exact
                            path={`${match.url}about-us`}
                            component={AsyncAboutUs}
                        />
                        <Route
                            exact
                            path={`${match.url}contact-us`}
                            component={AsyncContactUs}
                        />
                        <Route
                            exact
                            path={`${match.url}corona-tests`}
                            component={AsyncCoronaTests}
                        />
                        <Route
                            path={`${match.url}`}
                            component={AsyncLandingPage}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Frontend;
