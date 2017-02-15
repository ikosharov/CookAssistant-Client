'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Guid from 'guid';
import Base64Image from './Base64Image';
import Rating from 'react-rating';
import styles from '../styles/cookRecipe.css';

class CookRecipe extends Component {
    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.share = this.share.bind(this);
        this.star = this.star.bind(this);
    }

    componentDidMount() {
        this.props.loadRecipeDetails(this.props.params.recipeId);
    }

    edit(e) {
        e.preventDefault();
        this.props.navigateToEdit(this.props.recipeDetails.id);
    }

    share(e) {
        e.preventDefault();
        alert('share');
    }

    star(e) {
        e.preventDefault();
        alert('star');
    }

    render() {
        if (this.props.isFetching) {
            return (<h1>Loading...</h1>)
        }

        let showEdit = (this.props.recipeDetails.userId == this.props.userId);
        let ingredientsMarkup = this.props.recipeDetails.ingredients.map(function (ingredient) {
            var guid = Guid.create();
            return (
                <li key={guid.value}>{ingredient}</li>
            );
        });
        let stepsMarkup = this.props.recipeDetails.steps.map(function (step) {
            var guid = Guid.create();
            return (
                <li key={guid.value}>{step}</li>
            );
        });

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <h1>{this.props.recipeDetails.title}</h1>
                    <Rating initialRate={this.props.recipeDetails.rating}
                        empty={'glyphicon glyphicon-star-empty'}
                        full={'glyphicon glyphicon-star'}
                    />
                </div>
                <div styleName='image-and-controls'>
                    <div styleName="image">
                        <Base64Image data={this.props.recipeDetails.image} />
                    </div>
                    <div styleName='controls'>
                        {showEdit && <div><a href="#"><span className="glyphicon glyphicon-pencil" onClick={this.edit}> Edit</span></a></div>}
                        <div><a href="#"><span className="glyphicon glyphicon-share" onClick={this.share}> Share</span></a></div>
                        <div><a href="#"><span className="glyphicon glyphicon-star" onClick={this.star}> Star</span></a></div>
                    </div>
                </div>
                <div>
                    <h2>Ingredients</h2>
                    <ul>
                        {ingredientsMarkup}
                    </ul>
                </div>
                <div styleName="steps">
                    <h2>Steps</h2>
                    <ol>
                        {stepsMarkup}
                    </ol>
                </div>
            </div>
        );
    }
}

export default CSSModules(CookRecipe, styles);