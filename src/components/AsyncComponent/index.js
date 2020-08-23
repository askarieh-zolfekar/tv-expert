/**
 * AsyncComponent
 * Code Splitting Component
 */
import React from 'react';
import Loadable from 'react-loadable';

import CircleLazyLoader from '../CircleLazyLoader';

const AsyncLandingPage = Loadable({
    loader: () => import("../../app/frontend/routes/LandingPage"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncAboutUs = Loadable({
    loader: () => import("../../app/frontend/routes/AboutUs"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncContactUs = Loadable({
    loader: () => import("../../app/frontend/routes/ContactUs"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncCoronaTests = Loadable({
    loader: () => import("../../app/frontend/routes/CoronaTests"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncBroadcast = Loadable({
    loader: () => import("../../app/frontend/routes/LandingPage/routes/Broadcast"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncCourses = Loadable({
    loader: () => import("../../app/frontend/routes/LandingPage/routes/Courses"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncOverview = Loadable({
    loader: () => import("../../app/frontend/routes/LandingPage/routes/Overview"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncStore = Loadable({
    loader: () => import("../../app/frontend/routes/LandingPage/routes/Store"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});
const AsyncBook = Loadable({
    loader: () => import("../../app/frontend/routes/LandingPage/routes/Book"),
    loading: () => <CircleLazyLoader/>,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    }
});

export {
    AsyncLandingPage,
    AsyncAboutUs,
    AsyncContactUs,
    AsyncCoronaTests,
    AsyncBroadcast,
    AsyncCourses,
    AsyncOverview,
    AsyncStore,
    AsyncBook,
};
