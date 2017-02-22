'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Base64Image from './Base64Image';
import styles from '../styles/ShowIngredient.css';

class ShowIngredient extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <div>
                        <h3>{this.props.ingredient.title}</h3>
                    </div>
                </div>
                <div styleName="image">
                    <Base64Image data={this.props.ingredient.image} />
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

export default CSSModules(ShowIngredient, styles);