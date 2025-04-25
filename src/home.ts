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
const CLEAR: Command = {
    pre: false,
    command: './clear',
    result: [],
}
const sections: { [key: string]: Section } = {
    landing: {
        commands: [
            {
                pre: false,
                command: './boot',
                result: [
                    '> Initializing Knowledge Registers... Complete!',
                    // '> Loading Motivation Cache... Complete!',
                    // '> Priming Creativity... Primed!',
                    // '> Querying Leadership Roles... Found!',
                    // '> Referencing Experience Pointers... Referenced!',
                    // '> Complete! Ready To Problem Solve!',
                ],
            },
            // {
            //     pre: true,
            //     command: './initialize-developer',
            //     result: [
            //         ' _____                          _____ ',
            //         '( ___ )     version 2.9.13     ( ___ )',
            //         ' |   |~~~~~~~~~~~~~~~~~~~~~~~~~~|   | ',
            //         ' |   |  _       __ __  __ _____ |   | ',
            //         ' |   | | |     / // / / // ___/ |   | ',
            //         ' |   | | | /| / // /_/ / \\__ \\  |   | ',
            //         ' |   | | |/ |/ // __  / ___/ /  |   | ',
            //         ' |   | |__/|__//_/ /_/ /____/   |   | ',
            //         ' |   |                          |   | ',
            //         ' |___|~~~~~~~~~~~~~~~~~~~~~~~~~~|___| ',
            //         '(_____)    wyattshinkle.com    (_____)',
            //     ],
            // },
        ],
    },
    about: {
        commands: [
            {
                pre: false,
                command: './about',
                result: [
                    'I am a software engineer with a passion for building things.',
                    'I love to learn and grow, and I am always looking for new challenges.',
                    'I have experience in a variety of programming languages and frameworks,',
                    'and I am always eager to learn more.',
                ],
            },
        ],
    },
    skills: {
        commands: [],
    },
    projects: {
        commands: [],
    },
    contact: {
        commands: [],
    },
    three: {
        commands: [],
    },
}

var currentSection = 'landing'

//section event listeners
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', () => {
        handleSectionChange(item.id);
    });
});
async function handleSectionChange(
    section: string,
) {
    if (currentSection === section) {
        return // Don't do anything if the section is already active
    }
    
    currentSection = section

    // Clear the command area and remove the hanging cursor
    $(`#${section}`).toggleClass('active')
    toggleSections(section)
    await clearCMD()
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
    $('div.command-area').addClass('command-area-post')
    $('div.solid').addClass('command-area-post')
    $('div.navbar').toggleClass('hidden').toggleClass('navbar-appear')
}

async function loadSection(section: string) {
    const commands = sections[section].commands
    for (let i = 0; i < commands.length; i++) {
        if (currentSection !== section) {
            return // Stop typing if the section has changed
        }
        const command = commands[i]
        await typeCommand(command)
    }
    // Add a hanging cursor at the end of the last command
    if (currentSection === section) {
        await typeCommand(undefined)
    }
}

async function clearCMD() {
    var lastCommand = $('.hanging-cursor');
    lastCommand.removeClass('hanging-cursor').empty();
    for (const c of './clear') {
        lastCommand.append(c)
        await sleep(50) // character delay
    }
}

async function typeCommand(command: Command | undefined) {
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

        newCommand.find('.command').append('▮').addClass('hanging-cursor');
        return
    }
    for (const c of command.command) {
        newCommand.find('.command').append(c) // Ensure you're appending to the correct child element
        await sleep(50) // character delay
    }

    await sleep(300) // wait before printing result

    // Type the result
    for (let i = 0; i < command.result.length; i++) {
        const newLine = `<${command.pre ? 'pre' : 'p'} class="command-result"></${command.pre ? 'pre' : 'p'}>`

        $('.command-section').last().append(newLine)

        var newChild = $('.command-result').last();
        for (const c of command.result[i]) {
            newChild.append(c)
            await sleep(1) // character delay
        }
    }
}

// Delay helper
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/* On Document Ready */
await loadLanding()
