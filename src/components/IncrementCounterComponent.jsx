import React, {Component} from 'react';
import {INC_ACTION} from "../counterLogic";
import {connect} from "react-redux";

export class IncrementCounterComponent extends Component {

  render() {
    return (
      <button onClick={this.props.onIncrement}>Increment</button>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(INC_ACTION)
  }
};

const IncrementCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncrementCounterComponent);

export default IncrementCounter;



