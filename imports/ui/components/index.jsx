import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SignIn from './sign_in.jsx';
import Dashboard from './dashboard/dashboard.jsx';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }
    /**
     * Decides route when user is authenticated or not
     */
    getChildRoute() {
        let route = this.props.children;
        const user = this.props.currentUser;

        route = user ? (!route ? <Dashboard /> : route) : <SignIn />

        return route;
    }

    render() {

        return (
            <div className="app-layout">
				{ this.getChildRoute() }
			</div>
        );
    }
}

Index.propTypes = {
    currentUser: PropTypes.object,
};
 
export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, Index);