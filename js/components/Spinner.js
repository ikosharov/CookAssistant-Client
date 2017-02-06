import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/spinner.css';

class Spinner extends React.Component {
    render() {
        return (
            <div styleName='loader'></div>
        );
    }
}

export default CSSModules(Spinner, styles);