import React from 'react';
import PropTypes from 'prop-types';

function Photo(props){
    const post = props.photopost;
        return (
                <figure className="figure">
                    <img src={post.imageLink} alt={post.description} className="photo"/>
                    <figcaption><p>{post.description}</p></figcaption>
                    <div className="button-container">
                        <button onClick={()=>{
                            props.onRemoveImage(post)
                            }}>Remove</button>
                    </div>
                    
                </figure>
        );
}
Photo.propTypes = {
    photopost : PropTypes.object.isRequired,
    onRemoveImage : PropTypes.func.isRequired
}

export default Photo;