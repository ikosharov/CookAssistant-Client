import React from 'react';

class Root extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default Root;