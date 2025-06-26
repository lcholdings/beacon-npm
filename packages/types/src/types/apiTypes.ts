
export interface serverInformation {
    locale?: string;
    serverDescription: string;
    serverName: string;
    tags: string;
    artifactVersion: string;
    artifactOs: "windows" | "linux" | "unknown";
    txAdminVersion: string
    onesyncEnabled: string;
    enforceGameBuild: string;
    pureLevel: string;

}