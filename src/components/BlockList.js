import React, { Component } from "react";
import Blockcontent from "./Blockcontent";


function BlockList(props) {
  return (
    <div>
      <div>
      {props.blocks.map(b => <Blockcontent key={b.id} timestamp = {b.timestamp} />)}
      </div>
     </div> 
  ); 
} 

export default BlockList;