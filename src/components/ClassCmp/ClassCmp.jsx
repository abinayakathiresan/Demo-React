import React, { Component, createRef } from "react";

class ClassCmp extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.testRef = createRef();
  }
  incrementCount() {
    let currentCount = this.state.count + 1;
    this.setState({ count: currentCount });
  }
  focusText() {
    this.testRef.current.focus();
  }

  render() {
    return (
      <>
        <div>hello world</div>
        <div>age:{this.props.age}</div>
        <div>Count:{this.state.count}</div>
        <div>
          <button onClick={this.incrementCount.bind(this)}>Increment</button>
        </div>
        <div>
          <input type="text" ref={this.testRef} />
        </div>
        <div>
          <button onClick={this.focusText.bind(this)}>Check Focus</button>
        </div>
      </>
    );
  }
}

export default ClassCmp;
