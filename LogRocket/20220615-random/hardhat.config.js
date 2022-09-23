require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }require("@nomiclabs/hardhat-waffle");
  require('dotenv').config()
  
  // This is a sample Hardhat task. To learn how to create your own go to
  // https://hardhat.org/guides/create-task.html
  task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
  
    for (const account of accounts) {
      console.log(account.address);
    }
  });
  
  module.exports = {
    solidity: "0.8.4",
  
    networks: {
      "goerli": {
         url: "https://eth-goerli.g.alchemy.com/v2/Voj66iapSNDrPoyashO3l7W03HBrO6ho",
         accounts: "b75d758f65535b7f51fbf0d02628e28e65c0efb0b31b31ff9e48ea01120c55e5"
      }
    }
  
  };
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
/*
  networks: {
    "local-devnode": {
       url: "http://localhost:8545",
       accounts: { mnemonic: "test test test test test test test test test test test junk" }
    },
    "optimistic-kovan": {
       url: "https://kovan.optimism.io",
       accounts: { mnemonic: process.env.MNEMONIC }
    },
    "optimism": {
       url: "https://mainnet.optimism.io",
       accounts: { mnemonic: process.env.MNEMONIC }
    }
  }
*/
};
