import React from 'react';

const PostContent = props => {

    return (
        <div className="post-content-container">
            <div className="content-img-container">
                <img className="content-img" src={props.imageUrl} alt="Post Content" />
            </div>
        </div>
    )
}

export default PostContent;