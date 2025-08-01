import { Command, Section } from '../interfaces/command'
import * as $ from 'jquery'
import { sleep } from '../utils'
import { CURRENT_SECTION } from '../home'

const PROMPT = 'wyatt@shinkle$'
export class CommandArea {
    private _section: Section
    private _loading: boolean = false

    constructor(section: Section) {
        this._section = section
    }

    /**
     * @abstract Displays the command area for the current section.
     * @returns
     */
    async display() {
        if (this._loading) {
            return // Prevent re-entry if already loading
        }

        this._loading = true

        if (
            this._section.name !== 'landing' &&
            !$('div.command-area').hasClass('command-area-grow') //todo: remove this check and add it to state
        ) {
            $('div.command-area').addClass('command-area-grow')
        }

        $('.navbar-item').removeClass('active')
        $(`#${this._section.name}`).toggleClass('active')

        $('.command-area').empty()

        await this.loadSection()
        this._loading = false
    }

    async loadSection() {
        const commands = this._section.commands
        for (let i = 0; i < commands.length; i++) {
            if (CURRENT_SECTION !== this._section.name) {
                return // Stop typing if the section has changed
            }
            const command = commands[i]
            await this.typeCommand(command)
        }
        // Add a hanging cursor at the end of the last command
        if (CURRENT_SECTION === this._section.name) {
            await this.typeCommand(undefined)
        }
    }

    async typeCommand(command: Command | undefined) {
        const html = this.getCommandSectionHtml()

        $('div.command-area').append(html)
        var newCommand = $('.command-group').last()

        if (command === undefined) {
            newCommand.find('.command').append('▮').addClass('hanging-cursor')
            return
        }
        for (const c of command.command) {
            if (CURRENT_SECTION !== this._section.name) {
                return // Stop typing if the section has changed
            }
            newCommand.find('.command').append(c) // Ensure you're appending to the correct child element
            await sleep(25) // character delay
        }

        await sleep(300) // wait before printing result

        // Type the result
        for (let i = 0; i < command.result.length; i++) {
            if (CURRENT_SECTION !== this._section.name) {
                return // Stop typing if the section has changed
            }
            const newLine = `<${command.pre ? 'pre' : 'p'} class="command-result"></${command.pre ? 'pre' : 'p'}>${command.pre ? '' : '<br/>'}`
            $('.command-section').last().append(newLine)

            var newChild = $('.command-result').last().append(command.result[i])

            await sleep(50) // wait before printing result
        }
    }

    getCommandSectionHtml() {
        return `
            <div class="command-section">
                <div class="command-group">
                    <label class="command-prompt">${PROMPT}&nbsp</label>	
                    <p class="command"></p>
                </div>
            </div>`
    }
}
