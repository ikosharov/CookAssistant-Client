import React from 'react';
import styles from '../styles/global.css';

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