const { ethers, upgrades } = require("hardhat");

async function main() {
    const MyTokenV2 = await ethers.getContractFactory("MyTokenV2");
    let myTokenV2 = await upgrades.upgradeProxy(
        "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
        MyTokenV2
    );
    console.log("Your upgraded proxy is done!", myTokenV2.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
