import type { PlayerIdentifiers } from "./playerIdentifiers";

export interface SocketData {
    totalPlayers: number
    maxPlayers: number;
    locale?: string;
    serverDescription: string;
    serverName: string;
    tags: string;
    serverInformation: {
        status: "online" | "offline"
        artifactVersion: string;
        artifactOs: "windows" | "linux" | "unknown";
        resourceCount: number;
        txAdminVersion: string
        onesyncEnabled: string;
        enforceGameBuild: string;
        pureLevel: string;
    }
}

export interface SocketPlayer {
    id: string;
    identifiers: PlayerIdentifiers;
    name: string;
    characterName?: string;
    isStaff: boolean;
    isInVehicle: boolean;
    mugshot?: string;
    job?: {
        name?: string;
        grade?: string | number;
    }
    vehicle?: {
        model: string;
        plate: string;
    };
}

export interface SocketPlayersPositions {
    [id: string]: {
        x: number;
        y: number;
        z: number;
    };
}

export interface ServerSocket extends SocketData {
    players: Array<SocketPlayer>;
}