import React from 'react';
import CSSModules from 'react-css-modules';

import Avatar from './Avatar';
import Breadcrumb from './Breadcrumb';
import styles from '../styles/recipesShell.css';

class RecipesShell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName='wrapper'>
                <h1>Cook Assistant</h1>
                <Breadcrumb />
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

export default CSSModules(RecipesShell, styles);