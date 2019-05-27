import React from 'react';


const AddComment = props => {

    return (
        <form className="comment-search-container" onSubmit={props.addNewComment}>
            <input
                type="text"
                value={props.addComment}
                placeholder="Add a comment..."
                name="addComment"
                id="search"
                onChange={props.searchChangeHandler}
            />
        </form>
    )
}

export default AddComment;