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
        this.props.navigateToCook(this.props.recipe._id);
    }

    edit() {
        this.props.navigateToEdit(this.props.recipe._id);
    }

    render() {
        let showEdit = (this.props.recipe.userId == this.props.userId);

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <div>
                        <h3>{this.props.recipe.title}</h3>
                        {this.props.recipe.isPublic && <span className="label label-success">public</span>}
                        {!this.props.recipe.isPublic && <span className="label label-warning">private</span>}
                    </div>
                </div>
                <div styleName="rating">
                    <Rating initialRate={this.props.recipe.rating}
                        empty={'glyphicon glyphicon-star-empty'}
                        full={'glyphicon glyphicon-star'}
                        readonly={true}
                    />
                </div>
                <div styleName="image">
                    <Base64Image data={this.props.recipe.image} />
                </div>
                <div styleName="actions">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={this.cook}>Cook</button>
                        {showEdit && <button type="button" className="btn btn-warning" onClick={this.edit}>Edit</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(RecipeSummary, styles);