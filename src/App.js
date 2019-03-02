import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';
import {Window, Terminal, Line} from "./components/Terminal/";
import JType from "jatrix-react/build/index";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Box>
          <h1>
            <JType fps={10}>Hi, I'm ian fabs</JType>
          </h1>
          <h2>There's not much to see here yet, but I promise there will be soon!</h2>
          <hr style={{width: "30vw", margin: "10px 0"}}/>
          <h3>In the meantime, try installing some of my npm packages!</h3>
          <Window style={{width: "50vw"}}>
            <Terminal>
              <Line type="input">npm i --save sleyp jatrix-react rholor jraph</Line>
            </Terminal>
          </Window>
        </Box>
      </div>
    );
  }
}

export default App;
