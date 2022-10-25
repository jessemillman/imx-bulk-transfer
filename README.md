# Bulk Transfer Script

This script with Bulk transfer assets based off a spreadsheet that you specify. WARNING: this action is unrecoverable, so use with caution and test in sandbox first.
 
## Prerequisites

1. Fill out the config elements in `./src/index.ts` you will need:
   1. Environment (either `sandbox`, or `mainnet`)
   2. AlchemyApiKey - can be created via https://dashboard.alchemy.com/
   3. EthPrivateKey - your wallet private key
   4. StarkPrivateKey - your L2 Stark Private Key 
2. Replace the `transfers.csv` file with your data.
3. Run `npm install` to download & install dependencies
4. Run `npm run transfer` to execute the script