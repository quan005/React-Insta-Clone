import React from 'react';
import Icons from '../SearchBar/instagram-logos.png';

const likeIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-156px -212px',
    height: '24px',
    width: '24px',
    display: 'block'
};

const activeLikeIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-130px -212px',
    height: '24px',
    width: '24px',
    display: 'block'
};

const commentIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-27px -177px',
    height: '24px',
    width: '24px',
    display: 'block'
};

const shareIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-1px -263px',
    height: '24px',
    width: '24px',
    display: 'block'
};

class LikeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes,
            activeLike: false,
        }
    }

    likePost = event => {
        event.preventDefault();
        this.setState({likes: this.state.likes + 1, activeLike: true});
        
    };

    render() {

        return (
            <div className="like-container">
                <section className="like-content-container">
                    <span className="like-icon" style={this.state.activeLike === true ? activeLikeIcon : likeIcon} onClick={this.likePost}></span>
                    <span className="comment-icon" style={commentIcon}></span>
                    <span className="share-icon" style={shareIcon}></span>
                </section>
    
                <section className="like-content-container">
                    <h4>{this.state.likes} likes</h4>
                </section>
            </div>
        )
    }
}

export default LikeSection;