import React, {Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.elements);
        const imageLink = event.target.elements.imageLink.value;
        const imgDesc = event.target.elements.description.value;
        const post = {
            id : Number(new Date()),
            imageLink : imageLink,
            description : imgDesc
        }
        if(imageLink && imgDesc){
            this.props.onAddPhoto(post);
        }
    }
    render(){
        return (
            <div>
                <h1>Photowall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="imageLink"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddPhoto;