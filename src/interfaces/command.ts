export interface Section {
    name: string
    commands: Command[]
}

export interface Command {
    pre: boolean
    command: string
    result: string[]
}
