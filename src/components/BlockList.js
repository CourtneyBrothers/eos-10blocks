import React, { Component } from "react";
import Blockcontent from "./Blockcontent";


function BlockList(props) {
  return (
    <div>
      <div>
      {props.blocks.map(b => <Blockcontent key={b.id} headBlockTime = {b.headBlockTime} headBlockId={b.headBlockId}  />)}
      </div>
     </div> 
  ); 
} 

export default BlockList;