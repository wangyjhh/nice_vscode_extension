import type { ExtensionContext } from 'vscode'
import { commands, languages } from 'vscode'
import { createJsFileCommand } from './command/createJsFileCommand.js'
import { createTargetFileCommand } from './command/createTargetFileCommand.js'
import { createTsFileCommand } from './command/createTsFileCommand.js'
import { createVueFileCommand } from './command/createVueFileCommand.js'
import { jsonHandleCommand } from './command/jsonHandleCommand.js'
import { theFirstLetterReverseCommand } from './command/theFirstLetterReverseCommand.js'
import { toUpperOrLowerCaseCommand } from './command/toUpperOrLowerCaseCommand.js'
import { translateCommand } from './command/translateCommand.js'
import { hoverProvider } from './language/translateHover.js'

export function activate(context: ExtensionContext) {
    const hoverDisposable = languages.registerHoverProvider('*', {
        provideHover: hoverProvider,
    })
    const translate = commands.registerCommand('wyj.translationCommand', translateCommand)
    const toUpperOrLowerCase = commands.registerCommand('wyj.toUpperOrLowerCaseCommand', toUpperOrLowerCaseCommand)
    const theFirstLetterReverse = commands.registerCommand('wyj.theFirstLetterReverseCommand', theFirstLetterReverseCommand)
    const jsonHandle = commands.registerCommand('wyj.jsonStringifyCommand', jsonHandleCommand)
    const createTsFile = commands.registerCommand('wyj.createTsFileCommand', createTsFileCommand)
    const createVueFile = commands.registerCommand('wyj.createVueFileCommand', createVueFileCommand)
    const createJsFile = commands.registerCommand('wyj.createJsFileCommand', createJsFileCommand)
    const createTargetFile = commands.registerCommand('wyj.createTargetFileCommand', createTargetFileCommand)

    context.subscriptions.push(
        hoverDisposable,
        translate,
        toUpperOrLowerCase,
        theFirstLetterReverse,
        jsonHandle,
        createTsFile,
        createVueFile,
        createJsFile,
        createTargetFile,
    )
}
export function deactivate() {}
