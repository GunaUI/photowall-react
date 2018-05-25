import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props){
    return (    
                <div>
                    <a className="addIcon" onClick={props.onNavigate} href="#AddPhotos"></a>
                    {/*<button className="addIcon" onClick={props.onNavigate}></button>*/}
                    <div className="photo-grid">
                        {props.posts.map((post,index) => <Photo key={index} photopost={post} onRemoveImage={props.onRemovePhoto}/>)}
                    </div>
                </div>
    );
}

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}

export default PhotoWall;