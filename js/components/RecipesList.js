import React from 'react';
import CSSModules from 'react-css-modules';

import RecipeSummaryContainer from '../containers/RecipeSummaryContainer';
import Avatar from './Avatar';
import styles from '../../css/recipesList.css';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);

        this.addRecipe = this.addRecipe.bind(this);
    }

    addRecipe(e) {
        e.preventDefault();
        this.props.navigateToAddRecipe();
    }

    render() {
        let recipesMarkup;

        if (this.props.recipes.length) {
            recipesMarkup = this.props.recipes.map(function (recipe) {
                return (
                    <RecipeSummaryContainer
                        key={recipe._id}
                        recipe={recipe}
                    />
                );
            });
        } else {
            recipesMarkup = (<h2>No recipes</h2>);
        }

        let addButton = (
            <div styleName="addNew">
                <button className="btn btn-primary" onClick={this.addRecipe}>Add <span className="glyphicon glyphicon-plus"></span></button>
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