'use strict';

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

import styles from '../styles';

class SignIn extends Component {
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
        this.props.signIn(this.state.username, this.state.password);
    }

    render() {
        let loadingIndicator;
        if (this.props.isFetching) {
            loadingIndicator = (
                <div>
                    <label>Loading...</label>
                </div>);
        }
        let signInFailedIndicator;
        if (this.props.signInFailed) {
            signInFailedIndicator = (
                <h2 style={styles.errorStyle}>Sign in failed</h2>
            );
        }

        return (
            <div>
                <h1>Login</h1>
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
                    <input type="submit" value="Login" className="btn btn-primary" />
                </form>
                <div>
                    <Link to="/SignUp">go to Sign Up</Link>
                </div>
                {loadingIndicator}
                {signInFailedIndicator}
            </div>
        );
    }
}

export default withRouter(SignIn);
