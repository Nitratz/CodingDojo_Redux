import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {DisplayCounterComponent} from "./components/DisplayCounterComponent";
import {IncrementCounterComponent} from "./components/IncrementCounterComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <DisplayCounterComponent counter={this.state.counter}/>
            <IncrementCounterComponent increment={this.increment}/>
          </header>
        </div>
    );
  }
}

export default App;
