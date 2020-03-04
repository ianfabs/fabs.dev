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
const Row = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  width: 45vw;
`;
const Link = styled.a`
  padding: 0.25rem;
  min-width: 100px;
  border: 0.15px solid #393E41;
  border-radius: 3px;
  text-decoration: none;
  /*background-color: #F6F7EB;*/
  color: #6F7FF7;
  text-align: center;
  font-size: 1.25rem;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Box>
          <h1>
            <JType fps={10}>Hi, I'm ian fabs</JType>
          </h1>
          <h2>I like working with JavaScript, TypeScript, Kotlin, Golang, and Rust</h2>
          <hr style={{width: "60vw", margin: "10px 0"}}/>
          <Row>
            <Link href="https://github.com/ianfabs">GitHub</Link>          
            <Link href="https://gitlab.com/ianfabs">GitLab</Link>          
            <Link href="mailto:ian@fabs.dev">Email</Link>          
            <Link href="https://fabs.dev/resume.pdf">Resume</Link>          
          </Row>
          <hr style={{width: "60vw", margin: "10px 0"}}/>
          <h3>Try installing my npm packages</h3>
          <Window style={{width: "50vw"}}>
            <Terminal>
              <Line type="input">npm i --save jatrix-react jraph@3.3.0</Line>
            </Terminal>
          </Window>
          <br/>
          <h3>Or try my project scaffolding tool <pre>gig</pre></h3>
          <Window style={{width: "50vw"}}>
            <Terminal>
              <Line type="input">cargo install gig</Line>
            </Terminal>
          </Window>
        </Box>
      </div>
    );
  }
}

export default App;
