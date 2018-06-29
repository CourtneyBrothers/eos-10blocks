let Eos = require('eosjs');
let api = require('eosjs-api')

let config = {
  httpEndpoint:'https://eos.greymass.com'
}

let eos  = api(config);

export default eos.getInfo(async (error,result)=>{
  try {
  await result.head_block_num;
  } catch (err){
    alert(err)
  }
  return result.head_block_num
})