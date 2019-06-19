import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

const Authenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {

    return (
      <div>
        <Authenticate />
      </div>
    );
  }
}

export default App;
