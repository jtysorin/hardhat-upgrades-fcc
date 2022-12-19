const { getProxyFactory } = require("@openzeppelin/hardhat-upgrades/dist/utils");
const { assert } = require("chai");
const { network, ethers, upgrades } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Upgrading tests", function () {
          let MyToken, MyTokenV2;
          beforeEach(async () => {
              MyToken = await ethers.getContractFactory("MyToken");
              MyTokenV2 = await ethers.getContractFactory("MyTokenV2");
          });

          it.only("can deploy and upgrade a contract", async function () {
              const myToken = await upgrades.deployProxy(MyToken, { kind: "uups" });
              assert.equal(await myToken.name(), "MyToken");

              const myTokenV2 = await upgrades.upgradeProxy(myToken, MyTokenV2);
              assert.equal(await myTokenV2.getVersion(), "Version 2");
          });
      });
