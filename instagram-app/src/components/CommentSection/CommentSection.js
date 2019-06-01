import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import Comments from './Comments';
import AddComment from './AddComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            addComment: '',
            timeStamp: props.timestamp,
        }
    }

    searchChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addNewComment = event => {
        event.preventDefault();

        const newComment = {
            username: localStorage.getItem('user'),
            text: this.state.addComment,
        };

        window.localStorage.setItem(`${localStorage.getItem('user')}-comment`, newComment);

        this.setState({comments: [...this.state.comments, newComment], addComment: ''})
    };

    render () {

        const time = moment(`${this.state.timeStamp}`, 'MMMM Do YYYY, hh:mm:ss a').fromNow();

        const userComments = this.state.comments.map((comment, index) => (
            <Comments
                comments={this.state.comments}
                username={comment.username}
                text={comment.text}
                key={index}
            />
          )); 

        return (
            <div>
                {userComments}
                <span className="post-time">{time}</span>
                <AddComment addComment={this.state.addComment} searchChangeHandler={this.searchChangeHandler} addNewComment={this.addNewComment} />
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    }))
}

export default CommentSection;