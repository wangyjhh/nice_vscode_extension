import * as vscode from "vscode"
import { translate } from "./utils/translate/translate.js"

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

	let toUpperCaseCommand = vscode.commands.registerCommand("wyj.toUpperCaseCommand", async () => {
		const editor = vscode.window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			vscode.window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}

		const upperCaseResult = selectionText.toUpperCase()
		if (!upperCaseResult) {
			vscode.window.showErrorMessage("转换大写字母失败")
			return
		}
		editor.document.getText(editor.selection)
		editor.document
	})
}

export function deactivate() {}
