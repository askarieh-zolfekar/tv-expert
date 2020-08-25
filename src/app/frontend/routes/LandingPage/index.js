import React from 'react';
import './style.css';
import ProfileBar from "../../../../components/ProfileBar";
import ProfileNavBar from "../../../../components/ProfileNavBar";
import {AsyncBroadcast, AsyncCourses, AsyncOverview, AsyncStore, AsyncBook} from "../../../../components/AsyncComponent";
import {Route, Switch} from "react-router-dom";
import ExpertOverview from "../../../../components/ExpertOverview";
import {MobileView} from 'react-device-detect';
import TabList from "../../../../components/TabList";
import {NAV_BAR_TABS} from "../../../../constants";
import FloatingButton from "../../../../components/FloatingButton";

const LandingPage = ({match}) => {
    return (
        <div className={'landing-page'}>
            <ProfileBar match={match}/>
            <ProfileNavBar/>
            <MobileView>
                <ExpertOverview />
                <TabList tabs={NAV_BAR_TABS} style={{marginTop: '47px'}}/>
                <FloatingButton>حجز عيادة (20 دينار كويتي)</FloatingButton>
            </MobileView>
            <div id={'landing-content'}>
                <Switch>
                    <Route
                        exact
                        path={`${match.url}overview`}
                        component={AsyncOverview}
                    />
                    <Route
                        exact
                        path={`${match.url}broadcast`}
                        component={AsyncBroadcast}
                    />
                    <Route
                        exact
                        path={`${match.url}courses`}
                        component={AsyncCourses}
                    />
                    <Route
                        exact
                        path={`${match.url}store`}
                        component={AsyncStore}
                    />
                    <Route
                        exact
                        path={`${match.url}book`}
                        component={AsyncBook}
                    />
                    <Route
                        component={AsyncOverview}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default LandingPage;
