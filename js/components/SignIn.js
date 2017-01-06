'use strict';

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import GoogleLogin from 'react-google-login';

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
        this.responseGoogle = this.responseGoogle.bind(this);
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

    responseGoogle(response) {
        this.props.googleSignIn(response);
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
                <h2 style={styles.error}>Sign in failed</h2>
            );
        }

        return (
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading">Please sign in</h2>

                <label htmlFor="inputUsername" className="sr-only">Username</label>
                <input type="text" 
                    id="inputUsername" 
                    className="form-control" 
                    placeholder="Username" 
                    required 
                    autoFocus
                    value={this.state.username}
                    onChange={this.handleUsernameChange} />

                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" 
                    required 
                    value={this.state.password}
                    onChange={this.handlePasswordChange} />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                {loadingIndicator}
                {signInFailedIndicator}
                <Link to="SignUp">go to Sign Up</Link>
             </form>
        );
    }
}

export default withRouter(SignIn);
