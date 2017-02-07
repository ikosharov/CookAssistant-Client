'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Rating from 'react-rating';

import Base64Image from './Base64Image';
import styles from '../styles/recipeSummary.css';

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
        var isPublicMarkup = (<span className="label label-success">public</span>);
        if (!this.props.recipe.isPublic) {
            isPublicMarkup = (<span className="label label-warning">private</span>);
        }

        let showEdit = (this.props.recipe.userId == this.props.userId);

        return (
            <tr>
                <td>
                    {this.props.recipe.title}
                    <br />
                    {isPublicMarkup}
                </td>
                <td styleName='image-cell'><Base64Image data={this.props.recipe.image} /></td>
                <td styleName='rating-cell'>
                    <Rating initialRate={this.props.recipe.rating}
                        empty={'glyphicon glyphicon-star-empty'}
                        full={'glyphicon glyphicon-star'}
                        />
                </td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={this.cook}>Cook</button>
                        {showEdit && <button type="button" className="btn btn-warning" onClick={this.edit}>Edit</button>}
                    </div>
                </td>
            </tr>
        );
    }
}

export default CSSModules(RecipeSummary, styles);