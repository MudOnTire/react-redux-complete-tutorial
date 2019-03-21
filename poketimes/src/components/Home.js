import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    const postlist = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <div className='card-content'>
              <Link to={`/posts/${post.id}`}>
                <span className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (<div className='center'></div>);

    return (
      <div className='container'>
        <h4 className="center">Home Page</h4>
        {postlist}
      </div>
    )
  }
}
