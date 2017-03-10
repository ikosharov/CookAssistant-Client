'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Rating from 'react-rating';
import styles from '../../css/newRecipe.css';
import Base64Image from './Base64Image';

class NewRecipe extends Component {
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            title: '',
            isPublic: false,
            image: null
        };

        // bind handlers to this
        this.create = this.create.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    create(e) {
        e.preventDefault();
        this.props.createRecipe(this.state).then((recipe) => {
            alert('recipe created');
            this.props.navigateToEdit(recipe._id);
        }).catch(() => {
            alert('failed');
        });
    }

    handleTitleChange(e) {
        this.setState({ 'title': e.target.value });
    }

    handleIsPublicChange(e) {
        e.preventDefault();
        this.setState({ 'isPublic': !this.state.isPublic });
    }

    handleImageChange(e) {
        var image = e.currentTarget.files[0];
        this.setState({ 'image': image });
    }

    render() {
        if (this.props.isFetching) {
            return (<h1>Loading...</h1>)
        }

        let visibilityMarkup = '';
        if(this.state.isPublic) {
            visibilityMarkup = (<a href="#"><span className="label label-success" onClick={this.handleIsPublicChange}>public</span></a>);
        } else {
            visibilityMarkup = (<a href="#"><span className="label label-warning" onClick={this.handleIsPublicChange}>private</span></a>);
        }

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <h3>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                        {visibilityMarkup}
                    </h3>
                </div>
                <div styleName='image-and-controls'>
                    <div styleName="image">
                        <Base64Image data={this.state.image} />
                        <input type="file" name="image" onChange={this.handleImageChange} />
                    </div>
                    <div styleName='controls'>
                        <div><a href="#"><span className="glyphicon glyphicon-floppy-disk" onClick={this.create}> Create</span></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(NewRecipe, styles);