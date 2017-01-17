import React from 'react';

import RecipeSummaryTable from './RecipeSummaryTable';

class Recipes extends React.Component {
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

export default Recipes;