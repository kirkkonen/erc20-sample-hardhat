const { ethers } = require("hardhat");

// Transfers a hardcoded amount to a hardcoded account and logs its balance, on Goerli network.
// Test command: npx hardhat run --network goerli scripts/transfer.js

async function main() {

    const contractAddress = '0x0Ed6328BE1Ba65007bcf19e1209283F8cAd7D8B7';
    const account = '0x90C10F9abb753cA860F3BF3D67C9b8d23deB9044';
    const amount = 10;

    const sampleERC20 = await ethers.getContractAt('SampleERC20', contractAddress);

    console.log('Transferring tokens...')
    await sampleERC20.transfer(account, amount);
    
    const balanceOf = await sampleERC20.balanceOf(account);
    console.log(`SampleERC20 balance of ${account} is ${balanceOf}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });