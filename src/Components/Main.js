import React, {Component} from 'react';
import List from "./List";
import Title from "./Title";

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

export default Main;