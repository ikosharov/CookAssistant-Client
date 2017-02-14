'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Rating from 'react-rating';
import styles from '../styles/newRecipe.css';
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
    }

    create(e) {
        e.preventDefault();
        let recipe = this.state;
        if (this.fileInput.files && this.fileInput.files[0]) {
            recipe.image = this.fileInput.files[0];
        }
        this.props.createRecipe(recipe).then(() => {
            alert('recipe created');
        }).catch(() => {
            alert('failed');
        });
    }

    handleTitleChange(e) {
        this.setState({ 'title': e.target.value });
    }

    handleIsPublicChange(e) {
        this.setState({ 'isPublic': e.target.checked });
    }

    render() {
        if (this.props.isFetching) {
            return (<h1>Loading...</h1>)
        }

        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <label>
                        Title
                        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                    </label>

                    <label>IsPublic
                    <input type="checkbox" name="isPublic " checked={this.state.isPublic} onChange={this.handleIsPublicChange} />
                    </label>
                </div>
                <div styleName='image-and-controls'>
                    <div styleName="image">
                        <Base64Image data={this.state.image} />
                        <input type="file" name="image" ref={(fileInput) => { this.fileInput = fileInput }} />
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