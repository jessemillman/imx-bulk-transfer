import { AlchemyProvider, Networkish } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import {
    createStarkSigner,
    WalletConnection,
} from "@imtbl/core-sdk";
import { Configuration } from "../types/Configuration";

export async function GenerateWalletConnection(config: Configuration): Promise<WalletConnection> {
    let ethNetwork: Networkish | undefined;

    if (config.Environment == "sandbox") {
        ethNetwork = 'goerli';
    } else if (config.Environment == "mainnet") {
        ethNetwork = 'mainnet'
    }
    const provider = new AlchemyProvider(ethNetwork, config.AlchemyApiKey);
    const l1Wallet = new Wallet(config.EthPrivateKey);
    const ethSigner = l1Wallet.connect(provider);
    const starkSigner = createStarkSigner(config.StarkPrivateKey);
    const walletConnection: WalletConnection = { ethSigner, starkSigner };
    return walletConnection;
}