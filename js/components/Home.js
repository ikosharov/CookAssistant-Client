import React from 'react';

import RecipeSummary from './RecipeSummary';
import styles from '../styles';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadRecipes();
    }

    render() {
        let personalRecipesMarkup = (<label>Loading...</label>);
        let publicRecipesMarkup = (<label>Loading...</label>);

        if (this.props.personalRecipes.length) {
            personalRecipesMarkup = this.props.personalRecipes.map(function (recipe) {
                return (
                    <RecipeSummary 
                        key={recipe._id}
                        title={recipe.title}
                        isPublic={recipe.isPublic}
                        image={recipe.image}
                    />
                );
            });
        }

        if (this.props.publicRecipes.length) {
            publicRecipesMarkup = this.props.publicRecipes.map(function (recipe) {
                return (
                    <RecipeSummary 
                        key={recipe._id}
                        title={recipe.title}
                        isPublic={recipe.isPublic}
                        image={recipe.image}
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
                    <table class="table table-striped table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Private Recipes</th>
                            </tr>
                        </thead>
                        {personalRecipesMarkup}
                    </table>
                    <h2>Public recipes:</h2>
                    <table class="table table-striped table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Public Recipes</th>
                            </tr>
                        </thead>
                        {publicRecipesMarkup}
                    </table>
                </div>
                <div className="col-sm-3 align='center'">
                    <div style={styles.avatar}>
                        <h3>{this.props.username}</h3>
                        <img src="http://placehold.it/100x100" 
                            className="img-circle" 
                            alt="User image" 
                            width="100" height="100"
                            style={styles.avatarImage} /> 
                        <button onClick={this.props.signOut} className="btn btn-primary">Sign Out</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;