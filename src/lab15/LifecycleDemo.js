// LifecycleDemo.js
import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
