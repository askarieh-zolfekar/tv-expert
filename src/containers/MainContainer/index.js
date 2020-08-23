import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import FrontendApp from '../../app/frontend/index';
import FullPageLoader from '../../components/FullPageLoader';
import './index.css';

function MainContainer({loading}) {
    return (
        <div className="app-main">
            {loading && <FullPageLoader />}
            <Switch>
                <Route path='/' component={FrontendApp}/>
                {/*<Route component={AsyncError404}/>*/}
            </Switch>
        </div>
    );
}


// map state to props
const mapStateToProps = ({ generalReducer }) => {
	const { loading } = generalReducer;
	return { loading };
};

export default connect(mapStateToProps)(MainContainer);
