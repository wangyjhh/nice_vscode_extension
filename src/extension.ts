import { ExtensionContext, commands, FileChangeEvent, FileChangeType, workspace } from "vscode"
import { translateCommand } from "./command/translateCommand.js"
import { toUpperOrLowerCaseCommand } from "./command/toUpperOrLowerCaseCommand.js"
import { theFirstLetterReverseCommand } from "./command/theFirstLetterReverseCommand.js"
import { jsonHandleCommand } from "./command/jsonHandleCommand.js"
import { createTargetFileCommand } from "./command/createTargetFileCommand.js"

export function activate(context: ExtensionContext) {
	let translate = commands.registerCommand("wyj.translationCommand", translateCommand)
	let toUpperOrLowerCase = commands.registerCommand("wyj.toUpperOrLowerCaseCommand", toUpperOrLowerCaseCommand)
	let theFirstLetterReverse = commands.registerCommand("wyj.theFirstLetterReverseCommand", theFirstLetterReverseCommand)
	let jsonHandle = commands.registerCommand("wyj.jsonStringifyCommand", jsonHandleCommand)
	let createTargetFile = commands.registerCommand("wyj.createTargetFileCommand", createTargetFileCommand)
	context.subscriptions.push(translate, toUpperOrLowerCase, theFirstLetterReverse, jsonHandle, createTargetFile)
}
export function deactivate() {}
