'use strict';

import React, { Component } from 'react';

class RecipeSummary extends Component {
    constructor(props) {
        super(props);
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

        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.isPublic.toString()}</td>
                <td>
                    {imgMarkup}
                </td>
            </tr>
        );
    }
}

export default RecipeSummary;