import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

export default class AppHeaderUserMenu extends Component {
	constructor(props) {
		super(props);
	}

	userDisplayName() {
		const currentUser = this.props.user;

		if (currentUser) {
			return currentUser.emails[0].address;
		} else {
			return 'Alexander Pierce';
		}
	};

	logout() {
        Meteor.logout(function() {
            browserHistory.push('/');   
        });     
    }

	render() {

		return (
			<li className="dropdown user user-menu">
	            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
	                <img src="/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
	                <span className="hidden-xs">{ this.userDisplayName() }</span>
	            </a>

	            <ul className="dropdown-menu">

	                <li className="user-header">
	                    <img src="/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
	                    <p>
							{ this.userDisplayName() } - Admin
	                        <small>Admin since Jun. 2016</small>
	                    </p>
	                </li>

	                <li className="user-body">
	                    <div className="row">
	                        <div className="col-xs-4 text-center">
	                            <a href="#">Followers</a>
	                        </div>
	                        <div className="col-xs-4 text-center">
	                            <a href="#">Sales</a>
	                        </div>
	                        <div className="col-xs-4 text-center">
	                            <a href="#">Friends</a>
	                        </div>
	                    </div>
	                </li>

	                <li className="user-footer">
	                    <div className="pull-left">
	                        <a href="#" className="btn btn-default btn-flat">Profile</a>
	                    </div>
	                    <div className="pull-right">
	                        <a href="#" className="btn btn-default btn-flat" onClick={ this.logout }>Sign out</a>
	                    </div>
	                </li>

	            </ul>
	        </li>
		);
	}
}