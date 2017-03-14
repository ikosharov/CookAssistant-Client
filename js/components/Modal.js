'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="modal">
                <div styleName="modal-content">
                    <span styleName="close" onClick={this.props.closeAction}>&times;</span>
                    <p>{this.props.message}</p>
                </div>
            </div>
        );
    }
}

export default CSSModules(Modal, styles);