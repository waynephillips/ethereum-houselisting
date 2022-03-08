// credit - https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js

const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
const fs = require("fs");
const MNEMONIC = fs.readFileSync(".secret").toString().trim();
const NODE_API_KEY = "bc04374e3c944f2f8ac013a7edff049b"; //infurakey for rinkeby
const NFT_CONTRACT_ADDRESS = "0x5E9A75e1a1f9A178FFe89518A5Fee37a72E47433";   //SolnSquareVerifier Contract Address
const OWNER_ADDRESS = "0xF89cAE4Be6d11a98a531cb1c7bbbBe3D321c6A96";
const NUM_NFT_TOKENS = 10;
const NFT_ABI = JSON.parse(fs.readFileSync("./eth-contracts/build/contracts/SolnSquareVerifier.json"));

const proof = [
  require('./zokrates/code/square/proof39.json'),
  require('./zokrates/code/square/proof416.json'),
  require('./zokrates/code/square/proof525.json'),
  require('./zokrates/code/square/proof636.json'),
  require('./zokrates/code/square/proof749.json'),
  require('./zokrates/code/square/proof864.json'),
  require('./zokrates/code/square/proof981.json'),
  require('./zokrates/code/square/proof10100.json'),
  require('./zokrates/code/square/proof11121.json'),
  require('./zokrates/code/square/proof12144.json'),
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
