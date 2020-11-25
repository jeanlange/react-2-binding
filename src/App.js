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

  updateCoolText = (eventThatJustHappened) => {
    // console.log(eventThatJustHappened);
    // console.log(eventThatJustHappened.target);

    // get whatever's in that input
    const value = eventThatJustHappened.target.value;
    console.log(value);

    // store that into the state
    this.setState({
      myCoolText: value
    });
  }

  render() {
    console.log('I am rendering!!');
    return (
      <div>
        <div>hello world</div>
        <input
          value={this.state.myCoolText}
          onChange={this.updateCoolText}
        />
        <h1>{this.state.myCoolText}</h1>
      </div>
    );
  }
}

export default App;
