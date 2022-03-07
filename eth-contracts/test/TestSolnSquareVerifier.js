var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');
const truffleAssert = require('truffle-assertions'); // credit - see https://www.npmjs.com/package/truffle-assertions and https://github.com/rkalis/truffle-assertions
var proof = require('../../zokrates/code/square/proof');

contract('TestSolnSquareVerifier', async(accounts) => {
    beforeEach(async function () {
        let verifier = await Verifier.new({ from: accounts[0] });
        this.contract = await SolnSquareVerifier.new(verifier.address, { from: accounts[0] });
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('Test if a new solution can be added for contract - SolnSquareVerifier', async function () {
        await this.contract.addSolution(101,accounts[0]);
        let numSolutions = await this.contract.totalSolution.call();
        assert.equal(numSolutions.toNumber(), 1, "New Solution was not added.");
    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
      await truffleAssert.reverts(await this.contract.Mint_WaynesRealEstateToken(914, accounts[0], proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs, {from: account_one}),null,"No Error Was thrown trying to mint a token when address is not contract owner");
    })
  })
