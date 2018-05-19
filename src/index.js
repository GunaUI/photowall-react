import React, {Component} from 'react';
import ReactDom from 'react-dom'

class List extends Component {
    render(){
        return (
                <ol>
                    {this.props.tasks.map((task , index) => <li key={index} >{task}</li>)}
                </ol>
                );
    }
}
class Title extends Component {
    render(){
        return (
                <h1>{this.props.headerTitle}</h1>
                );
    }
}

class Main extends Component {
    render(){
        return (
                <div>
                    <Title headerTitle={"Todo List"}/>
                    <List tasks={['1Scub bugs',"2Resolve the existing issues","3Make a report"]}/>
                    <List tasks={['4Scub bugs',"5Resolve the existing issues","6Make a report"]}/>
                </div>
                );
    }
}
ReactDom.render(<Main/>, document.getElementById('root'));