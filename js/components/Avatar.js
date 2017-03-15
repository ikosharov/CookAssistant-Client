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
                <img src="/71c314caeb101d09970a6ac354a5df22.png" styleName='avatar-image' alt="User image" />
                <br />
                <button onClick={this.props.signOut} className="btn btn-primary">Sign Out</button>
            </div>
        );
    }
}

export default CSSModules(Avatar, styles);