import React from 'react';

import styles from '../styles/spinner.css';

class Spinner extends React.Component {
    render() {
        return (
            <div className={styles.loader}></div>
        );
    }
}

export default Spinner;