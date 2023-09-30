import { ExtensionContext, commands, languages, CancellationToken, TextDocument, Position, Hover, window } from "vscode"
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

	const hoverDisposable = languages.registerHoverProvider(
		{ pattern: "**" },
		{
			provideHover: (document: TextDocument, position: Position) => {
				const editor = window.activeTextEditor
				let text = document.getText(document.getWordRangeAtPosition(position)).trim()
				if (editor) {
					// 获取鼠标选择区域文本
					const selectionText = editor.document.getText(editor.selection)
					if (selectionText) {
						text = selectionText
					}
				}
				// const result = await translate(text)
				// if (result.dict) {
				return new Hover(`译：${text}`)
				// }
			},
		}
	)

	context.subscriptions.push(
		translate,
		toUpperOrLowerCase,
		theFirstLetterReverse,
		jsonHandle,
		createTsFile,
		createVueFile,
		createJsFile,
		createTargetFile,
		hoverDisposable
	)
}
export function deactivate() {}
