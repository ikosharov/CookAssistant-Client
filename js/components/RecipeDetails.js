'use strict';

import React, { Component } from 'react';
import styles from '../styles';
import Base64Image from './Base64Image';

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadRecipeDetails(this.props.params.recipeId, this.props.params.recipeType);
    }

    render() {
        if(this.props.isFetching) {
            return (<h1>Loading...</h1>)
        }

        return (
            <div>
                <h1>{this.props.params.recipeId}</h1>
                <h2>{this.props.params.recipeType}</h2>
                <h3>{this.props.recipeDetails.id}</h3>
                <h3>{this.props.recipeDetails.title}</h3>
                <h3>{this.props.recipeDetails.isPublic}</h3>
                <h3><Base64Image data={this.props.recipeDetails.image} /></h3>
                <h3>{this.props.recipeDetails.rating}</h3>
            </div>
        );
    }
}

export default RecipeDetails;