'use strict';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { withRouter } from 'react-router';
import Breadcrumbs from 'react-breadcrumbs';
import styles from '../styles/breadcrumb.css';

class Breadcrumb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="wrapper">
                <Breadcrumbs
                    routes={this.props.routes}
                    params={this.props.params}
                />
            </div>
        );
    }
}

export default withRouter(CSSModules(Breadcrumb, styles));