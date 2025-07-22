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
                    '                                                                           ',
                    '                                                            @@@+         @##   %@@@                 ',
                    '                                                      @@@                @#######    @@@            ',
                    '                                    @@@@#####@@   @@@                     @#############@           ',
                    '                                @@#############@@                         @############@@           ',
                    '                            @@%##@@@@@@@@@##@@               @@@@@#        @##########@             ',
                    '                         @@@@@            @                @ @@@@@ @       @@########@              ',
                    '                                       @@                 @ @   ..@ @       @#######@               ',
                    '                                     @+ @                # @.     @ @       #@####@                 ',
                    '                                    @    @                @ @#...@ @         @##@@                  ',
                    '                                    @%   .=    *@@#@       @@    @@           @@                    ',
                    '                            +++---...@    @@@##@@                           @@                      ',
                    '                       ++++---.......@@@#@@@                             @@                         ',
                    '                    ++++---.....@@##@@@    @                          @@                            ',
                    '                 +++--------.@#@@%....-@  ::@                     @@                                ',
                    '            ++=---++++--:...--......-++@::::@               @@@@                                    ',
                    '   %++++++++++ ++++-..---+-:....--++    @@@@@@@@@@@@@@@@                                            ',
                    '           +++----+++++-:----++++               @#####@                                              ',
                    '       ++--+++   #++--+++++++                 @@#####@                                               ',
                    '   ++++       ++++++++                      @@#####@                                                ',
                    '           *+++                         @@#####@@                                                    ',
                    '         +                          @@@##@@@@                                                        ',
                    '                                 @@@                                                                ',
                ],
            },
        ],
    },
    {
        name: 'about',
        commands: [
            {
                pre: true,
                command: 'cd ~/about',
                result: [
                    '          ____   ____  _    _ _______ ',
                    '    /\\   |  _ \\ / __ \\| |  | |__   __|',
                    '   /  \\  | |_) | |  | | |  | |  | |   ',
                    '  / /\\ \\ |  _ <| |  | | |  | |  | |   ',
                    ' / ____ \\| |_) | |__| | |__| |  | |   ',
                    '/_/    \\_\\____/ \\____/ \\____/   |_|   ',
                ],
            },
            {
                pre: false,
                command: './auto-biography',
                result: [
                    `I\'m Wyatt! I am a software engineer, passionate about solving problems and writing clean, concise solutions.
                     By leveraging wide range of skills that many consider me to proficient in, I am able to fix problems efficiently.
                      As a 2024 Computer Science Graduate of Ohio University, I am familiar with many modern system designs and technolgies.
                       However, I also hold a fair amount of experience in supporting legacy systems, allowing me to understand the importance of writing future facing solutions.
                        While already displaying an extremely large and versatile skillset, I am always eager to learn new technologies and softwares.`,
                ],
            },
            {
                pre: false,
                command: './some-hobbies',
                result: [
                    '> Reading. All genres, as long as it is interesting.',
                    '> Homelab/Self-Hosted solutions. Ask me about it!',
                    '> Tinkering on something...computer, motorcycle, or other!',
                ],
            },
        ],
    },
    {
        name: 'skills',
        commands: [
            {
                pre: true,
                command: 'cd ~/skills',
                result: [
                    '  _____ _  _______ _      _       _____ ',
                    ' / ____| |/ /_   _| |    | |     / ____|',
                    "| (___ | ' /  | | | |    | |    | (___  ",
                    ' \\___ \\|  <   | | | |    | |     \\___ \\ ',
                    ' ____) | . \\ _| |_| |____| |____ ____) |',
                    '|_____/|_|\\_\\_____|______|______|_____/ ',
                ],
            },
            {
                pre: false,
                command: './languages --list --type modern',
                result: [
                    '> <strong>SQL:</strong> Proficient at writing efficient queries, working in both SQL Server and DB2 based systems. Understand how to analyze data, and pull useful conclusions from it. Skilled at optimizing queries via indexing.',
                    '> <strong>C#/.NET:</strong> Well versed in modern backend development, writing secure RESTful APIs follwing the latest OpenAPI specifications. Have firm understanding of relationships between Data/Service layers, utilizing Entity-Framework and more simplistic ORMs',
                    '> <strong>Typescript:</strong> Proficient in writing Typescript for frontend applications.',
                    '> <strong>Python:</strong> Proficient in writing Python code, often for small scripts',
                    '> <strong>C++:</strong> Well versed in C++, used it to learn and understand majority of data structure/algorithms. Have a good understanding of memory/pointer management.',
                ],
            },
            {
                pre: false,
                command: './languages --list --type ancient',
                result: [
                    '> <strong>COBOL:</strong> Able to read/write COBOL and have a solid understanding of how memory and state are managed',
                    "> <strong>FORTRAN:</strong> Able to read FORTRAN and write basic FORTRAN. While I don't expect to use this skill, it demonstrates knowledge of intense memory management.",
                ],
            },
            {
                pre: false,
                command: './frameworks-designs --list',
                result: [
                    '> <strong>Web Design:</strong> Very well versed in web design, in both basic and more complicated scenarios. Understand how modern frameworks are designed + why they are useful, but also when simpler solutions may be better, and how to implement them.',
                    '> <strong>Backend Design:</strong> Proficient understanding of various types of backend systems. RESTful APIs, RTC, and RPC',
                    '> <strong>DevOps:</strong> Deep understanding of Docker and other containerization software(K8s, etc.). Deep understanding of modern CI/CD practices. Some experience working with AWS EC2 and some other AWS features',
                ],
            },
        ],
    },
    {
        name: 'projects',
        commands: [
            {
                pre: true,
                command: 'cd ~/projects',
                result: [
                    ' _____  _____   ____       _ ______ _____ _______ _____ ',
                    '|  __ \\|  __ \\ / __ \\     | |  ____/ ____|__   __/ ____|',
                    '| |__) | |__) | |  | |    | | |__ | |       | | | (___  ',
                    '|  ___/|  _  /| |  | |_   | |  __|| |       | |  \\___ \\ ',
                    '| |    | | \\ \\| |__| | |__| | |___| |____   | |  ____) |',
                    '|_|    |_|  \\_ \\____/ \\____/|______\\_____|  |_| |_____/ ',
                ],
            },
            {
                pre: false,
                command: './website',
                result: [
                    '> <strong>Personal Website</strong>',
                    `> The website you are currently looking at.`,
                    `> After a year of working in the Software Engineering Industry, I realized that I had easily doubled the amount of skills/projects I previously had.`,
                    `> I wanted to redesign it, but also wanted to use the opportunity to learn/develop my skillsets even more.`,
                    `> Previously I had only done web-development from behind many of the cushy frameworks you often hear about (React, Angular, etc.), so I wanted to challenge myself and develop this website using a very simple tech stack, jQuery + Typescript.`,
                    `> <strong>Tech Stack &rArr;</strong> <i>${['Typescript', 'jQuery', 'Web Design'].join(', ')}</i>`,
                ],
            },
            {
                pre: false,
                command: './dme-mls-modernization',
                result: [
                    `> <strong>DME/MLS Modernization</strong>`,
                    '> Tasked with modernizing the existing FORTRAN77 implementation of the Distance Measuring Equipment and Microwave Landing System that was developed by MIT and used by Raytheon',
                    '> Converted all pre-existing FORTRAN subroutines to C++ functions using modern inudstry standards and best practices',
                    '> Worked with a small team using Agile Methodology to ensure that the project was completed on time and within budget',
                    '> Implemented automated testing using Catch2 integrated with Github Actions to ensure that the code was always functioning as expected',
                    `> <strong>Tech Stack &rArr;</strong><i>
                        ${[
                            'C++',
                            'GitHub',
                            'FORTRAN77',
                            'Agile Methodology',
                            'Catch2',
                        ].join(', ')}</i>`,
                ],
            },
            {
                pre: false,
                command: './rfp-ml-search',
                result: [
                    '> <strong>Request For Proposal Indexer/Improved Search</strong>',
                    "> Tasked with creating a new search feature for the company's RFP/RFI/RFQ database using LLM",
                    '> Created a new search feature that allowed for more specific searches and better results by leveraging machine learning models',
                    '> Implemented a vector database using Weaviate for fast document retrieval and indexing',
                    "> Trained the machine learning model using real data from the company's database to ensure that the search results were accurate and relevant",
                    `> <strong>Tech Stack &rArr;</strong> <i>${[
                        'Python',
                        'Agile Methodology',
                        'Azure',
                        'Machine Learning',
                        'Vector Database (Weaviate)',
                    ].join(', ')}</i>`,
                ],
            },
            {
                pre: false,
                command: './cve-sql-db',
                result: [
                    '> <strong>CVE SQL Database</strong>',
                    '> Tasked with a database that would store all CVEs (Common Exploits and Vulnerabilities) and their associated information in a SQL database',
                    '> Website that currently hosts the CVEs (MITRE) is very slow and difficult to use, so the goal was to create a faster and more user-friendly alternative',
                    '> Parsed thousands of CVE json files and stored the information in a SQL database using Python',
                    '> Created a front-end using ReactJs and ElectronJs that allowed for easy searching and filtering of CVEs based on a variety of criteria',
                    "> Implemented a RESTful API that allowed for easy access to the database using Python's Flask framework",
                    '> Added a feature that allowed the user to create and destroy Docker containers within the application to allow for safe and easy testing of the exploits and vulnerabilities',
                    `> <strong>Tech Stack &rArr;</strong> <i>${[
                        'Python',
                        'Docker',
                        'SQL',
                        'ReactJs',
                        'API',
                        'Flask',
                    ].join(', ')}</i>`,
                ],
            },
            {
                pre: false,
                command: './cve-ctf',
                result: [
                    '> <strong>CVE-2023-2982 Capture The Flag</strong>',
                    '> Tasked with creating a Capture The Flag challenge that would help demonstrate the importance of security and the process of finding and exploiting vulnerabilities in web applications',
                    '> Created a challenge that required the student to find and exploit a vulnerability in a web application',
                    '> Used Docker to create a safe and isolated environment for the challenge to run in to ensure that the student could not harm the host system',
                    '> Created a write-up that explained the process of solving the challenge and the thought process behind it',
                    `> <strong>Tech Stack &rArr;</strong> <i>${['Python', 'Docker', 'Cryptography'].join(', ')}</i>`,
                ],
            },
        ],
    },
    // {
    //     name: 'contact',
    //     commands: [
    //         {
    //             pre: true,
    //             command: 'cd ~/contact',
    //             result: [
    //                 '  _____ ____  _   _ _______       _____ _______ ',
    //                 ' / ____/ __ \\| \\ | |__   __|/\\   / ____|__   __|',
    //                 '| |   | |  | |  \\| |  | |  /  \\ | |       | |   ',
    //                 '| |   | |  | | . ` |  | | / /\\ \\| |       | |   ',
    //                 '| |___| |__| | |\\  |  | |/ ____ \\ |____   | |   ',
    //                 ' \\_____\\____/|_| \\_|  |_/_/    \\_\\_____|  |_|   ',
    //             ],
    //         },
    //     ],
    // },
]
