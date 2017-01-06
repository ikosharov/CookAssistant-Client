'use strict';

import React, { Component } from 'react';
import styles from '../styles';

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>{this.props.params.recipeId}</h1>
            </div>
        );
    }
}

export default RecipeDetails;