var Block = require('./Block.js');
//import Block from './Block.js'
class BlockChain{
    
    //creating blockchain with new node in constructor
    constructor(){
        
        this.chain =  [this.createGenesisBlock()];
    }
        
    createGenesisBlock(){
        
        return new Block(0, "08/26/2018", "GCoin block", "0"); 
    }
    
    //addding newBlocks to chain
    getLatestBlock(){
        
        return this.chain[this.chain.length - 1];
    }
    
    addBlock(newBlock){
    
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
        
           
    }
    
    //validating chain
    isChainValid(){
        for(let i = 0; i<this.chain.length; i++){
            
            const currentBlock= this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash != currentBlock.calculateHash()){
                return false;
            }
        
            if (currentBlock.previousHash != previousBlock.hash){
                return false;
            }
            
            return true;    
        }
        
        
       
}
}
        let gCoin  = new BlockChain();
        gCoin.addBlock(new Block(1, "08/27/2018", {amount : 3} ));
        gCoin.addBlock(new Block(2, "08/27/2018", {amount : 9} ));  
        console.log(gCoin.chain);