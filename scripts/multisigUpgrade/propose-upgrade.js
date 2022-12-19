const { defender } = require("hardhat");

const NEW_VERSION_CONTRACT_UPGRADE = process.env.NEW_VERSION_CONTRACT_UPGRADE;
const PROXY_ADDRESS = process.env.PROXY_ADDRESS;

async function proposeUpgrade() {
    const BoxV2 = await ethers.getContractFactory(NEW_VERSION_CONTRACT_UPGRADE);
    console.log("Preparing proposal...");
    const proposal = await defender.proposeUpgrade(PROXY_ADDRESS, BoxV2);
    console.log("Upgrade proposal created at:", proposal.url);
}

proposeUpgrade()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
