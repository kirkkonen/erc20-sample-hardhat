
// contracts/FunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SampleERC20 is ERC20 {

    uint256 constant initialSupply = 1000000 * (10**18);

    constructor() ERC20("Sample ERC20", "SAMPL") {
        _mint(msg.sender, initialSupply);
    }

    function mint(address account, uint256 amount) public returns (bool) {
        _mint(account, amount);
        return true;
    }
}