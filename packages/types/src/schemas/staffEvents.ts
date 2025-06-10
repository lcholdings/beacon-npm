import { z } from "zod";
import { PlayerIdentifiersSchema } from "./playerIdentifiers";

export const EventTypeSchema = z.enum(['ban', 'kick', 'unban', 'server-action', 'warning']);

export const StaffMemberSchema = z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(), // Clerk role e.g., 'org:admin', 'org:member'
});

export const TargetPlayerSchema = z.object({
    name: z.string(),
    identifiers: PlayerIdentifiersSchema,
});

export const StaffEventSchema = z.object({
    actionId: z.string(),
    type: EventTypeSchema,
    reason: z.string(),
    timestamp: z.string(), // Unix timestamp
    staffMember: StaffMemberSchema,
    targetPlayer: TargetPlayerSchema,
});

export const StaffEventsSchema = z.object({
    total_events: z.number(),
    events: z.array(StaffEventSchema),
});