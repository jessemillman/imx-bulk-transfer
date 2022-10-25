import { WalletConnection, ImmutableX } from "@imtbl/core-sdk";

export class Configuration {
    Environment: string;
    AlchemyApiKey: string;
    EthPrivateKey: string;
    StarkPrivateKey: string;
    WalletConnection: WalletConnection;
    Client: ImmutableX;
}