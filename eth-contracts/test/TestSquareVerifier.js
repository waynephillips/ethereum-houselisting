// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require('Verifier');
var proof = artifacts.require('../../zokrates/code/square/proof.json');
contract('TestSquareVerifier', async(accounts) => {
    before(async function () {
      this.verifier = await Verifier.new({from: accounts[0]});
    });
// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
    it('Test verification with correct proof', async function () {
      let result = await this.contract.verifyTx.call(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs,{from: accounts[0]});
      assert.equal(result, true, "Transaction should have verified true with correct proof.");
    })
// Test verification with incorrect proof
  it('Test verification with incorrect proof', async function () {
    // just change proof.a to proof.c to make an incorrect proof
    let incorrectProof = proof;
    incorrectProof.a = proof.c
    let result = await this.contract.verifyTx.call(incorrectProof.proof.a, incorrectProof.incorrectProof.b, incorrectProof.proof.c, incorrectProof.inputs,{from: accounts[0]});
    assert.equal(result, false, "Transaction should have verified false with incorrect proof.");
  })
})
