'use strict';

import React, { Component } from 'react';
import styles from '../styles';

class Avatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.avatar}>
                <h3>{this.props.username}</h3>
                <img src="http://placehold.it/100x100"
                    className="img-circle"
                    alt="User image"
                    width="100" height="100"
                    style={styles.avatarImage} />
                <br />
                <button onClick={this.props.signOut} className="btn btn-primary">Sign Out</button>
            </div>
        );
    }
}

export default Avatar;