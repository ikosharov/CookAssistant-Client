import React from 'react';
import CSSModules from 'react-css-modules';

import RecipeSummary from './RecipeSummary';
import Avatar from './Avatar';
import styles from '../styles/recipeSummaryTable.css';

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
        }

        return (
            <div styleName='recipe-summary-table'>
                <table>
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
            </div>
        );
    }
}

export default CSSModules(RecipeSummaryTable, styles);