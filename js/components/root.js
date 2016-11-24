import React from 'react';

class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Cook Assistant</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Root;