import React from 'react';

import Avatar from './Avatar';
import CSSModules from 'react-css-modules';
import styles from '../styles/authenticated.css';

class Authenticated extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName='wrapper'>
                <h1>Cook Assistant</h1>
                <div styleName='content'>
                    <div styleName='recipes-section'>
                        {this.props.children}
                    </div>
                    <div styleName='avatar-section'>
                        <Avatar
                            username={this.props.username}
                            signOut={this.props.signOut}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(Authenticated, styles);