import React from 'react';
import PropTypes from "prop-types";
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import LikeSection from '../CommentSection/LikeSection';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {

    return (
        <article>
            <PostHeader thumbnailUrl={props.thumbnailUrl} username={props.username} />
            <PostContent imageUrl={props.imageUrl} />
            <LikeSection likes={props.likes} />
            <CommentSection comments={props.comments} timestamp={props.timestamp} />
        </article>
    );
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })),
  
     }))
};

export default PostContainer;