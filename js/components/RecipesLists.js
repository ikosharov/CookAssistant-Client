import React from 'react'
import CSSModules from 'react-css-modules'

import Spinner from './Spinner'
import RecipesListContainer from '../containers/RecipesListContainer'
import styles from '../../css/recipesLists.css'

class RecipesLists extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.loadRecipes()
    }

    render() {
        if (this.props.isFetching) {
            return (<Spinner />)
        }

        let currentUserRecipesMarkup = (
            <RecipesListContainer
                recipes={this.props.currentUserRecipes}
                enableAddButton={true}
            />)

        let anyUserRecipesMarkup = (
            <RecipesListContainer
                recipes={this.props.anyUserRecipes}
            />)

        return (
            <div styleName="wrapper">
                <h2>Your recipes:</h2>
                {currentUserRecipesMarkup}
                <h2>All recipes:</h2>
                {anyUserRecipesMarkup}
            </div>
        )
    }
}

export default CSSModules(RecipesLists, styles)