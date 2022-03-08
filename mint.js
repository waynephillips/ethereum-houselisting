// credit - https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js

const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
const fs = require("fs");
const MNEMONIC = fs.readFileSync(".secret").toString().trim();
const NODE_API_KEY = "bc04374e3c944f2f8ac013a7edff049b"; //infurakey for rinkeby
const NFT_CONTRACT_ADDRESS = "";
const OWNER_ADDRESS = "";
const NUM_NFT_TOKENS = 10;
const NFT_ABI = JSON.parse(fs.readFileSync("./eth-contracts/build/contracts/SolnSquareVerifier.json"));

const proof = [
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  require('./zokrates/code/square/proof'),
  ];

async function main() {
  const provider = new HDWalletProvider( MNEMONIC,"https://rinkeby.infura.io/v3/" + NODE_API_KEY);
  const web3Instance = new web3(provider);

if (NFT_CONTRACT_ADDRESS) {
    const nftContract = new web3Instance.eth.Contract(
      NFT_ABI.abi,
      NFT_CONTRACT_ADDRESS,
      { gasLimit: "1000000" }
    );

    // WaynesRealEstateToken NFTs issued directly to the owner.
    let tokenid = 100;
    for (var i = 0; i < NUM_NFT_TOKENS; i++) {
      const result = await nftContract.methods
        .Mint_WaynesRealEstateToken(tokenid + i, OWNER_ADDRESS, proof[i].proof, proof[i].inputs)
        .send({ from: OWNER_ADDRESS });
      console.log("Minted WaynesRealEstateToken. TokenId = " + tokenid + " Transaction: " + result.transactionHash);
    }
  } else {
    console.error(
      "Add NFT_CONTRACT_ADDRESS to the environment variables"
    );
  }
}

main();
