import React, { Component } from 'react'
import '../style/App.css'
import Weather from './weather/Weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Weather />
        
      </div>
    );
  }
}

export default App;
