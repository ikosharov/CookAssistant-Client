'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Base64Image from './Base64Image';
import styles from '../../css/ShowIngredient.css';

class ShowIngredient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.ingredient.checked
        }

        this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this);
    }

    handleCheckboxChanged(e) {
        this.setState({
            checked: e.target.checked
        });
        this.props.ingredientCheckedCallback(e, this.props.ingredient);
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
                        <input type="checkbox" 
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChanged} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(ShowIngredient, styles);