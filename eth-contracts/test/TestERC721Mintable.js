var WaynesRealEstateToken = artifacts.require('WaynesRealEstateToken');
const truffleAssert = require('truffle-assertions'); // credit - see https://www.npmjs.com/package/truffle-assertions and https://github.com/rkalis/truffle-assertions

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await WaynesRealEstateToken.new("WaynesRealEstateToken", "WSPPROPNFT",{from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(accounts[0], 101, {from:account_one});
            await this.contract.mint(accounts[1], 102, {from:account_one});
            await this.contract.mint(accounts[2], 103, {from:account_one});
            await this.contract.mint(accounts[3], 104, {from:account_one});
            await this.contract.mint(accounts[4], 105, {from:account_one});
        })

        it('should return total supply', async function () {
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 5, "Total Supply Result is Wrong. Expecting 5.");
        })

        it('should get token balance', async function () {
            let tokenBalance = await this.contract.balanceOf.call(accounts[4]);
            assert.equal(tokenBalance, 1, "Token balance is incorrect. Account[4] should have 1.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenURI = await this.contract.tokenURI(101);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/101", "Token URI is incorrect. Expecting to see 101");
        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(accounts[0], accounts[1], 101, { from: accounts[0] });
            assert.equal(await this.contract.ownerOf(101), accounts[1],"Expected Owner of Token 101 is Incorrect. Should be Accounts[1].");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await WaynesRealEstateToken.new("WaynesRealEstateToken", "WSPPROPNFT",{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
              await truffleAssert.reverts(this.contract.mint(account_one, 601, { from:account_two }),null,"No Error Was thrown trying to mint a token when address is not contract owner.");
        })

        it('should return contract owner', async function () {
            assert.equal(await this.contract.getOwner.call(), account_one,"Incorrect Contract Owner. Should Be Accounts[0]");
        })

    });
})
