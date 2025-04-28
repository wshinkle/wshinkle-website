import { Section } from './interfaces/command'

export const sections: Section[] = [
    {
        name: 'landing',
        commands: [
            {
                pre: false,
                command: './boot',
                result: [
                    '> Initializing Knowledge Registers... Complete!',
                    '> Loading Motivation Cache... Complete!',
                    '> Priming Creativity... Primed!',
                    '> Querying Leadership Roles... Found!',
                    '> Referencing Experience Pointers... Referenced!',
                    '> Complete! Ready To Problem Solve!',
                ],
            },
            {
                pre: true,
                command: './initialize-developer',
                result: [
                    ' _____                          _____ ',
                    '( ___ )     version 2.9.13     ( ___ )',
                    ' |   |~~~~~~~~~~~~~~~~~~~~~~~~~~|   | ',
                    ' |   |  _       __ __  __ _____ |   | ',
                    ' |   | | |     / // / / // ___/ |   | ',
                    ' |   | | | /| / // /_/ / \\__ \\  |   | ',
                    ' |   | | |/ |/ // __  / ___/ /  |   | ',
                    ' |   | |__/|__//_/ /_/ /____/   |   | ',
                    ' |   |                          |   | ',
                    ' |___|~~~~~~~~~~~~~~~~~~~~~~~~~~|___| ',
                    '(_____)    wyattshinkle.com    (_____)',
                ],
            },
        ],
    },
    {
        name: 'about',
        commands: [
            {
                pre: true,
                command: './about',
                result: [
                    '          ____   ____  _    _ _______ ',
                    '    /\\   |  _ \\ / __ \\| |  | |__   __|',
                    '   /  \\  | |_) | |  | | |  | |  | |   ',
                    '  / /\\ \\ |  _ <| |  | | |  | |  | |   ',
                    ' / ____ \\| |_) | |__| | |__| |  | |   ',
                    '/_/    \\_\\____/ \\____/ \\____/   |_|   ',
                ],
            },
        ],
    },
    {
        name: 'skills',
        commands: [
            {
                pre: true,
                command: './skills',
                result: [
                    '  _____ _  _______ _      _       _____ ',
                    ' / ____| |/ /_   _| |    | |     / ____|',
                    "| (___ | ' /  | | | |    | |    | (___  ",
                    ' \\___ \\|  <   | | | |    | |     \\___ \\ ',
                    ' ____) | . \\ _| |_| |____| |____ ____) |',
                    '|_____/|_|\\_\\_____|______|______|_____/ ',
                ],
            },
        ],
    },
    {
        name: 'projects',
        commands: [
            {
                pre: true,
                command: './projects',
                result: [
                    ' _____  _____   ____       _ ______ _____ _______ _____ ',
                    '|  __ \\|  __ \\ / __ \\     | |  ____/ ____|__   __/ ____|',
                    '| |__) | |__) | |  | |    | | |__ | |       | | | (___  ',
                    '|  ___/|  _  /| |  | |_   | |  __|| |       | |  \\___ \\ ',
                    '| |    | | \\ \\| |__| | |__| | |___| |____   | |  ____) |',
                    '|_|    |_|  \\_ \\____/ \\____/|______\\_____|  |_| |_____/ ',
                ],
            },
        ],
    },
    {
        name: 'contact',
        commands: [
            {
                pre: true,
                command: './contact',
                result: [
                    '  _____ ____  _   _ _______       _____ _______ ',
                    ' / ____/ __ \\| \\ | |__   __|/\\   / ____|__   __|',
                    '| |   | |  | |  \\| |  | |  /  \\ | |       | |   ',
                    '| |   | |  | | . ` |  | | / /\\ \\| |       | |   ',
                    '| |___| |__| | |\\  |  | |/ ____ \\ |____   | |   ',
                    ' \\_____\\____/|_| \\_|  |_/_/    \\_\\_____|  |_|   ',
                ],
            },
        ],
    },
    {
        name: 'three',
        commands: [
            {
                pre: true,
                command: './3d',
                result: [
                    '__        _____ ____  ',
                    '\\ \\      / /_ _|  _ \\ ',
                    ' \\ \\ /\\ / / | || |_) |',
                    '  \\ V  V /  | ||  __/ ',
                    '   \\_/\\_/  |___|_|    ',
                ],
            },
        ],
    },
]
