// contracts/MyTokenV1.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyToken.sol";

contract MyTokenV2 is MyToken {
    function getVersion() public pure returns (string memory) {
        return "Version 2";
    }
}
