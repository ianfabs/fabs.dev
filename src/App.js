import React, { Component } from 'react';
import './App.css';
import Anime from 'react-anime';
import {Terminal, Ty} from "./components/Terminal/";
import JType from "./components/JType/";

const typingName = <JType
name="Ian Fabs"
fps={40}
caps={true}
done={()=>{alert('done')}}
/>;

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Terminal>
          <Ty type="input">npm i -g termynal</Ty>
          <Ty type="progress"/>
          <Ty>Success</Ty>
        </Terminal> */}
        {/* <Anime 
          delay={(e, i) => i * 100}
          scale={[0.1, 0.9]}
          loop={true}
          direction="alternate"
        >
          <div className="blue"/>
        </Anime> */}
        <h1>
          {typingName}
        </h1>
      </div>
    );
  }
}

export default App;
