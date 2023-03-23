const { ethers } = require("hardhat");

// Deploy to Goerli: npx hardhat run scripts/deploy.js --network goerli

async function main() {

  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);
  const SampleERC20 = await ethers.getContractFactory('SampleERC20');
  const sampleERC20 = await SampleERC20.deploy();
  await sampleERC20.deployed();
  console.log(`Sample ERC20 deployed to: ${sampleERC20.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });