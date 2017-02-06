'use strict';

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import Spinner from './Spinner';

import styles from '../styles/auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        // bind to this
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.toggleForms = this.toggleForms.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({ "username": e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ "password": e.target.value });
    }

    handleSignIn(e) {
        e.preventDefault();
        this.props.signIn(this.state.username, this.state.password);
    }

    handleSignUp(e) {
        e.preventDefault();
        this.props.signUp(this.state.username, this.state.password);
    }

    toggleForms() {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    }

    render() {
        /*let signInFailedIndicator;
        if (this.props.signInFailed) {
            signInFailedIndicator = (
                <h2 style={styles.error}>Sign in failed</h2>
            );
        }*/

        return (
            <div className={styles['login-page']}>
                {!this.props.isFetching &&
                    <div className={styles.form}>
                        <form className={styles['register-form']} onSubmit={this.handleSignUp}>
                            <input type="text"
                                placeholder="username"
                                required
                                autoFocus
                                value={this.state.username}
                                onChange={this.handleUsernameChange} />
                            <input type="password"
                                placeholder="password"
                                required
                                value={this.state.password}
                                onChange={this.handlePasswordChange} />
                            <button>sign up</button>
                            <p className={styles.message}>Already registered? <a href="#" onClick={this.toggleForms}>Sign In</a></p>
                        </form>
                        <form className={styles['login-form']} onSubmit={this.handleSignIn}>
                            <input type="text"
                                placeholder="username"
                                required
                                value={this.state.username}
                                onChange={this.handleUsernameChange} />
                            <input type="password"
                                placeholder="password"
                                required
                                value={this.state.password}
                                onChange={this.handlePasswordChange} />
                            <button>sign in</button>
                            <p className={styles.message}>Not registered? <a href="#" onClick={this.toggleForms}>Create an account</a></p>
                        </form>
                    </div>
                }
                {this.props.isFetching && <Spinner />}
            </div>
        );
    }
}

export default withRouter(Auth);
