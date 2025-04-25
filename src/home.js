import $ from 'jquery'

//event listeners

// $('#about').on('click', function () {
//     $(this).toggleClass('active')
//     toggleSections('about')
// })

// $('#skills').on('click', function () {
//     $(this).toggleClass('active')
//     toggleSections('skills')
// })

// $('#projects').on('click', function () {
//     $(this).toggleClass('active')
//     toggleSections('projects')
// })

// $('#contact').on('click', function () {
//     $(this).toggleClass('active')
//     toggleSections('contact')
// })

// $('#3d').on('click', function () {
//     $(this).toggleClass('active')
//     toggleSections('3d')
// })
const sections = ['about', 'skills', 'projects', 'contact', '3d']
sections.forEach((s) => {
    $(`#${s}`).on('click', function () {
        $(this).toggleClass('active')
        toggleSections(s)
    })
})
function toggleSections(section) {
    sections.forEach((s) => {
        if (s !== section) {
            $(`#${s}`).removeClass('active')
        }
    })
}

const prompt = 'user@mothership$'
const commands = [
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
    {
        pre: true,
        command: './initialize-developer',
        result: [
            ' _____                          _____ ',
            // '( ___ )     version 2.9.13     ( ___ )',
            // ' |   |~~~~~~~~~~~~~~~~~~~~~~~~~~|   | ',
            // ' |   |  _       __ __  __ _____ |   | ',
            // ' |   | | |     / // / / // ___/ |   | ',
            // ' |   | | | /| / // /_/ / \\__ \\  |   | ',
            // ' |   | | |/ |/ // __  / ___/ /  |   | ',
            // ' |   | |__/|__//_/ /_/ /____/   |   | ',
            // ' |   |                          |   | ',
            // ' |___|~~~~~~~~~~~~~~~~~~~~~~~~~~|___| ',
            // '(_____)    wyattshinkle.com    (_____)',
        ],
    },
]

// Delay helper
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function typeCommand(command, index) {
    const html = `
			<div class="command-section" id="command-sec-${index}">
				<div class="command-group">
					<label class="command-prompt">${prompt}&nbsp</label>	
					<p class="command" id="command-${index}"></p>
				</div>
			</div>`

    $('div.command-area').append(html)

    // Type the command
    for (const c of command.command) {
        $(`#command-${index}`).append(c)
        await sleep(25) // character delay
    }

    await sleep(300) // wait before printing result

    // Type the result
    for (let i = 0; i < command.result.length; i++) {
        $(`#command-sec-${index}`).append(
            `<${command.pre ? 'pre' : 'p'} class="command-result" id="result-${index}-${i}"></${command.pre ? 'pre' : 'p'}>`
        )
        for (const c of command.result[i]) {
            $(`#result-${index}-${i}`).append(c)
            await sleep(1) // character delay
        }
    }
}

// Run all commands in sequence
async function runCommands() {
    for (let i = 0; i < commands.length; i++) {
        await typeCommand(commands[i], i)
    }
}

await runCommands() // kick things off

//shift the command-area down slightly
$('div.command-area').addClass('command-area-post')
$('div.solid').addClass('command-area-post')
$('div.navbar').toggleClass('hidden').toggleClass('navbar-appear')
