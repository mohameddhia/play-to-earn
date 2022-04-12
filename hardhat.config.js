require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
const fs = require("fs");
require('hardhat-abi-exporter');
const privateKey = process.env.PRIVATE_KEY
require('hardhat-docgen');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: process.env.RINKEBY_URI,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  abiExporter: [
    {
      path: './abi/pretty',
      pretty: true,
    },
    {
      path: './abi/ugly',
      pretty: false,
    },
  ],
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  },
};

