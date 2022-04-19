pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EYToken is ERC20 {
    constructor() public ERC20("EY Token", "EYro") {
        _mint(msg.sender, 1000000000000000000000000);
    }
    // function transfer(adress memory sender) public {
        
    // }
}
