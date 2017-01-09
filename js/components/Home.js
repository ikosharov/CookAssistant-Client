import React from 'react';

import RecipeSummary from './RecipeSummary';
import Avatar from './Avatar';
import styles from '../styles';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadRecipes();
    }

    render() {
        if(this.props.isFetching) {
            return (<h1>Loading...</h1>)
        }

        let personalRecipesMarkup = "";
        let publicRecipesMarkup = "";

        let cookRecipe = this.props.cookRecipe;

        if (this.props.personalRecipes.length) {
            personalRecipesMarkup = this.props.personalRecipes.map(function (recipe) {
                return (
                    <RecipeSummary
                        key={recipe._id}
                        id={recipe._id}
                        title={recipe.title}
                        isPublic={recipe.isPublic}
                        image={recipe.image}
                        rating={recipe.rating}
                        cookRecipe={cookRecipe}
                        />
                );
            });
        }

        if (this.props.publicRecipes.length) {
            publicRecipesMarkup = this.props.publicRecipes.map(function (recipe) {
                return (
                    <RecipeSummary
                        key={recipe._id}
                        id={recipe._id}
                        title={recipe.title}
                        isPublic={recipe.isPublic}
                        image={recipe.image}
                        rating={recipe.rating}
                        cookRecipe={cookRecipe}
                        />
                );
            });
        }

        return (
            <div>
                <div className="col-sm-9">
                    <div className="page-header">
                        <h1>Cook Assistant</h1>
                    </div>
                    <h2>Your recipes:</h2>
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
                            {personalRecipesMarkup}
                        </tbody>
                    </table>
                    <h2>Public recipes:</h2>
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
                            {publicRecipesMarkup}
                        </tbody>
                    </table>
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