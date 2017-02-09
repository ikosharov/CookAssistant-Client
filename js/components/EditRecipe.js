'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
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
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
    }

    save(e) {
        e.preventDefault();
        let recipe = this.state;
        if (this.fileInput.files && this.fileInput.files[0]) {
            recipe.image = this.fileInput.files[0];
        }
        this.props.editRecipeDetails(this.props.params.recipeId, recipe);
    }

    delete(e) {
        e.preventDefault();
        alert('delete');
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

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                    <label>IsPublic</label>
                    <input type="checkbox" name="isPublic" checked={this.state.isPublic} onChange={this.handleIsPublicChange} />
                </div>
                <div styleName='image-and-controls'>
                    <div styleName="image">
                        <Base64Image data={this.props.recipeDetails.image} />
                        <input type="file" name="image" ref={(fileInput) => { this.fileInput = fileInput }} />
                    </div>
                    <div styleName='controls'>
                        <div><a href="#"><span className="glyphicon glyphicon-floppy-disk" onClick={this.save}> Save</span></a></div>
                        <div><a href="#"><span className="glyphicon glyphicon-remove" onClick={this.delete}> Delete</span></a></div>
                    </div>
                </div>
                 <div styleName="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>ingredient 1</li>
                        <li>ingredient 2</li>
                        <li>ingredient 3</li>
                        <li>ingredient 4</li>
                        <li>ingredient 5</li>
                    </ul>
                </div>
                <div styleName="steps">
                    <h2>Steps</h2>
                    <ol>
                        <li>Heat the oven to 220&deg;C (or gas mark 7). Tip the flour into a large bowl along with the salt and baking powder, then mix it all up. Add the butter in, then rub the butter in with your fingers until the mix looks like fine crumbs. When that is done, stir in the sugar.</li>
                        <li>Put the milk into a jug and heat in the microwave for about 20-30 seconds. It should be warm but not hot. Add the vanilla and lemon juice to the milk and then put that to one side and but a baking tray in the oven to warm.</li>
                        <li>Make a well in the dry mix, then add the liquid and combine it quickly with a cutlery knife – it will seem pretty wet at first. Spread some flour onto the work surface and tip the dough out. Dredge the dough and your hands with a little more flour, then fold the dough over 2-3 times until it's smoother. Now pat it into a round shape about 4cm deep.</li>
                        <li>Take a 5cm cutter (Pro-tip – smooth-edged cutters tend to cut more cleanly, giving a better rise) and dip it into some flour. Plunge into the dough, then repeat until you have four scones. By this point you’ll probably need to press what's left of the dough back into a round to cut out another four.</li>
                        <li>Brush the tops with beaten egg, then place onto the hot baking tray.</li>
                        <li>Bake for 10 minutes until risen and golden on the top. Eat just warm or cold on the day of baking, generously (and I do mean generously) topped with jam and clotted cream. </li>
                        <li>If freezing, freeze once cool. Defrost, then put in a low oven (about 160&deg;C) for a few minutes to refresh.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default CSSModules(EditRecipe, styles);