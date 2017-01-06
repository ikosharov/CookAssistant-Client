'use strict';

import React, { Component } from 'react';
import Rating from 'react-rating';
import styles from '../styles';

class RecipeSummary extends Component {
    constructor(props) {
        super(props);

        this.cook = this.cook.bind(this);
    }

    cook() {
        this.props.cookRecipe(this.props.id);
    }

    render() {
        var imgMarkup = (
            <img src='http://placehold.it/100x100'
                width='100px'
                height='100px' />
        );

        if (this.props.image) {
            var imageSrc = "data:image/png;base64," + this.props.image;
            var imgMarkup = (
                <img src={imageSrc}
                    width='100px'
                    height='100px' />
            );
        }

        var isPublicMarkup = (<span className="label label-success">public</span>);
        if (!this.props.isPublic) {
            isPublicMarkup = (<span className="label label-warning">private</span>);
        }

        return (
            <tr>
                <td style={styles.recipeSummaryTd}>{this.props.title}</td>
                <td style={styles.recipeSummaryTd}>{isPublicMarkup}</td>
                <td style={styles.recipeSummaryTd}>{imgMarkup}</td>
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