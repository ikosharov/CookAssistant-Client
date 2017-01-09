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
        return (
            <div>
                <h1>{this.props.params.recipeId}</h1>
                <h2>{this.props.params.recipeType}</h2>
            </div>
        );
    }
}

export default RecipeDetails;