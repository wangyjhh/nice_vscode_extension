import { ExtensionContext, commands } from "vscode"
import { translateCommand } from "./command/translateCommand.js"
import { toUpperOrLowerCaseCommand } from "./command/toUpperOrLowerCaseCommand.js"
import { theFirstLetterReverseCommand } from "./command/theFirstLetterReverseCommand.js"
import { jsonHandleCommand } from "./command/jsonHandleCommand.js"
import { createTargetFileCommand } from "./command/createTargetFileCommand.js"
import { createJsFileCommand } from "./command/createJsFileCommand.js"
import { createTsFileCommand } from "./command/createTsFileCommand.js"
import { createVueFileCommand } from "./command/createVueFileCommand.js"

export function activate(context: ExtensionContext) {
	let translate = commands.registerCommand("wyj.translationCommand", translateCommand)
	let toUpperOrLowerCase = commands.registerCommand("wyj.toUpperOrLowerCaseCommand", toUpperOrLowerCaseCommand)
	let theFirstLetterReverse = commands.registerCommand("wyj.theFirstLetterReverseCommand", theFirstLetterReverseCommand)
	let jsonHandle = commands.registerCommand("wyj.jsonStringifyCommand", jsonHandleCommand)
	let createTsFile = commands.registerCommand("wyj.createTsFileCommand", createTsFileCommand)
	let createVueFile = commands.registerCommand("wyj.createVueFileCommand", createVueFileCommand)
	let createJsFile = commands.registerCommand("wyj.createJsFileCommand", createJsFileCommand)
	let createTargetFile = commands.registerCommand("wyj.createTargetFileCommand", createTargetFileCommand)

	context.subscriptions.push(
		translate,
		toUpperOrLowerCase,
		theFirstLetterReverse,
		jsonHandle,
		createTsFile,
		createVueFile,
		createJsFile,
		createTargetFile
	)
}
export function deactivate() {}
