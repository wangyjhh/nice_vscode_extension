import type { ExtensionContext } from 'vscode'
import { commands, languages } from 'vscode'
import {
    createJsFileCommand,
    createTargetFileCommand,
    createTsFileCommand,
    createVueFileCommand,
    jsonHandleCommand,
    theFirstLetterReverseCommand,
    toUpperOrLowerCaseCommand,
    translateCommand,
} from './command'
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
