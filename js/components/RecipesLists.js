import React from 'react';
import CSSModules from 'react-css-modules';

import RecipeSummaryTable from './RecipeSummaryTable';
import styles from '../styles/recipesLists.css';

class RecipesLists extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadRecipes();
    }

    render() {
        if (this.props.isFetching) {
            return (<h1>Loading...</h1>)
        }

        let currentUserRecipesMarkup = (
            <RecipeSummaryTable
                userId={this.props.userId}
                recipes={this.props.currentUserRecipes}
                cookRecipe={this.props.cookRecipe}
                editRecipe={this.props.editRecipe}
            />);

        let anyUserRecipesMarkup = (
            <RecipeSummaryTable
                userId={this.props.userId}
                recipes={this.props.anyUserRecipes}
                cookRecipe={this.props.cookRecipe}
                editRecipe={this.props.editRecipe}
            />);

        return (
            <div>
                <h2>Your recipes:</h2>
                {currentUserRecipesMarkup}
                <h2>All recipes:</h2>
                {anyUserRecipesMarkup}
            </div>

        );
    }
}

export default CSSModules(RecipesLists, styles);