import React from 'react';

const withAuthenticate = PostsPage => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                userLoggedIn: false
            }
        }

        componentDidMount() {
            if(localStorage.getItem('user')) {
                this.setState({userLoggedIn: true});
            } else {
                this.setState({userLoggedIn: false});
            }
        }

        render() { 
            if (this.state.userLoggedIn) {
                return <PostsPage />;
            } else {
                return <Login />
            }
        }
    };

export default withAuthenticate;