import * as vscode from "vscode"
import { translate } from "./utils/translate/translate.js"
import { theFirstLetterReverse, isUpperCase } from "./utils/string/string.js"

export function activate(context: vscode.ExtensionContext) {
	let translateCommand = vscode.commands.registerCommand("wyj.translationCommand", async () => {
		const editor = vscode.window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			vscode.window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}
		const translateResult = (await translate(selectionText)).data.translateResult[0][0].tgt
		if (!translateResult) {
			vscode.window.showErrorMessage("翻译失败")
			return
		}
		vscode.window.showInformationMessage(translateResult)
	})

	let toUpperOrLowerCaseCommand = vscode.commands.registerCommand("wyj.toUpperOrLowerCaseCommand", async () => {
		const editor = vscode.window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			vscode.window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}

		const result = isUpperCase(selectionText) ? selectionText.toLocaleLowerCase() : selectionText.toLocaleUpperCase()
		if (!result) {
			vscode.window.showErrorMessage("转换大小写失败")
			return
		}

		editor.edit((editBuilder) => {
			editBuilder.replace(editor.selection, result)
		})
	})

	let theFirstLetterReverseCommand = vscode.commands.registerCommand("wyj.theFirstLetterReverseCommand", async () => {
		const editor = vscode.window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			vscode.window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}

		const result = theFirstLetterReverse(selectionText)
		if (!result) {
			vscode.window.showErrorMessage("首字母转换大小写失败")
			return
		}

		editor.edit((editBuilder) => {
			editBuilder.replace(editor.selection, result)
		})
	})
}

export function deactivate() {}
