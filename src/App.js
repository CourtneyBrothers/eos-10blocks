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
      httpEndpoint:'https://eos.greymass.com'
    }
    let eos  = api(config)
  
    let data = []
  
    const block1 = eos.getInfo(async (error,result)=>{
      console.log(await result, "result");
      let block10 = await result.head_block_num;
      console.log(block10, "head block")

      async function getRecentBlocks(headBlock){
        let data = [];
        const z = await eos.getBlock(+headBlock)
        data.push(z)
        console.log(z.transactions,"z")
        const a = await eos.getBlock(+headBlock -1)
        data.push(a);
        const b = await eos.getBlock(+headBlock -2)
        data.push(b);
        const c = await eos.getBlock(+headBlock -3)
        data.push(c)
        const d = await eos.getBlock(+headBlock -4)
        data.push(d)
        const e = await eos.getBlock(+headBlock -5)
        data.push(e)
        const f = await eos.getBlock(+headBlock -6)
        data.push(f)
        const g = await eos.getBlock(+headBlock -7)
        data.push(g)
        const h = await eos.getBlock(+headBlock -8)
        data.push(h)
        const i = await eos.getBlock(+headBlock -9)
        data.push(i)
        return data
      }

      getRecentBlocks(block10).then(result => {
        console.log(result, "result of getRecent")
        const recentBlocks = result.map(b => {
          return {
            id: b.id,
            timestamp: b.timestamp,
            transactions: +b.transactions.length,
            action_mroot: b.action_mroot,
            block_extentions: b.block_extentions,
            block_num: b.block_num,
            confirmed: b.confirmed,
            header_extensions: b.header_extensions,
            new_producers: b.new_producers,
            previous: b.previous,
            producter: b.producer,
            producer_signature: b.producer_signature,
            ref_block_prefix: b.ref_block_prefix,
            schedule_version: b.schedule_version,
            transaction_mroot: b.transaction_mroot          
          };
        });
        const newState = Object.assign({}, this.state, {
          blocks: recentBlocks
        })
        this.setState(newState);
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">10 most recent eos blocks</h1>
        </header>
        
        <BlockList blocks={this.state.blocks} />

        <button onClick={()=>{window.location.reload();}}>get most recent</button>
      </div>
    );
  }
}


export default App;
