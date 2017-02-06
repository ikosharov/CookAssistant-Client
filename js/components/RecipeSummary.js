'use strict';

import React, { Component } from 'react';
import Rating from 'react-rating';
import Base64Image from './Base64Image';

class RecipeSummary extends Component {
    constructor(props) {
        super(props);

        this.cook = this.cook.bind(this);
        this.edit = this.edit.bind(this);
    }

    cook() {
        this.props.cookRecipe(this.props.recipe);
    }

    edit() {
        this.props.editRecipe(this.props.recipe);
    }

    render() {
        var isPublicMarkup = (<span>public</span>);
        if (!this.props.recipe.isPublic) {
            isPublicMarkup = (<span>private</span>);
        }

        return (
            <tr>
                <td>{this.props.recipe.title}</td>
                <td>{isPublicMarkup}</td>
                <td><Base64Image data={this.props.recipe.image} /></td>
                <td>
                    <Rating initialRate={this.props.recipe.rating}
                        empty={'glyphicon glyphicon-star-empty'}
                        full={'glyphicon glyphicon-star'}
                        />
                </td>
                <td>
                    <button type="button" onClick={this.cook}>
                        <span>Cook</span>
                    </button>
                </td>
                <td>
                    {
                        (this.props.recipe.userId == this.props.userId) &&
                        <button type="button" onClick={this.edit}>
                            <span>Edit</span>
                        </button>
                    }
                </td>
            </tr>
        );
    }
}

export default RecipeSummary;