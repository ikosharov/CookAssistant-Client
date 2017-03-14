'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Guid from 'guid';
import Base64Image from './Base64Image';
import Rating from 'react-rating';
import styles from '../../css/cookRecipe.css';
import ShowIngredient from './ShowIngredient';
import ShowStep from './ShowStep';
import Spinner from './Spinner';

class CookRecipe extends Component {
    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.share = this.share.bind(this);
        this.star = this.star.bind(this);
        this.ingredientCheckedCallback = this.ingredientCheckedCallback.bind(this);
        this.handleBeginClicked = this.handleBeginClicked.bind(this);
    }

    componentDidMount() {
        this.props.loadRecipeDetails(this.props.params.recipeId);
    }

    componentWillReceiveProps(nextProps) {
        this.state = nextProps.recipeDetails;

        // once we get recipeDetails from the backend
        // attach a 'checked' property to each ingredient 
        // so that we can properly update presence/absence of begin button
        this.state.ingredients.forEach((ingredient) => {
            if (typeof ingredient.checked == 'undefined')
                ingredient.checked = false;
        });
    }

    handleBeginClicked(e) {
        e.preventDefault();

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

    ingredientCheckedCallback(e, ingredient) {
        let idx = this.state.ingredients.findIndex((i) => i._id == ingredient._id);
        this.state.ingredients[idx].checked = e.target.checked;
        this.setState({
            ingredients: this.state.ingredients
        });
    }

    render() {
        if (this.props.isFetching || !this.state || !this.state.id) {
            return (<Spinner />);
        }

        let ingredientCheckedCallback = this.ingredientCheckedCallback;

        let showEdit = (this.state.userId == this.props.userId);
        let showBegin = this.state.ingredients.findIndex((ingr) => !ingr.checked) == -1;
        let stepsFading = (showBegin) ? 'steps-visible' : 'steps-faded';

        let ingredientsMarkup = this.state.ingredients.map(function (ingredient) {
            var guid = Guid.create();
            return (
                <ShowIngredient key={guid.value}
                    ingredient={ingredient}
                    ingredientCheckedCallback={ingredientCheckedCallback} />
            );
        });
        let stepsMarkup = this.state.steps.map(function (step) {
            var guid = Guid.create();
            return (
                <ShowStep key={guid.value} step={step} />
            );
        });

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <h1>{this.state.title}</h1>
                    <Rating initialRate={this.state.rating}
                        empty={'glyphicon glyphicon-star-empty'}
                        full={'glyphicon glyphicon-star'}
                    />
                </div>
                <div styleName='image-and-controls'>
                    <div styleName="image">
                        <Base64Image data={this.state.image} />
                    </div>
                    <div styleName='controls'>
                        {showEdit && <div><a href="#" onClick={this.edit}><span className="glyphicon glyphicon-pencil"></span> Edit</a></div>}
                        <div><a href="#" onClick={this.share}><span className="glyphicon glyphicon-share"></span> Share</a></div>
                        <div><a href="#" onClick={this.star}><span className="glyphicon glyphicon-star"></span> Star</a></div>
                    </div>
                </div>
                <div styleName='ingredients'>
                    <h2>Ingredients</h2>
                    <div>
                        {ingredientsMarkup}
                    </div>
                    {this.state.allIngredientsChecked && <button>Begin</button>}
                </div>
                <div styleName="steps">
                    <h2>Steps</h2>
                    <div styleName={stepsFading}>
                        {stepsMarkup}
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(CookRecipe, styles);