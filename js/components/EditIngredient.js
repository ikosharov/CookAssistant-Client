'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Base64Image from './Base64Image';
import styles from '../styles/EditIngredient.css';

class EditIngredient extends Component {
    constructor(props) {
        super(props);

        let emptyState = {
            title: '',
            image: null
        };

        this.state = (this.props.initialState) ? this.props.initialState : emptyState;

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ 'title': e.target.value });
    }

    handleImageChange(e) {
        var image = e.currentTarget.files[0];
        this.setState({ 'image': image });
    }

    handleSave(e) {
        e.preventDefault();
        if (this.props.initialState) {
            this.props.edit(this.props.recipeDetails.id, this.state).then(() => {
                this.props.sendStateToParent(this.state);
            });
        } else {
            this.props.create(this.props.recipeDetails.id, this.state).then((ingredient) => {
                this.props.sendStateToParent(ingredient);
            });
        }
    }

    render() {
        return (
            <div styleName="wrapper">
                <label>
                    title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                </label>
                <Base64Image data={this.state.image} />
                <input type="file" name="image" onChange={this.handleImageChange} />
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default CSSModules(EditIngredient, styles);