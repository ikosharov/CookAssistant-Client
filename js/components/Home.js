import React from 'react';

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
                    <h3>{recipe.title}</h3>
                );
            });
        }

        if (this.props.publicRecipes.length) {
            publicRecipesMarkup = this.props.publicRecipes.map(function (recipe) {
                return (
                    <h3>{recipe.title}</h3>
                );
            });
        }

        return (
            <div>
                <h1>Cook Assistant</h1>
                <h2>Hello {this.props.username}</h2>
                <button onClick={this.props.signOut}>Sign Out</button>
                <h2>Your recipes:</h2>
                {personalRecipesMarkup}
                <h2>Public recipes:</h2>
                {publicRecipesMarkup}
            </div>
        );
    }
}

export default Home;