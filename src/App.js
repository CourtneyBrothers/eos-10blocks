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
      console.log(block10, "head block");
      // let block9 = +block10 - 1;

      // let block8 = +block9 - 1;
      // let block7 = +block8 -1;
      // let block6 = +block7 -1;
      // let block5 = +block6 -1;
      // let block4 = +block5-1;
      // let block3 = +block4-1;
      // let block2 = +block3-1;
      // let block1= +block2-1;

      // console.log(block10, block9,block8,block7,block6,block5,block4,block3,block2,block1)

      async function getRecentBlocks(headBlock){
        let data = [];
        const z = await eos.getBlock(+headBlock)
        data.push(z)
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
            timestamp: b.timestamp
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
      </div>
    );
  }
}


export default App;
