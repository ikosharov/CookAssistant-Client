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
                <label>{this.props.ingredient.title}</label>
                <Base64Image data={this.props.ingredient.image} />
            </div>
        );
    }
}

export default CSSModules(ShowIngredient, styles);