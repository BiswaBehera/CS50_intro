import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.increaseCount.bind(this)}>increase</button>
        </div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
