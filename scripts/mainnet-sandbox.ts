import { network, config, ethers } from "hardhat"

let provider
const forkingUrl = config.networks.hardhat.forking.url

const reconnectProvider = () => {
  provider = new ethers.providers.JsonRpcProvider(forkingUrl)
  provider.on('block', async (blockNumber) => {
    console.log('New Block: ' + blockNumber)
    try {
      console.log('Resetting...')
      await network.provider.request({
        method: "hardhat_reset",
        params: [{
          forking: {
            jsonRpcUrl: forkingUrl,
            blockNumber: blockNumber
          }
        }]
      })
      console.log('done')
    } catch (e) {
      console.error(e)
    }
  })
}

async function main() {
  try {
    reconnectProvider()
  } catch (e) {
    console.error(e)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()