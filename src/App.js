import React from 'react';
import {csv} from 'd3-request';
import katakana from './katakana.csv';
import './App.css';

class App extends React.Component {
  var
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      en: "loading en...",
      ja: "loading ja..."
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    var en1 = "";
    var ja1 = "";
    //Below, this must be an arrow function, or else "this" in this.setState is not recognized. The arrow function opens up the function into larger scope. 
    csv(katakana, (error, data) => {
      if (error) throw error;

      var randomNumber = (Math.floor(Math.random()*data.length)); 
      en1 = data[randomNumber].en;
      ja1 = data[randomNumber].ja;

      this.setState({ en: en1}, () => console.log(this.state));
      this.setState({ ja: ja1}, () => console.log(this.state));
    })
  };

    
  

  render() {
    return (
      <div className="App">
        <h1>workin'</h1>
        <h3>{this.state.en}/{this.state.ja}</h3>
        <button>Reroll</button> 
      </div>
    );
  }
}

export default App;
