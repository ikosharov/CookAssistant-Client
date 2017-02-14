'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Rating from 'react-rating';
import styles from '../styles/newRecipe.css';
import Base64Image from './Base64Image';

class NewRecipe extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {};

        // bind handlers to this
        this.create = this.create.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
    }

    create(e) {
        e.preventDefault();
        let recipe = this.state;
        if (this.fileInput.files && this.fileInput.files[0]) {
            recipe.image = this.fileInput.files[0];
        }
        this.props.editRecipeDetails(this.props.params.recipeId, recipe).then(() => {
            this.props.loadRecipeDetails(this.props.params.recipeId);
        }).catch(() => {
            alert('failed');
        });
    }

    handleTitleChange(e) {
        this.setState({ 'title': e.target.value });
    }

    handleIsPublicChange(e) {
        this.setState({ 'isPublic': e.target.checked });
    }

    render() {
        if (this.props.isFetching) {
            return (<h1>Loading...</h1>)
        }

        return (
            <div styleName="wrapper">
                <h1>new recipe</h1>
            </div>
        );
    }
}

export default CSSModules(NewRecipe, styles);