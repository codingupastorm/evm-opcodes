import React, { Component } from 'react';
import logo from './logo.svg';
import {opCodes} from './OpCodes.json';
import OpCodeTable from './OpCodeTable';

class App extends Component {
  render() {
    return (
      <div>
        <div className="mui-container content-wrapper">
          <h1>EVM Opcodes</h1>
          <OpCodeTable opCodes={opCodes} />
        </div>
        <footer>
          <div className="mui-container mui--text-center">
            Made with ♥ by <a href="https://twitter.com/codingupastorm">codingupastorm</a>
          </div>
          <div className="mui-container">
            <div className="mui-row">
              <div className="mui-col-md-6">
                <h4>Resources</h4>
                <a href="http://yellowpaper.io"><p>Yellow Paper</p></a>
                <a href="https://docs.google.com/spreadsheets/d/1m89CVujrQe5LAFJ8-YAUCcNK950dUzMQPMJBxRtGCqs/edit#gid=0"><p>Gas costs spreadsheet</p></a>
              </div>
              <div className="mui-col-md-6">
                <h4>Contact me</h4>
                <a href="https://twitter.com/codingupastorm"><p>Twitter</p></a>
                <a href="https://www.linkedin.com/in/jordandrews/"><p>LinkedIn</p></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
