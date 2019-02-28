import React, { Component } from 'react';
import './App.css';
import Anime from 'react-anime';
import {Terminal, Ty} from "./components/Terminal/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Terminal>
          <Ty type="input">npm i -g termynal</Ty>
          <Ty type="progress"></Ty>
          <Ty>Success</Ty>
          <Ty>Tell me</Ty>
        </Terminal>
        {/* <Anime 
          delay={(e, i) => i * 100}
          scale={[0.1, 0.9]}
          loop={true}
          direction="alternate"
        >
          <div className="blue"/>
        </Anime> */}
      </div>
    );
  }
}

export default App;
