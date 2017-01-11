import React from 'react';

import RecipeSummary from './RecipeSummary';
import Avatar from './Avatar';
import styles from '../styles';

class RecipeSummaryTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let recipesMarkup = (
            <tr>
                <td>no data</td>
                <td>no data</td>
                <td>no data</td>
                <td>no data</td>
            </tr>
        )
        if (this.props.recipes.length) {
            let cookRecipe = this.props.cookRecipe;
            let editRecipe = this.props.editRecipe;

            recipesMarkup = this.props.recipes.map(function (recipe) {
                return (
                    <RecipeSummary
                        key={recipe._id}
                        recipe={recipe}
                        cookRecipe={cookRecipe}
                        editRecipe={editRecipe}
                        />
                );
            });
        } 

        return (
            <table className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>visibility</th>
                        <th>image</th>
                        <th>rating</th>
                    </tr>
                </thead>
                <tbody>
                    {recipesMarkup}
                </tbody>
            </table>
        );
    }
}

export default RecipeSummaryTable;