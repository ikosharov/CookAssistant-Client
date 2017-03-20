import React from 'react';
import CSSModules from 'react-css-modules';

import RecipeSummaryContainer from '../containers/RecipeSummaryContainer';
import Avatar from './Avatar';
import Spinner from './Spinner';
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

        if (this.props.isFetching) {
            return (<Spinner />);
        }

        let addButton = (
            <div styleName="addNew">
                <button className="btn btn-primary" onClick={this.addRecipe}>Add <span className="glyphicon glyphicon-plus"></span></button>
            </div>
        );

        if (!this.props.isFetching && !this.props.recipes.length) {
            return (
            <div>
                <h3>No recipes found</h3>
                {this.props.enableAddButton && addButton}
            </div>);
        }

        let recipesMarkup = this.props.recipes.map(function (recipe) {
            return (
                <RecipeSummaryContainer
                    key={recipe._id}
                    recipe={recipe}
                />
            );
        });

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