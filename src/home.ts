import * as $ from 'jquery'

interface Section {
    commands: Command[]
}

interface Command {
    pre: boolean
    command: string
    result: string[]
}

const PROMPT = 'user@mothership$'

const sections: { [key: string]: Section } = {
    landing: {
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
    about: {
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
    skills: {
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
    projects: {
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
    contact: {
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
    three: {
        commands: [],
    },
}

//some variables to track the state of the page
var currentSection = 'landing'
var commandAreaGrown = false
//section event listeners
document.querySelectorAll('.navbar-item').forEach((item) => {
    item.addEventListener('click', () => {
        handleSectionChange(item.id)
    })
})
async function handleSectionChange(section: string) {
    if (currentSection === section) {
        return // Don't do anything if the section is already active
    }
    currentSection = section

    if (!commandAreaGrown) {
        $('.title-section').animate(
            {
                height: 'toggle', // Simulates slideUp
                opacity: 0, // Simulates fadeOut
            },
            300, // Duration of the animation in milliseconds
            function () {
                $(this).remove() // Remove the element after the animation completes
            }
        )
        $('div.command-area').addClass('command-area-grow')
        commandAreaGrown = true
    }
    // Clear the command area and remove the hanging cursor
    $(`#${section}`).toggleClass('active')
    toggleSections(section)
    // await clearCMD()
    $('.command-area').empty()
    if (section === 'landing') {
        loadLanding()
    } else {
        loadSection(section)
    }
}

function toggleSections(section: string) {
    Object.keys(sections).forEach((s) => {
        if (s !== section) {
            $(`#${s}`).removeClass('active')
        }
    })
}

async function loadLanding() {
    await loadSection('landing')

    //shift the command-area down slightly
    $('div.command-area').animate(
        {
            top: '10px', // Simulates translateY(10px)
        },
        1000 // Duration in milliseconds
    )

    $('div.solid').animate(
        {
            top: '10px', // Simulates translateY(10px)
        },
        1000 // Duration in milliseconds
    )
    $('div.navbar').toggleClass('hidden').toggleClass('navbar-appear')
}

async function loadSection(section: string) {
    const commands = sections[section].commands
    for (let i = 0; i < commands.length; i++) {
        if (currentSection !== section) {
            return // Stop typing if the section has changed
        }
        const command = commands[i]
        await typeCommand(command, section)
    }
    // Add a hanging cursor at the end of the last command
    if (currentSection === section) {
        await typeCommand(undefined, section)
    }
}

async function clearCMD() {
    var lastCommand = $('.hanging-cursor')
    lastCommand.removeClass('hanging-cursor').empty()
    for (const c of './clear') {
        lastCommand.append(c)
        await sleep(50) // character delay
    }
}

async function typeCommand(command: Command | undefined, section: string) {
    const html = `
			<div class="command-section">
				<div class="command-group">
					<label class="command-prompt">${PROMPT}&nbsp</label>	
					<p class="command"></p>
				</div>
			</div>`

    $('div.command-area').append(html)
    var newCommand = $('.command-group').last()

    if (command === undefined) {
        newCommand.find('.command').append('▮').addClass('hanging-cursor')
        return
    }
    for (const c of command.command) {
        if (currentSection !== section) {
            return // Stop typing if the section has changed
        }
        newCommand.find('.command').append(c) // Ensure you're appending to the correct child element
        await sleep(50) // character delay
    }

    await sleep(300) // wait before printing result

    // Type the result
    for (let i = 0; i < command.result.length; i++) {
        if (currentSection !== section) {
            return // Stop typing if the section has changed
        }
        const newLine = `<${command.pre ? 'pre' : 'p'} class="command-result"></${command.pre ? 'pre' : 'p'}>`

        $('.command-section').last().append(newLine)

        var newChild = $('.command-result').last().append(command.result[i])
        await sleep(50) // wait before printing result

        // for (const c of command.result[i]) {
        //     newChild.append(c)
        //     await sleep(0.1) // character delay
        // }
    }
}

// Delay helper
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/* On Document Ready */
await loadLanding()
