import React from 'react';
import Button from './Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Logon",
      count: 0
    };
  }

  handleClick = (name) => {
    this.setState({"count: ": ++this.state.count});
  }

  render() {
    return (
      <div className="component-app">
        hello world!
        <div>
          count {this.state.count}
        </div>

        <Button 
          name="Logon"
          clickHandler={this.handleClick}
          orange 
        />
      </div>
    );
  }
}
export default App;
