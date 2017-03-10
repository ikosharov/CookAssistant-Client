import React from 'react';
import styles from '../../css/global.css';

class Root extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Root;