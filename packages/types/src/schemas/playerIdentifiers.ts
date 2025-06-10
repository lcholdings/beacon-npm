import { z } from "zod";

/**
 * PLayerIdentifiers
 *
 * Zod Replication of the playerIdentifiers type.
 */
export const PlayerIdentifiersSchema = z.object({
    primaryLicense: z.string().openapi({
        description: "This is the primary identifer for a player.",
        example: "license:1234567890abcdef"
    }),
    licenses: z.array(z.string()).openapi({
        description: "Any additional licenses associated with the player.",
        example: ["license:abcdef1234567890"]
    }),

    // Optional identifiers
    steamHex: z.string().optional().openapi({
        description: "Steam Hex identifier, ex '1100001000056ba'",
        example: "1100001000056ba"
    }),
    discordId: z.string().optional().openapi({
        description: "Discord ID, ex '754965470888722484'",
        example: "754965470888722484"
    }),
    fivemId: z.string().optional().openapi({
        description: "forum.cfx.re identifier, ex '5003798'",
        example: "5003798"
    }),
    liveId: z.string().optional().openapi({
        description: "Microsoft Passport Unique Identifier",
        example: "1234567890123456"
    }),
    xboxId: z.string().optional().openapi({
        description: "Highly unclear what this is, but it exists in the player identifiers.",
        example: "1234567890123456"
    }),

    // Optional, for ban evasion primarily.
    ipAdresses: z.array(z.string()).optional().openapi({
        description: "IP addresses associated with the player, very efficient in ban evasion tracking.",
        example: ["192.168.1.1", "10.0.0.2"]
    })
}).openapi({
    description: "Contains all identifiers for a player, including IP addresses.", example: {
        primaryLicense: "license:1234567890abcdef",
        licenses: ["license:abcdef1234567890"],
        steamHex: "1100001000056ba",
        discordId: "754965470888722484",
        fivemId: "5003798",
        liveId: "1234567890123456",
        xboxId: "1234567890123456",
        ipAdresses: ["192.168.1.1", "10.0.0.2"]
    }
});
