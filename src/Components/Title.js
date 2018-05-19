import React, {Component} from 'react';

class Title extends Component {
    render(){
        return (
                <h1>{this.props.headerTitle}</h1>
                );
    }
}

export default Title;