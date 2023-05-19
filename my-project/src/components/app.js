import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <>
        <h1 className="h1">
          Приложение на React
        </h1>
        <button onClick={() => this.setState({count: ++this.state.count})}>UP</button>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({count: --this.state.count})}>DOWN</button>
      </>
    )
  }
}

export default App;