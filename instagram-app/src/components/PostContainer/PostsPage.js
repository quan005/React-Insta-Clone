import React from 'react';
import Fuse from 'fuse.js';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const keys = {
  username: "username"
};

const {username} = keys;

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: [username]
};


class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }


  searchHandler = event => {

    const fuse = new Fuse(dummyData, fuseOptions);
        
    const data = event === '' ? dummyData : fuse.search(event);

    this.setState({dummyData: data});
    
    // let ogData = [];
    
    // let newData = [];

    // if (event !== '') {
    //   ogData = this.state.dummyData;

    //   newData = ogData.filter(item => {
    //     const lowerCase = item.username.toLowerCase();
    //     const filter = event.toLowerCase();

    //     if (lowerCase.includes(filter)) {
    //       return item;
    //     } return console.log("no match");
    //   });
      
    // } else if (event === '') {
    //   newData = this.state.dummyData;
    // } else {
    //   newData = this.state.dummyData;
    // }

    // this.setState({dummyData: newData});

    // console.log(this.state.dummyData);
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
          searchHandler={this.searchHandler}
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

export default PostsPage;
