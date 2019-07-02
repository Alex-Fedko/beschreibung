import React,{useState} from 'react';
import { connect } from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Requests from './components/Requests'
import {history} from './redux/helpers';

import { alertActions } from './redux/action';
import { PrivateRoute } from './redux/component';

const App = (props) => {
    const dispatch  = props.dispatch;
    const alert  = props.alert;

    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });

    return (
        <Router history={history}>
            <div>
                <Route exact path="/" component={Main}/>
                <Route exact path="/requests" component={Requests}/>
                {/* <PrivateRoute exact path="/" component={Main}/>
                <PrivateRoute exact path="/requests" component={Requests}/> */}
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
            </div>
        </Router>
    );
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
