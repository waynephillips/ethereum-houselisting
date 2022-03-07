// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require("./Verifier");
const { proof, inputs } = require('../../zokrates/code/square/proof')

contract('TestSquareVerifier', async(accounts) => {
    before(async function () {
      this.verifier = await Verifier.new({from: accounts[0]});
    });
// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
    it('Test verification with correct proof', async function () {
      console.log(proof.inputs);
      assert.equal(await this.contract.verifyTx(proof, inputs), true, "Transaction should have verified true with correct proof.");
    })
// Test verification with incorrect proof
  it('Test verification with incorrect proof', async function () {
    // just change proof.a to proof.c to make an incorrect proof
    let invalid = proof;
    invalid.a = proof.c
    assert.equal(await this.contract.verifyTx(invalid.proof,inputs), false, "Transaction should have verified false with incorrect proof.");
  })
})
