const Migrations = artifacts.require("Migrations");
const TestContract = artifacts.require("TestContract");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TestContract);
};
