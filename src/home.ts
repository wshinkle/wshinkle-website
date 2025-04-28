import * as $ from 'jquery'
import { CommandArea } from './command-area'
import { sections } from './sections'

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
    await AreaObjects[CURRENT_SECTION].display()
    await loadLanding()
})
