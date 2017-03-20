'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Base64Image from './Base64Image';
import styles from '../../css/editIngredient.css';

class EditIngredient extends Component {
    constructor(props) {
        super(props);

        let emptyState = {
            title: '',
            image: null
        };

        this.state = (this.props.initialState) ? this.props.initialState : emptyState;

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ 'title': e.target.value });
    }

    handleImageChange(e) {
        var image = e.currentTarget.files[0];
        this.setState({ 'image': image });
    }

    handleSave(e) {
        e.preventDefault();
        if (this.state.image && this.state.image.size > 500 * 1000) {
            alert('please choose file smaller than 500kb');
            return;
        }
        if (this.props.initialState) {
            this.props.edit(this.props.recipeDetails.id, this.state).then(() => {
                this.props.sendStateToParent(this.state);
            });
        } else {
            this.props.create(this.props.recipeDetails.id, this.state).then((ingredient) => {
                this.props.sendStateToParent(ingredient);
            });
        }
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.delete(this.props.recipeDetails.id, this.state._id).then(() => {
            this.props.sendStateToParent(this.state);
        });
    }

    render() {
        return (
            <div styleName="wrapper">
                <div styleName="title">
                    <div>
                        <h3>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} styleName='stylishInput' />
                        </h3>
                    </div>
                </div>
                <div styleName="image">
                    <div>
                        <Base64Image data={this.state.image} />
                        <input type="file" name="image" onChange={this.handleImageChange} />
                    </div>
                </div>
                <div styleName="actions">
                    <div>
                        <button className="btn btn-success" onClick={this.handleSave}>Save <span className="glyphicon glyphicon-floppy-disk"></span></button>
                        <button className="btn btn-danger" onClick={this.handleDelete}>Delete <span className="glyphicon glyphicon-remove"></span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(EditIngredient, styles);