'use strict';

import React, { Component } from 'react';
import styles from '../styles';
import Base64Image from './Base64Image';

class EditRecipe extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = this.props.recipeDetails;

        // bind handlers to this
        this.save = this.save.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
    }

    save() {
        let recipe = this.state;
        if(this.fileInput.files && this.fileInput.files[0]) {
            recipe.image = this.fileInput.files[0];
        }
        this.props.editRecipeDetails(this.props.params.recipeId, this.props.params.recipeType, recipe);
    }

    componentDidMount() {
        this.props.loadRecipeDetails(this.props.params.recipeId, this.props.params.recipeType);
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

        return (
            <div>
                <h1>Edit Recipe</h1>
                <h2>{this.props.params.recipeId}</h2>
                <h2>{this.props.params.recipeType}</h2>
                <h3>{this.props.recipeDetails.id}</h3>
                <h3>{this.props.recipeDetails.title}</h3>
                <h3>{this.props.recipeDetails.isPublic}</h3>
                <h3><Base64Image data={this.props.recipeDetails.image} /></h3>
                <h3>{this.props.recipeDetails.rating}</h3>

                <label>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                <label>IsPublic</label>
                <input type="checkbox" name="isPublic" checked={this.state.isPublic} onChange={this.handleIsPublicChange} />
                <label>Image</label>
                <input type="file" name="image" ref={(fileInput) => { this.fileInput = fileInput } } />
                <button onClick={this.save}>Save</button>
            </div>
        );
    }
}

export default EditRecipe;