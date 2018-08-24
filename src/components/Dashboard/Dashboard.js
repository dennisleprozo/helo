import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import {Switch, Route} from 'react-router-dom';
// import Post from "../Post/Post";
// import {Link} from 'react-router-dom';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      userposts: "true"
    };
    this.getAllPost = this.getAllPost.bind(this);
  }

  componentDidMount() {
    this.getAllPost();
  }

  getAllPost = async function() {
    let { userId } = this.props;
    let { search, userposts } = this.state;
    let newPost = await axios.get(
      `/api/posts/user/${userId}?search=${search}&userposts=${userposts}`
    );
    console.log(newPost);
    this.setState({
      posts: newPost.data
    });
    console.log(this.state.posts);
  };

  resetSearch() {
    this.setState({
      search: ""
    });
  }

  handleInputSearch(val) {
    this.setState({
        search: val
    })
  }

  render() {
    let displayPosts = this.state.posts.map(post => {
      let { title, img, content, username, profile_pic } = post;
      return (
        <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.username}</p>
            <p>{post.profile_pic}</p>
         
          
        </div>
      );
    });
    return (
      <div>
        Dashboard
        <p>My posts</p>
        <input type="checkbox" value="My Posts" />
        <p>Search here:</p>
        <input onChange={(e) => this.handleInputSearch(e.target.value)} value={this.state.search} type="text" />
        {displayPosts}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId
  };
}

export default connect(
  mapStateToProps,
  null
)(Dashboard);



