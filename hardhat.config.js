require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");
const { setTimeout } = require('timers/promises');

const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const goerliPrivateKey = process.env.GOERLI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [goerliPrivateKey]
    }
  }
};

// Runs a task to get the total supply of a token deployed to a given address
// Localhost: npx hardhat totalsupply --network localhost --address 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
// Goerli: npx hardhat totalsupply --network goerli --address 0x0Ed6328BE1Ba65007bcf19e1209283F8cAd7D8B7


task("totalsupply", "Gets a token's total supply")
  .addParam("address", "Address of the contract")
  .setAction(async (taskArgs) => {
    
    const contractAddress = taskArgs.address;
    const sampleERC20 = await ethers.getContractAt('SampleERC20', contractAddress);
    
    const totalSupply = await sampleERC20.totalSupply();
    console.log(`Total supply of the token is ${totalSupply}`);

});

// Runs a task to transfer a certain amount of tokens to a given account and logs the balance of this account
// Localhost: npx hardhat transfer --network localhost --account 0xcd3B766CCDd6AE721141F452C550Ca635964ce71 --amount 10 --address 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
// Goerli: npx hardhat transfer --network goerli --account 0x90C10F9abb753cA860F3BF3D67C9b8d23deB9044 --amount 10 --address 0x0Ed6328BE1Ba65007bcf19e1209283F8cAd7D8B7

task("transfer", "Transfers a given amount of tokens to a given address")
  .addParam("account", "Address to transfer tokens to")
  .addParam("amount", "Amount of tokens to transfer")
  .addParam("address", "Address the contract is deployed to")
  .setAction(async (taskArgs) => {

    const contractAddress = taskArgs.address;
    const account = taskArgs.account;
    const amount = taskArgs.amount

    const sampleERC20 = await ethers.getContractAt('SampleERC20', contractAddress);

    console.log('Transferring tokens...')
    await sampleERC20.transfer(account, amount);

    const balanceOf = await sampleERC20.balanceOf(account);
    console.log(`SampleERC20 balance of ${account} is ${balanceOf}`);

  });

// Runs a task to mint a certain amount of tokens for a given account, logs its balance and increased total supply
// Localhost: npx hardhat mint --network localhost --account 0xcd3B766CCDd6AE721141F452C550Ca635964ce71 --amount 10 --address 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
// Goerli: npx hardhat mint --network goerli --account 0x90C10F9abb753cA860F3BF3D67C9b8d23deB9044 --amount 10 --address 0x0Ed6328BE1Ba65007bcf19e1209283F8cAd7D8B7

task("mint", "Transfers a given amount of tokens for a given address")
  .addParam("account", "Address to mint tokens for")
  .addParam("amount", "Amount of tokens to mint")
  .addParam("address", "Address the contract is deployed to")
  .setAction(async (taskArgs) => {
    
    const contractAddress = taskArgs.address;
    const account = taskArgs.account;
    const amount = taskArgs.amount

    const sampleERC20 = await ethers.getContractAt('SampleERC20', contractAddress);

    console.log('Minting tokens...')
    await sampleERC20.mint(account, amount);

    const balanceOf = await sampleERC20.balanceOf(account);
    console.log(`SampleERC20 balance of ${account} is ${balanceOf}`)

    console.log('Waiting for total supply to update...')
    await setTimeout(15000);
    const totalSupply = await sampleERC20.totalSupply();
    console.log(`Total supply increased to ${totalSupply}`);

});