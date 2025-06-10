import { z } from 'zod';
import 'zod-openapi/extend';

import { PlayerIdentifiersSchema } from './playerIdentifiers';

export const SocketPlayerSchema = z.object({
    id: z.string().openapi({
        description: "Server ID. Only valid for the current server instance.",
        example: "12345"
    }),
    identifiers: PlayerIdentifiersSchema,
    name: z.string().openapi({
        description: "FiveM name, ex 'Lazyllama'. Taken from their FiveM settings or computer username.",
        example: "Lazyllama"
    }),
    characterName: z.string().optional().openapi({
        description: "Framework character name, ex 'John Smith'. Not used in standalone mode.",
        example: "John Smith"
    }),
    isStaff: z.boolean().openapi({
        description: "Whether the player is marked as staff in Beacon.",
        example: true
    }),
    isInVehicle: z.boolean().openapi({
        description: "Whether the player is currently in a vehicle.", example: false
    }),
    mugshot: z.string().optional().openapi({
        description: "URL/Base64 encoded image of the player's mugshot.",
        example: "data:image/png;base64,..."
    }),
    job: z.object({
        name: z.string().optional().openapi({
            description: "Framework job name, ex 'police'.",
            example: "police"
        }),
        grade: z.union([z.string(), z.number()]).optional().openapi({
            description: "Grade number, can be a string or number depending on framework.",
            example: 1
        })
    }).optional().openapi({
        description: "Framework character job. Not used in standalone mode.",
        example: { name: "police", grade: 1 }
    }),
    position: z.object({
        x: z.number().openapi({ description: "vector3[0]", example: 123.45 }),
        y: z.number().openapi({ description: "vector3[1]", example: 678.90 }),
        z: z.number().openapi({ description: "vector3[2]", example: 101.11 })
    }).openapi({
        description: "Player vector3 coordinates. Used for the live map and teleporting.",
        example: { x: 123.45, y: 678.90, z: 101.11 }
    }),
    vehicle: z.object({
        model: z.string().openapi({
            description: "Vehicle name, ex 'sultanrs' or 'Sultan RS'.",
            example: "sultanrs"
        }),
        plate: z.string().openapi({
            description: "Vehicle plate, ex 'ABC123'.",
            example: "ABC123"
        })
    }).optional().openapi({
        description: "Vehicle information. Only set when player is in a vehicle.",
        example: { model: "sultanrs", plate: "ABC123" }
    })
}).openapi({
    description: "Represents a player connected to the server.",
    example: {
        id: "12345",
        identifiers: {
            primaryLicense: "license:1234567890abcdef",
            licenses: ["license:1234567890abcdef", "license:fedcba0987654321"],
            steamHex: "1100001000056ba",
            discordId: "754965470888722484",
            fivemId: "5003798",
            liveId: "1234567890123456",
            xboxId: "xboxid1234567890",
            ipAdresses: [
                "1.1.1.1"
            ]
        },
        name: "Lazyllama",
        characterName: "John Smith",
        isStaff: true,
        isInVehicle: false,
        mugshot: "data:image/png;base64,...",
        job: {
            name: "police",
            grade: 1
        },
        position: {
            x: 123.45,
            y: 678.90,
            z: 101.11
        },
        vehicle: {
            model: "sultanrs",
            plate: "ABC123"
        }
    }
});

export const ServerInformationSchema = z.object({
    totalPlayers: z.number().openapi({
        description: "Total number of players currently on the server.",
        example: 32
    }),
    maxPlayers: z.number().openapi({
        description: "Max players allowed on the server. Taken from the server.cfg convar 'sv_maxclients'.",
        example: 64
    }),
    locale: z.string().optional().openapi({
        description: "Server locale, ex 'en-US'. Not used for language translation. Only used for display purposes.",
        example: "en-US"
    }),
    serverDescription: z.string().openapi({
        description: "Project Description. Taken from the server.cfg convar 'sv_projectDesc'.",
        example: "A FiveM Roleplay Server"
    }),
    serverName: z.string().openapi({
        description: "Server name. Taken from the server.cfg convar 'sv_projectName'.",
        example: "Beacon RP"
    }),
    tags: z.string().openapi({
        description: "Server tags. Taken from the server.cfg convar 'tags'.",
        example: "roleplay,serious,english"
    }),
    serverInformation: z.object(
        {
            status: z.enum(["online", "offline"]).openapi({
                description: "Server status, either 'online' or 'offline'.",
                example: "online"
            }),
            artifactVersion: z.string().openapi({
                description: "Artifact version, ex '15238'. Used to check that the artifacts are stable.",
                example: "15238"
            }),
            artifactOs: z.enum(["windows", "linux", "unknown"]).openapi({
                description: "Server operating system, either 'windows', 'linux' or 'unknown'.",
                example: "windows"
            }),
            resourceCount: z.number().openapi({
                description: "Number of resources currently running on the server.",
                example: 120
            }),
            txAdminVersion: z.string().openapi({
                description: "txAdmin version, ex '8.0.1'.",
                example: "8.0.1"
            }),
            onesyncEnabled: z.string().openapi({
                description: "Whether OneSync is enabled, either 'true' or 'false'.",
                example: "true"
            }),
            enforceGameBuild: z.string().openapi({
                description: "If the server enforces a specific game build, this is set to that build number.",
                example: "2189"
            }),
            pureLevel: z.enum(["0", "1", "2"]).openapi({
                description: "The server's choice of pure level. https://docs.fivem.net/docs/server-manual/server-commands/#sv_purelevel-level.",
                example: "1"
            })
        }
    ).openapi({
        description: "Detailed server information.",
        example: {
            status: "online",
            artifactVersion: "15238",
            artifactOs: "windows",
            resourceCount: 120,
            txAdminVersion: "8.0.1",
            onesyncEnabled: "true",
            enforceGameBuild: "2189",
            pureLevel: "1"
        }
    })
});