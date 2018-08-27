'use strict';

const SHA256 = require("crypto-js/sha256");

//console.log(JSON.stringify({ x: 5, y: 6 }));
//console.log(SHA256("Message"));

module.exports = class Block{
    constructor(index, timestamp, data, previousHash = '')
    {
    
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash(); 
    
    }
    
    calculateHash()
    {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
    
}


