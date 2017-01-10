'use strict';

import React, { Component } from 'react';
import Rating from 'react-rating';
import styles from '../styles';
import * as constants from '../constants';
import Base64Image from './Base64Image';

class RecipeSummary extends Component {
    constructor(props) {
        super(props);

        this.cook = this.cook.bind(this);
    }

    cook() {
        if (this.props.isPublic) {
            this.props.cookRecipe(this.props.id, constants.recipeTypes.PUBLIC);
        } else {
            this.props.cookRecipe(this.props.id, constants.recipeTypes.PERSONAL);
        }
    }

    render() {
        var isPublicMarkup = (<span className="label label-success">public</span>);
        if (!this.props.isPublic) {
            isPublicMarkup = (<span className="label label-warning">private</span>);
        }

        return (
            <tr>
                <td style={styles.recipeSummaryTd}>{this.props.title}</td>
                <td style={styles.recipeSummaryTd}>{isPublicMarkup}</td>
                <td style={styles.recipeSummaryTd}><Base64Image data={this.props.image} /></td>
                <td style={styles.recipeSummaryTd} className="ratingTD">
                    <Rating initialRate={this.props.rating}
                        empty={'glyphicon glyphicon-star-empty'}
                        full={'glyphicon glyphicon-star'}
                        />
                </td>
                <td style={styles.recipeSummaryTd}>
                    <button type="button" className="btn btn-default" onClick={this.cook}>
                        <span className="glyphicon glyphicon-play-circle"></span>Cook
                    </button>
                </td>
            </tr>
        );
    }
}

export default RecipeSummary;