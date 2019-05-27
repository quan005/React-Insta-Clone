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
      searchQuery: [],
    };
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }


  searchHandler = event => {
    let ogData = this.state.dummyData;

    ogData = ogData.filter(function(item) {
      return item.search(event.target.value.toLowerCase()) !== -1;
    });

    this.setState({searchQuery: ogData});
  }



  render() {

    const Post = this.state.dummyData.map(data => (
      <PostContainer 
        dummyData={this.state.dummyData} 
        thumbnailUrl={data.thumbnailUrl} 
        username={data.username}
        imageUrl={data.imageUrl}
        likes={data.likes}
        comments={data.comments}
        timestamp={data.timestamp}
        key={data.timestamp}
      />
    ));

    // const query = this.state.dummyData.map(data => (
      
    // ));

    return (
      <div>
        <SearchBar
          dummyData={this.state.dummyData}
          query={this.searchHandler}
        />

        <section className="post-section">
          <div className="post-collection">
            {Post}
          </div>
        </section>

      </div>
    );
  }
}

export default App;
