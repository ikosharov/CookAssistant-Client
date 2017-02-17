'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Guid from 'guid';
import Rating from 'react-rating';
import styles from '../styles/editRecipe.css';
import Base64Image from './Base64Image';

class EditRecipe extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = this.props.recipeDetails;

        // bind handlers to this
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.cook = this.cook.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.addStep = this.addStep.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
    }

    addIngredient(e) {
        e.preventDefault();
        alert('add ingredient');
    }

    addStep(e) {
        e.preventDefault();
        alert('add step');
    }

    save(e) {
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

    delete(e) {
        e.preventDefault();
        this.props.deleteRecipe(this.props.recipeDetails.id).then(() => {
            alert("recipe deleted");
            this.props.navigateToRecipes();
        }).catch(() => {
            alert("failed to delete");
        });
    }

    cook(e) {
        e.preventDefault();
        this.props.navigateToCook(this.props.recipeDetails.id);
    }

    componentDidMount() {
        this.props.loadRecipeDetails(this.props.params.recipeId);
    }

    componentWillReceiveProps(nextProps) {
        this.state = nextProps.recipeDetails;
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

        let ingredientsMarkup = this.state.ingredients.map(function (ingredient) {
            var guid = Guid.create();
            return (
                <div key={guid.value}>{ingredient}</div>
            );
        });
        let stepsMarkup = this.state.steps.map(function (step) {
            var guid = Guid.create();
            return (
                <div key={guid.value}>{step}</div>
            );
        });

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <label>
                        Title
                        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                    </label>

                    <label>IsPublic
                    <input type="checkbox" name="isPublic " checked={this.state.isPublic} onChange={this.handleIsPublicChange} />
                    </label>
                </div>
                <div styleName='image-and-controls'>
                    <div styleName="image">
                        <Base64Image data={this.props.recipeDetails.image} />
                        <input type="file" name="image" ref={(fileInput) => { this.fileInput = fileInput }} />
                    </div>
                    <div styleName='controls'>
                        <div><a href="#"><span className="glyphicon glyphicon-play-circle" onClick={this.cook}> Cook</span></a></div>
                        <div><a href="#"><span className="glyphicon glyphicon-floppy-disk" onClick={this.save}> Save</span></a></div>
                        <div><a href="#"><span className="glyphicon glyphicon-remove" onClick={this.delete}> Delete</span></a></div>
                    </div>
                </div>
                <div styleName="ingredients">
                    <h2>Ingredients</h2>
                    <div>
                        {ingredientsMarkup}
                    </div>
                    <div>
                        <button onClick={this.addIngredient}>Add <span className="glyphicon glyphicon-plus"></span></button>
                    </div>
                </div>
                <div styleName="steps">
                    <h2>Steps</h2>
                    <div>
                        {stepsMarkup}
                    </div>
                    <div>
                        <button onClick={this.addStep}>Add <span className="glyphicon glyphicon-plus"></span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(EditRecipe, styles);