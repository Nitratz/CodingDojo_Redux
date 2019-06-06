import React, {Component} from 'react';

export class IncrementCounterComponent extends Component {
  render() {
    return (
      <button onClick={this.props.increment}>Increment</button>
    );
  }
}
