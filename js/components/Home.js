import React from 'react';

import Avatar from './Avatar';
import RecipeSummaryTable from './RecipeSummaryTable';
import styles from '../styles';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
                <div className="col-sm-9">
                    <div className="page-header">
                        <h1>Cook Assistant</h1>
                        <h2>{this.props.userId}</h2>
                    </div>
                    <h2>Your recipes:</h2>
                    {currentUserRecipesMarkup}
                    <h2>All recipes:</h2>
                    {anyUserRecipesMarkup}
                </div>
                <div className="col-sm-3 align='center'">
                    <Avatar
                        username={this.props.username}
                        signOut={this.props.signOut}
                        />
                </div>
            </div>
        );
    }
}

export default Home;