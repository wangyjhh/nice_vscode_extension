import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "translation-vscode-extension" is now active!')
	let translate = vscode.commands.registerCommand("translation", () => {
		
		vscode.window.showInformationMessage("Hello World from translation_vscode_extension!")
	})
}

export function deactivate() {}
