const Migrations = artifacts.require("Migrations");
const TestContract = artifacts.require("TestContract");
const ServiciosAcreditacion = artifacts.require("ServiciosAcreditacion");
const ServiciosUsuario = artifacts.require("ServiciosUsuario");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TestContract);
  deployer.deploy(ServiciosUsuario);  
  deployer.deploy(ServiciosAcreditacion);
};
