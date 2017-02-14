import React from 'react';
import CSSModules from 'react-css-modules';

import RecipeSummary from './RecipeSummary';
import Avatar from './Avatar';
import styles from '../styles/recipesList.css';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);

        this.addRecipe = this.addRecipe.bind(this);
    }

    addRecipe(e) {
        e.preventDefault();
        this.props.addRecipe();
    }

    render() {
        let recipesMarkup;

        if (this.props.recipes.length) {
            let cookRecipe = this.props.cookRecipe;
            let editRecipe = this.props.editRecipe;
            let userId = this.props.userId;

            recipesMarkup = this.props.recipes.map(function (recipe) {
                return (
                    <RecipeSummary
                        key={recipe._id}
                        userId={userId}
                        recipe={recipe}
                        cookRecipe={cookRecipe}
                        editRecipe={editRecipe}
                    />
                );
            });
        } else {
            recipesMarkup = (<h2>No data</h2>);
        }

        let addButton = (
            <div styleName="addNew">
                <button onClick={this.props.addRecipe}>Add <span className="glyphicon glyphicon-plus"></span></button>
            </div>
        );

        return (
            <div styleName='wrapper'>
                <div>
                    {recipesMarkup}
                </div>
                {this.props.enableAddButton && addButton}
            </div>
        );
    }
}

export default CSSModules(RecipesList, styles);