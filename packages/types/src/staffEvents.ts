import type { PlayerIdentifiers } from "./playerIdentifiers";

export type EventType = 'ban' | 'kick' | 'unban' | 'server-action' | 'warning'

export interface StaffEvent {
    actionId: string;
    type: EventType;
    reason: string;
    timestamp: string; // Unix timestamp
    staffMember: {
        id: string;
        name: string;
        role: string; // Clerk role e.g., 'org:admin', 'org:member'
    };
    targetPlayer: {
        name: string;
        identifiers: PlayerIdentifiers;
    }
}

export interface StaffEvents {
    total_events: number;
    events: Array<StaffEvent>;
}