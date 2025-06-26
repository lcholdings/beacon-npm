import type { PlayerIdentifiers } from "./playerIdentifiers";

export interface LiveServerInformation {
    totalPlayers: number
    maxPlayers: number;
    resourceCount: number;
    ramusage: number;
    cpuusage: number;
}

export interface LivePlayerData {
    id: string;
    identifiers: PlayerIdentifiers;
    name: string;
    characterName?: string;
    isStaff: boolean;
    mugshot?: string;
    job?: {
        name?: string;
        grade?: string | number;
    }
}

export interface LivePlayersPositions {
    [id: string]: {
        x: number;
        y: number;
        z: number;
        isInVehicle: boolean;
        vehicle?: {
            model: string;
            plate: string;
        };
    };
}

export interface LivePlayersData {
    players: Array<LivePlayerData>;
}