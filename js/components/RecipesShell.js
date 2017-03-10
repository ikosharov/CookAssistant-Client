import React from 'react';
import CSSModules from 'react-css-modules';

import Breadcrumb from './Breadcrumb';
import AvatarContainer from '../containers/AvatarContainer';
import styles from '../../css/recipesShell.css';

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
                        <AvatarContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(RecipesShell, styles);