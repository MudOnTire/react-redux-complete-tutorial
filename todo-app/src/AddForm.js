import React, { Component } from 'react';

export default class AddForm extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.content);
    this.setState({
      content: ''
    });
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo</label>
          <input type='text' value={content} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
