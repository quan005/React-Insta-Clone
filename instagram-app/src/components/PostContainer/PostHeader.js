import React from 'react';

const PostHeader = props => {

    return (
        <div className="post-header-container">
            <img className="thumbnail-img" src={props.thumbnailUrl} alt="profile thumbnail" />
            <h4>{props.username}</h4>
        </div>
    )
}

export default PostHeader;