'use strict';

import React, { Component } from 'react';
import styles from '../styles';

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadRecipeDetails(this.props.params.recipeId, this.props.params.recipeType);
    }

    render() {
        var imgMarkup = (
            <img src='http://placehold.it/100x100'
                width='100px'
                height='100px' />
        );

        if (this.props.recipeDetails.image) {
            var imageSrc = "data:image/png;base64," + this.props.recipeDetails.image;
            var imgMarkup = (
                <img src={imageSrc}
                    width='100px'
                    height='100px' />
            );
        }

        return (
            <div>
                <h1>{this.props.params.recipeId}</h1>
                <h2>{this.props.params.recipeType}</h2>
                <h3>{this.props.recipeDetails.id}</h3>
                <h3>{this.props.recipeDetails.title}</h3>
                <h3>{this.props.recipeDetails.isPublic}</h3>
                <h3>{imgMarkup}</h3>
                <h3>{this.props.recipeDetails.rating}</h3>
            </div>
        );
    }
}

export default RecipeDetails;