var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');
const truffleAssert = require('truffle-assertions'); // credit - see https://www.npmjs.com/package/truffle-assertions and https://github.com/rkalis/truffle-assertions
var proof = require('../../zokrates/code/square/proof');

contract('TestSolnSquareVerifier', async(accounts) => {
    beforeEach(async function () {
        let verifier = await Verifier.new({ from: accounts[0] });
        this.contract = await SolnSquareVerifier.new(verifier.address, "WaynesRealEstateToken", "WSPPROPNFT", { from: accounts[0] });
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('Test if a new solution can be added for contract - SolnSquareVerifier', async function () {
        // using example shown here to capture eventEmitted to prove the solution was added... https://github.com/rkalis/truffle-assertions
        let tx = await this.contract.AddSolution(101,accounts[1],{ from: accounts[0] });
        truffleAssert.eventEmitted(tx,"SolutionAdded");
    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
        let tx = await this.contract.Mint_WaynesRealEstateToken(914, accounts[1], proof.proof, proof.inputs, {from: accounts[0]});
        assert.equal(await this.contract.ownerOf(914), accounts[1], "Cannot verify that the token was minted for the specified owner.");
    })
})
