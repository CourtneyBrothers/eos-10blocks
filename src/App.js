import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import BlockList from "./components/BlockList";

let Eos = require('eosjs');
let api = require('eosjs-api')


class App extends Component {
  state = {
    blocks:[]
  }
  componentDidMount() {
    let config = {
      httpEndpoint:'https://eos.greymass.com/v1/chain'
    }
    let eos  = api(config)
    eos.getInfo((error,result)=>{
      console.log(error,"result",result)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">10 most recent eos blocks</h1>
        </header>

        <BlockList blocks={this.state.blocks} />
      </div>
    );
  }
}


export default App;
