import React, {Component} from 'react';
import Title from "./Title";
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
//import { removePost } from '../redux/actions'


class Main extends Component {
    constructor(){
        super();
    }
    // componentDidMount(prevProps,prevState){

    // }
    // componentWillUpdate(prevProps , prevState){
    //     console.log('componentWillUpdate - Component rerendered');
    //     console.log('componentWillUpdate - prevProps',prevProps.posts);
    //     console.log('componentWillUpdate - prevState',prevState.posts);
        
    // }

    render(){
        console.log('render');
        return (
                    <div>
                        <h1>
                            <Link to="/">Photowall</Link>
                        </h1>
                        <Route exact path="/" render={()=>(
                            <div>
                                <Photowall {...this.props} />
                            </div>
                        )}/>
                        <Route path="/AddPhoto" render={() => (
                            <AddPhoto {...this.props}/>
                        )}/>
                    </div>
                );
    }
}


export default Main;