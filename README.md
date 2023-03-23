# Sample ERC20 Hardhat Project

This project is a test implementation of ERC20 token contract.

The contract is deployed to Goerli at 0x0Ed6328BE1Ba65007bcf19e1209283F8cAd7D8B7

### Scripts

Transfers a hardcoded amount of tokens to a hardcoded address:

```shell
npx hardhat run --network goerli scripts/transfer.js
```

Node shortcut:

```shell
npm run transfer
```

Mints a hardcoded amount of tokens for a hardcoded address:

```shell
npx hardhat run --network goerli scripts/mint.js
```

Node shortcut:
```shell
npm run mint
```

### Hardhat tasks

Transfers a given amount of tokens to a given address, calling a contract on a given address:

```shell
npx hardhat transfer --network goerli --account 0x90C10F9abb753cA860F3BF3D67C9b8d23deB9044 --amount 10 --address 0x0Ed6328BE1Ba65007bcf19e1209283F8cAd7D8B7
```

Mints a given amount of tokens for a given address, calling a contract on a given address

```shell
npx hardhat mint --network goerli --account 0x90C10F9abb753cA860F3BF3D67C9b8d23deB9044 --amount 10 --address 0x0Ed6328BE1Ba65007bcf19e1209283F8cAd7D8B7
```
