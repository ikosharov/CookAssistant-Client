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
                <h2 style={styles.error}>Sign up failed</h2>
            );
        }

        return (
            <form className="form-signup" onSubmit={this.handleSubmit}>
                <h2 className="form-signup-heading">Please sign up</h2>

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

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                {loadingIndicator}
                {signUpFailedIndicator}
                <Link to="/SignIn">go to Sign In</Link>
             </form>
        );
    }
}

export default withRouter(SignUp);