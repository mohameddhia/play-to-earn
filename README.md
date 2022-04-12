# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:
# Install dependencies
npm install --save

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## ENV file  creation 
```shell
create .env file 
PRIVATE_KEY= 
RINKEBY_URI= 
TOTAL_SUPPLY= 
ETHERSCAN_API_KEy=
```
## to deploy on Rinkeby :

npx hardhat run scrips/depooy.js --network rinkeby

## export ABI to be used on other projects
npx hardhat export-abi

## all smartcontracts documentation is in docs directory index.html
```shell
npx hardhat docgen
```