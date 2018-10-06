import React from 'react';

export default class extends React.Component {

  state = {
    name: 'bruce',
    age: 29
  }

  render() {

    const { name, age } = this.state;

    return (
      <div>
        My name is {name}, i'm {age} years old
      </div>
    )
  }
}