import * as $ from 'jquery'
import { CommandArea } from './command-area'
import { sections } from './sections'
import { sleep } from './utils'

export var CURRENT_SECTION = 'landing'

var AreaObjects: { [key: string]: CommandArea } = {}

async function loadLanding() {
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

/* On Document Ready */
$(async function () {
    // Handler on DOM ready
    sections.forEach((section) => {
        AreaObjects[section.name] = new CommandArea(section)
    })

    // Attach event listeners after DOM is ready
    document.querySelectorAll('.navbar-item').forEach((item) => {
        item.addEventListener('click', async () => {
            CURRENT_SECTION = item.id
            await AreaObjects[item.id].display()
        })
    })

    //when the hash changes, update the current section
    window.addEventListener('hashchange', async () => {
        CURRENT_SECTION = window.location.hash.substring(1) || 'landing'
        await AreaObjects[CURRENT_SECTION].display()
    })

    // Get the current href hash
    CURRENT_SECTION = window.location.hash.substring(1) || 'landing'
    alternateTitle()
    await AreaObjects[CURRENT_SECTION].display()
    await loadLanding()
})

async function alternateTitle() {
    const titles = [
        './software-engineer',
        './full-stack-developer',
        './web-developer',
        './computer-scientist',
        './tech-enthusiast',
        './problem-solver',
    ]

    const titleRef = $('#title-flavor')

    let currentIndex = 1
    while (true) {
        const currentTitle = titleRef.text()
        const nextTitle = titles[currentIndex % titles.length]

        for (let i = 0; i < currentTitle.length; i++) {
            titleRef.text(currentTitle.slice(0, currentTitle.length - i))
            await sleep(50)
        }
        for (let i = 0; i < nextTitle.length; i++) {
            titleRef.text(nextTitle.slice(0, i + 1))
            await sleep(50)
        }

        currentIndex++
        await sleep(3000) // Pause before the next transition
    }
}
