pragma solidity >=0.4.21 <0.6.0;
import './ERC721Mintable.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./verifier.sol";


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is WaynesRealEstateToken {

    Verifier verifier;
    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address sender;
    }
    // TODO define an array of the above struct
    Solution[] public solutions;
    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) public uniqueSolutions;
    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint index, address sender);
    // TODO Create a function to add the solutions to the array and emit the event
    function AddSolution(uint256 index, address sender) public
    {
        bytes32 solutionKey = keccak256(abi.encodePacked(index, sender));
        Solution solution = Solution(index,sender);
        solutions.push(solution);
        uniqueSolutions[solutionKey] = solution;
        emit SolutionAdded(index, sender);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function Mint_WaynesRealEstateToken(uint256 tokenId, address tokenAddress, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) onlyOwner public
    {
        bytes32 solutionKey = keccak256(abi.encodePacked(a, b, c, input));
        require(uniqueSolutions[solutionKey].sender == address(0), 'The solution has already been submitted');
        require(verifyTx(a, b, c, input), 'The Real Estate Transaction Has Not Been Verified or Is Not Valid');
        AddSolution(a, b, c, input);
        mint(msg.sender, tokenId);
    }
}
