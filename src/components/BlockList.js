import React, { Component } from "react";
import Blockcontent from "./Blockcontent";


function BlockList(props) {
  return (
    <div>
      <div>
      {props.blocks.map(b => <Blockcontent key={b.id} id ={b.id}timestamp = {b.timestamp} transactions = {b.transactions} ref_block_prefix={b.ref_block_prefix} action_mroot={b.action_mroot}block_extentions={b.block_extentions} block_num={b.block_num} confirmed= {b.confirmed} header_extensions= {b.header_extensions}
      new_producers={b.new_producers}  previous={b.previous} producer_signature={b.producer_signature} 
      ref_block_prefix={b.ref_block_prefix}
      schedule_version={b.schedule_version}
      transaction_mroot={b.transaction_mroot}/>)}
      </div>
     </div> 
  ); 
} 

export default BlockList;



  
         

    
      
        