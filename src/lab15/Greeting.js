import React, { Component } from 'react';
class Greeting extends Component {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        <h2>User Greeting</h2>
        <p>
          "Hello, {firstName} {lastName}!"
        </p>
      </div>
    );
  }
}
export default Greeting;