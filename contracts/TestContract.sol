// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract TestContract {

    struct TestUser {
        string name;
        uint age;
        uint id;
    }

    uint lastUser;

    mapping(uint => TestUser) usuarios;

    constructor () public {
        usuarios[1] = TestUser({name: "testName", age: 21, id: 1});
        lastUser = 1;
    }

    function getTestName() public view returns(string memory) {
        return usuarios[1].name;
    }

}