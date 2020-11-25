import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    // create some state
    this.state = {
      myCoolText: ""
    };
  }
  render() {
    console.log('hello!');
    return (
      <div>
        <div>hello world</div>
        <input value={this.state.myCoolText}></input>
        <h1>{this.state.myCoolText}</h1>
      </div>
    );
  }
}

export default App;
