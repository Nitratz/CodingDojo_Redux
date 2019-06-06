import React, {Component} from 'react';

export class DisplayCounterComponent extends Component {
  render() {
    return (
      <h2>Counter is : {this.props.counter}</h2>
    );
  }
}
