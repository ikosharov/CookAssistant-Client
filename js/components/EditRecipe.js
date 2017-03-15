'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Guid from 'guid';
import Rating from 'react-rating';
import styles from '../../css/editRecipe.css';
import Base64Image from './Base64Image';
import Spinner from './Spinner';
import EditIngredientContainer from '../containers/EditIngredientContainer';
import EditStepContainer from '../containers/EditStepContainer';

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
        this.receiveIngredientState = this.receiveIngredientState.bind(this);
        this.receiveStepState = this.receiveStepState.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    addIngredient(e) {
        e.preventDefault();
        this.state.ingredients.push(null);
        this.setState({ 'ingredients': this.state.ingredients });
    }

    addStep(e) {
        e.preventDefault();
        this.state.steps.push(null);
        this.setState({ 'steps': this.state.steps });
    }

    save(e) {
        e.preventDefault();
        if (this.state.image && this.state.image.size > 500 * 1000) {
            alert("please choose file smaller than 500kb");
            return;
        }
        this.props.editRecipeDetails(this.props.params.recipeId, this.state).then(() => {
            this.props.loadRecipeDetails(this.props.params.recipeId);
        }).catch(() => {
            alert('failed');
        });
    }

    delete(e) {
        e.preventDefault();
        this.props.deleteRecipe(this.props.params.recipeId).then(() => {
            alert("recipe deleted");
            this.props.navigateToRecipes();
        }).catch(() => {
            alert("failed to delete");
        });
    }

    cook(e) {
        e.preventDefault();
        this.props.navigateToCook(this.props.params.recipeId);
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
        e.preventDefault();
        this.setState({ 'isPublic': !this.state.isPublic });
    }

    handleImageChange(e) {
        var image = e.currentTarget.files[0];
        this.setState({ 'image': image });
    }

    receiveIngredientState(ingredientState) {
        this.props.loadRecipeDetails(this.props.params.recipeId);
    }

    receiveStepState(stepState) {
        this.props.loadRecipeDetails(this.props.params.recipeId);
    }

    render() {
        if (this.props.isFetching) {
            return (<Spinner />);
        }

        let receiveIngredientState = this.receiveIngredientState;
        let receiveStepState = this.receiveStepState;

        let ingredientsMarkup = this.state.ingredients.map(function (ingredient) {
            var guid = Guid.create();
            return (
                <EditIngredientContainer key={guid.value}
                    initialState={ingredient}
                    sendStateToParent={receiveIngredientState} />
            );
        });
        let stepsMarkup = this.state.steps.map(function (step) {
            var guid = Guid.create();
            return (
                <EditStepContainer key={guid.value}
                    initialState={step}
                    sendStateToParent={receiveStepState} />
            );
        });

        let visibilityMarkup = '';
        if (this.state.isPublic) {
            visibilityMarkup = (<a href="#"><span className="label label-success" onClick={this.handleIsPublicChange}>public</span></a>);
        } else {
            visibilityMarkup = (<a href="#"><span className="label label-warning" onClick={this.handleIsPublicChange}>private</span></a>);
        }

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <h3>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                        {visibilityMarkup}
                    </h3>
                </div>
                <div styleName='image-and-controls'>
                    <div styleName="image">
                        <Base64Image data={this.props.recipeDetails.image} />
                        <input type="file" name="image" onChange={this.handleImageChange} />
                    </div>
                    <div styleName='controls'>
                        <div><a href="#" onClick={this.cook}><span className="glyphicon glyphicon-play-circle"></span> Cook</a></div>
                        <div><a href="#" onClick={this.save}><span className="glyphicon glyphicon-floppy-disk"></span> Save</a></div>
                        <div><a href="#" onClick={this.delete}><span className="glyphicon glyphicon-remove"></span> Delete</a></div>
                    </div>
                </div>
                <div styleName="ingredients">
                    <h2>Ingredients</h2>
                    <div>
                        {ingredientsMarkup}
                    </div>
                    <div styleName="addNew">
                        <button className="btn btn-primary" onClick={this.addIngredient}>Add <span className="glyphicon glyphicon-plus"></span></button>
                    </div>
                </div>
                <div styleName="steps">
                    <h2>Steps</h2>
                    <div>
                        {stepsMarkup}
                    </div>
                    <div styleName="addNew">
                        <button className="btn btn-primary" onClick={this.addStep}>Add <span className="glyphicon glyphicon-plus"></span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(EditRecipe, styles);