import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'buy mario kart' }
    ]
  }

  deleteTodo = (id) => {
    this.setState((state) => {
      return {
        todos: state.todos.filter(todo => todo.id !== id)
      }
    });
  }

  addTodo = (todo) => {
    this.setState((state) => {
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), content: todo }
        ]
      }
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
