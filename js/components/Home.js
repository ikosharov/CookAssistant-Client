import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Cook Assistant</h1>
                <h2>Hello {this.props.username}</h2>
                <button onClick={this.props.signOut}>Sign Out</button>
            </div>
        );
    }
}

export default Home;