'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/avatar.css';
import chefImage from '../../images/chef.png';

class Avatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.username}</h3>
                <img src={chefImage} styleName='avatar-image' alt="User image" />
                <br />
                <button onClick={this.props.signOut} className="btn btn-primary">Sign Out</button>
            </div>
        );
    }
}

export default CSSModules(Avatar, styles);