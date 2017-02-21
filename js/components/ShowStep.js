'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Base64Image from './Base64Image';
import styles from '../styles/ShowStep.css';

class ShowStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="wrapper">
                <label>{this.props.step.title}</label>
                <Base64Image data={this.props.step.image} />
            </div>
        );
    }
}

export default CSSModules(ShowStep, styles);