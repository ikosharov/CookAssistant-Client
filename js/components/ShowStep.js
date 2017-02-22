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
                <div styleName="title">
                    <div>
                        <h3>{this.props.step.title}</h3>
                    </div>
                </div>
                <div styleName="image">
                    <Base64Image data={this.props.step.image} />
                </div>
                <div styleName="checks">
                    <div>
                        <span className="glyphicon glyphicon-ok"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(ShowStep, styles);