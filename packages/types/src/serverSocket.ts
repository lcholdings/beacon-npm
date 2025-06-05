import type { PlayerIdentifiers } from "./playerIdentifiers";

export interface ServerSocket {
    totalPlayers: number
    maxPlayers: number;
    status: "online" | "offline"
    artifactVersion: string;
    artifactOs: "windows" | "linux";
    resourceCount: number;
    players: Array<{
        id: string;
        identifiers: PlayerIdentifiers;
        name: string;
        characterName?: string;
        isStaff: boolean;
        isInVehicle: boolean;
        mugshot?: string;
        job: {
            name: string;
            grade: string | number;
        }
        position: {
            x: number;
            y: number;
            z: number;
        };
        vehicle?: {
            model: string;
            plate: string;
        };
    }>;
}