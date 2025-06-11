export interface PlayerIdentifiers {
    primaryLicense: string;
    licenses: string[];

    // Optional identifiers
    steamHex?: string;
    discordId?: string;
    fivemId?: string;
    liveId?: string;
    xboxId?: string;

    // Optional, for ban evasion primarily.
    ipAddresses?: string[];
}
