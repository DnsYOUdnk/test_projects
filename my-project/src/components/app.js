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
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({count: ++this.state.count})}>Click me</button>
      </>
    )
  }
}

export default App;