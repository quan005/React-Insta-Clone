import React from 'react'

const Comments = props => {

    return (
        <div className="comment-content-container">
            <h4>{props.username}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default Comments;