import React, {Component} from 'react';
import {connect} from "react-redux";

class DisplayCounterComponent extends Component {
  render() {
    return (
      <h2>Counter is : {this.props.counter}</h2>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => {
  return {
  }
};

const DisplayCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCounterComponent);

export default DisplayCounter;
