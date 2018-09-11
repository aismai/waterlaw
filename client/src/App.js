import React, { Component } from "react";

import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("/api/product/brands").then(response => console.log(response));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
