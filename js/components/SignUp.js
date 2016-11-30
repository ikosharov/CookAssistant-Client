'use strict';

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

import styles from '../styles';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        // bind to this
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({ "username": e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ "password": e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state.username, this.state.password);
    }

    render() {
        let loadingIndicator;
        if (this.props.isFetching) {
            loadingIndicator = (
                <div>
                    <label>Loading...</label>
                </div>);
        }
        let signUpFailedIndicator;
        if(this.props.signUpFailed) {
            signUpFailedIndicator = (
                <h2 style={styles.errorStyle}>Sign up failed</h2>
            );
        }

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <span className="input-group-addon">Username</span>
                        <input type="text"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleUsernameChange}
                            className="form-control"
                            required />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon">Password</span>
                        <input type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handlePasswordChange}
                            className="form-control"
                            required />
                    </div>
                    <br />
                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                </form>
                <div>
                    <Link to="/SignIn">go to Sign In</Link>
                </div>
                {loadingIndicator}
                {signUpFailedIndicator}
            </div>
        );
    }
}

export default withRouter(SignUp);