import React from 'react';

/**
 * Hello componennt
 */
class Hello extends React.Component {
  /**
   * Construct a hello component.
   */
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  /**
   * Increment the counter.
   */
  increment() {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  }

  /**
   * Render the hello component
   * @return {React.ReactNode} The renderable component.
   */
  render() {
    const {counter} = this.state;
    return (
      <div name="hello">
        <button onClick={this.increment.bind(this)}>Click Me</button>
        <p>You&apos;ve pressed the button {counter} times.</p>
      </div>
    );
  }
}

export default Hello;
