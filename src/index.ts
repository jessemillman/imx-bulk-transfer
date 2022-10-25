import { Config, ImmutableX, UnsignedTransferRequest } from "@imtbl/core-sdk";
import { GenerateWalletConnection } from "./utils/WalletConnection";
import { GetEnv } from "./utils/GetEnv";
import { Configuration } from "./types/Configuration";
import { ParseCSV } from "./utils/ProcessCSV";

async function main() {
    const config = new Configuration();
    config.Client = new ImmutableX(Config.SANDBOX)
    config.Environment = 'sandbox' // or mainnet for prod
    config.AlchemyApiKey = ''; // an alchemy api key
    config.EthPrivateKey = ''; // the eth private key of the sender
    config.StarkPrivateKey = ''; // the stark private key of the sender
    config.WalletConnection = await GenerateWalletConnection(config);

    var recipients = ParseCSV();
    recipients.forEach((recipient) => {
        try {
            const transferRequest: UnsignedTransferRequest = {
                receiver: recipient.ReceiverAddress,
                type: "ERC721",
                tokenId: recipient.TokenID,
                tokenAddress: recipient.Contract,
            };
            console.log(`Transferring Token ID ${recipient.TokenID} from collection: ${recipient.Contract} to: ${recipient.ReceiverAddress}`)
            config.Client.transfer(config.WalletConnection, transferRequest).catch((err) => {
                console.error(`Failed to transfer asset: ${recipient.TokenID} with error: ${err}`);
            });
        } catch (error) {
            console.error(error);
        }
    })
}

main().catch((err) => {
    console.error(err)
    process.exit(1);
})