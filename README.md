# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.
At present, property titles are often paper-based, creating opportunities for errors and fraud. Title professionals find defects in 25% of all titles during the transaction process, according to the American Land Title Association.

Any identified defect makes it illegal to transfer a property title to a buyer until it is rectified. This means property owners often incur high legal fees to ensure authenticity and accuracy of their property titles.

Moreover, title fraud poses a risk to homeowners worldwide. US losses associated with title fraud reportedly averaged around $103,000 per case in 2015, compelling many property buyers to purchase title insurance.

These title management issues could potentially be mitigated by using blockchain technology to build immutable digital records of land titles and using blockchain for transparent transactions. This approach could simplify property title management, making it more transparent and helping to reduce the risk of title fraud and the need for additional insurance.

Some companies and governments around the globe have already implemented blockchain technology for the title management process.

Ghanaian blockchain company Bitland has been working on a solution for Ghana, where it is estimated that almost 80% of land is unregistered, according to Forbes. Those that possess unregistered land find it more difficult to prove legal ownership, increasing their exposure to the risk of land seizures or property theft.

Bitland is seeking to create secure digital public records of ownership on its blockchain platform, with the aim of protecting land owners from title fraud. Bitland has expanded to operate in 7 African nations, India, and is also working with Native Americans in the US.

In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property. We covered the basics on zk-SNARKs in Privacy lesson in Course 5

Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase.

## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

## How to Test
- `cd eth-contracts`
- `truffle compile`
- Run Ganache UI (http://127.0.0.1:8545/)
- Run Truffle Tests:
     - Test #1: TestERC721Mintable.js
     `truffle test ./test/TestERC721Mintable.js`
     - Test #2: TestSolnSquareVerifier.js
     `truffle test ./test/TestSolnSquareVerifier.js`
     - Test #3: TestSquareVerifier.js
     `truffle test ./test/TestSquareVerifier.js`

## Contract ABIs
- Verifier: `./eth-contracts/build/contracts/Verifier.json`
- SolnSquareVerifier: `./eth-contracts/build/contracts/SolnSquareVerifier.json`

## Rinkeby Contract Deployment Information

### SquareVerifier
- transaction hash:    [0x69dd3a9cd70d8f993e7e920bedae65a16139f23d6b81dfa074ef01dbf28b2689](https://rinkeby.etherscan.io/tx/0x69dd3a9cd70d8f993e7e920bedae65a16139f23d6b81dfa074ef01dbf28b2689)
- contract address:    [0x52060d40bF4D55Fca12eb00720e61Ad2E8BE9757](https://rinkeby.etherscan.io/address/0x52060d40bF4D55Fca12eb00720e61Ad2E8BE9757)
- account:             0xF89cAE4Be6d11a98a531cb1c7bbbBe3D321c6A96

### SolnSquareVerifier
- transaction hash:    [0x4b6666402d5ffa1d92ab36960bad6313bb51d23aa0af5605d0cb00eeffb8d196](https://rinkeby.etherscan.io/tx/0x4b6666402d5ffa1d92ab36960bad6313bb51d23aa0af5605d0cb00eeffb8d196)
- contract address:    [0x5E9A75e1a1f9A178FFe89518A5Fee37a72E47433](https://rinkeby.etherscan.io/address/0x5E9A75e1a1f9A178FFe89518A5Fee37a72E47433)
- account:             0xF89cAE4Be6d11a98a531cb1c7bbbBe3D321c6A96

### Minted tokens (WaynesRealEstateToken)

- Address Minted. Transaction: [0xd6e5abcaae3bc58fdf9320154abcc7ae8453ec27fe27afde4f6899de455600e8](https://rinkeby.etherscan.io/tx/0xd6e5abcaae3bc58fdf9320154abcc7ae8453ec27fe27afde4f6899de455600e8)
- Address Minted. Transaction: 0x3d990ffaefd9f489d93477fb69f8d7870626ada9a7c265993f1aac104beba96c
- Address Minted. Transaction: 0x26a9a26aa29c76500f8b1aa57d539b0c7cebe5280948a964eeb2c765dc4bef66
- Address Minted. Transaction: [0x3bf649b3a48514ed315c5a019e0093f030ca336d236587a8f44758993ed579c1](https://rinkeby.etherscan.io/tx/0x3bf649b3a48514ed315c5a019e0093f030ca336d236587a8f44758993ed579c1)
- Address Minted. Transaction: 0x442943b380eec7fbb8f4472c11de489c8b48f02475a7f7386ceb6cdb2d3b5087
- Address Minted. Transaction: 0x91726d52dca1c7eb8b2c6ce39a96c82cab45eb5e2760a37e0e2ce3aae553d84b
- Address Minted. Transaction: 0x84ae8dcaf5f9ad9c59c897c2f6e136986e0f73315f55cf63564fe30e2f72cbfb
- Address Minted. Transaction: 0x5c237fab10ee7443d8104a320ec516138fadb0cf76b14c7508f8c785d8637d4e
- Address Minted. Transaction: 0x4b35b2698435c92e7d1e8d113be9ce01a3333b4d108141b70e30c3cf64512321
- Address Minted. Transaction: 0x9e8289daa37de5cac1e060ff8a6c93df2bb1f6e5db916f4be7784dc31005aed6

## OpenSea

## Items for sale
- TokenId 110  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/110
- TokenId 109  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/109
- TokenId 108  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/108
- TokenId 107  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/107
- TokenId 106  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/106
- TokenId 105  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/105
- TokenId 104  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/104
- TokenId 103  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/103
- TokenId 102  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/102
- TokenId 100  https://testnets.opensea.io/assets/0x5e9a75e1a1f9a178ffe89518a5fee37a72e47433/100
