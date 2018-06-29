import React from "react";




function Blockcontent(props) {
  return <div> 
          <div>
            <h1> block </h1>
            block id: {props.id} block timestamp: {props.timestamp} count of actions: {props.transactions}
          </div>
          <div>
            <h1>full block content</h1> 
            id: {props.id}{"\n"}
            timestamp: {props.timestamp}{"\n"}
            transactions: {props.transations}{"\n"}
            action_mroot: {props.action_mroot}{"\n"}
            block_extentions:{props.block_extentions}{"\n"}
            block_num:{props.block_num}{"\n"}
            confirmed: {props.confirmed}{"\n"}
            header_extentions: {props.header_extensions}{"\n"}
            new_producers:{props.new_producers}{"\n"}
            previous: {props.previous}{"\n"}
            producer_signature:{props.producer_signature}{"\n"}
            ref_block_prefix: {props.ref_block_prefix}{"\n"}
            schedule_version: {props.schedule_version}{"\n"}
            transaction_mroot: {props.transaction_mroot}{"\n"}

          </div>
    </div>;
}

export default Blockcontent;