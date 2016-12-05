import React from 'react';

class Home extends React.Component {
    componentWillMount() {
        this.props.loadRecipes();
    }

    render() {
        let personalRecipesMarkup = this.props.personalRecipes.map(function (recipe) {
            return (
                <h3>{recipe.title}</h3>
            );
        });

        let publicRecipesMarkup = this.props.publicRecipes.map(function (recipe) {
            return (
                <h3>{recipe.title}</h3>
            );
        });

        return (
            <div>
                <h1>Cook Assistant</h1>
                <h2>Hello {this.props.username}</h2>
                <button onClick={this.props.signOut}>Sign Out</button>
                <h2>Your recipes:</h2>
                {personalRecipes}
                <h2>Public recipes:</h2>
                {publicRecipes}
            </div>
        );
    }
}

export default Home;