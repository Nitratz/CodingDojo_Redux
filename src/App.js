import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import DisplayCounter from "./components/DisplayCounterComponent";
import IncrementCounter from "./components/IncrementCounterComponent";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <DisplayCounter />
            <IncrementCounter />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
