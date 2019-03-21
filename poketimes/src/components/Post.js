import React, { Component } from 'react';
import axios from 'axios';

export default class Post extends Component {

  state = {
    post: {}
  }

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        this.setState({
          post: res.data
        });
      })
      .catch(err => { });
  }

  render() {
    const { post: { title, body } } = this.state;
    return (
      <div className='container'>
        <h4 className='center'>{title}</h4>
        <p>{body}</p>
      </div>
    )
  }
}
