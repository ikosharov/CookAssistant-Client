import React from 'react';

import Avatar from './Avatar';

class Authenticated extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="col-sm-9">
                    <div className="page-header">
                        <h1>Cook Assistant</h1>
                        <h2>{this.props.username}</h2>
                        <h2>{this.props.userId}</h2>
                        {this.props.children}
                    </div>
                </div>
                <div className="col-sm-3 align='center'">
                    <Avatar
                        username={this.props.username}
                        signOut={this.props.signOut}
                        />
                </div>
            </div>
        );
    }
}

export default Authenticated;