'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Base64Image from './Base64Image';
import styles from '../../css/ShowStep.css';

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
                <div styleName="arrow">
                    <div>
                        <span className="glyphicon glyphicon-arrow-right" styleName="arrow-right"></span>
                        <span className="glyphicon glyphicon-arrow-down" styleName="arrow-down"></span>
                    </div>
                </div>
                <div styleName="image">
                    <Base64Image data={this.props.step.image} />
                </div>
            </div>
        );
    }
}

export default CSSModules(ShowStep, styles);