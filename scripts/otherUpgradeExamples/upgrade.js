const { ethers, upgrades } = require("hardhat");

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    let box = await upgrades.upgradeProxy("0x0165878A594ca255338adfa4d48449f69242Eb8F", BoxV2);
    console.log("Your upgraded proxy is done!", box.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
