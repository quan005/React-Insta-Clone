import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
    };
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }

  render() {

    const post = this.state.dummyData.map(data => (
      <PostContainer dummyData={data} thumbnailUrl={data.thumbnailUrl} username={data.username} />
    ));

    return (
      <div>
        <SearchBar />

        <section className="post-section">
          <div className="post-collection">
            {post}
          </div>
        </section>

      </div>
    );
  }
}

export default App;
