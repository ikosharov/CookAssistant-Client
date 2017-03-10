'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Spinner from './Spinner';

import styles from '../../css/auth.css';

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
        return (
            <div styleName='login-page'>
                {!this.props.isFetching &&
                    <div styleName='form'>
                        <form styleName='register-form' onSubmit={this.handleSignUp}>
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
                            <p styleName='message'>Already registered? <a href="#" onClick={this.toggleForms}>Sign In</a></p>
                        </form>
                        <form onSubmit={this.handleSignIn}>
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
                            <p styleName='message'>Not registered? <a href="#" onClick={this.toggleForms}>Create an account</a></p>
                        </form>
                    </div>
                }
                {this.props.isFetching && <Spinner />}
            </div>
        );
    }
}

export default CSSModules(Auth, styles);
