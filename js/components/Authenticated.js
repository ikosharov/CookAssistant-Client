import React from 'react';

import Avatar from './Avatar';
import styles from '../styles/authenticated.css';

class Authenticated extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h1>Cook Assistant</h1>
                <div className={styles.content}>
                    <div className={styles['recipes-section']}>
                        {this.props.children}
                    </div>
                    <div className={styles['avatar-section']}>
                        <Avatar
                            username={this.props.username}
                            signOut={this.props.signOut}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Authenticated;