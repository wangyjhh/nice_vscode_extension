import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "translation-vscode-extension" is now active!')
	let translate = vscode.commands.registerCommand("translation", async () => {
		const editor = vscode.window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			vscode.window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}
		// const translateResult = await translate(selectionText)
	})
}

export function deactivate() {}
