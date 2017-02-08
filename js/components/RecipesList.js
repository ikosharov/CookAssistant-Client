import React from 'react';
import CSSModules from 'react-css-modules';

import RecipeSummary from './RecipeSummary';
import Avatar from './Avatar';
import styles from '../styles/recipesList.css';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
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

        return (
            <div styleName='wrapper'>
                {recipesMarkup}
            </div>
        );
    }
}

export default CSSModules(RecipesList, styles);