import "dotenv/config"
import { task } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre, runSuper) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    hardhat: {    
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/-mD5an7JQQO5UVge_cuPPyouem4VTn_S",
      },
    }
  },
  solidity: "0.7.3",
};

