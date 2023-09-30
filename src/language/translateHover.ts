import * as vscode from "vscode"

// class HoverProvider implements vscode.HoverProvider {
// 	provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Hover> | null {
// 		// 获取当前单词
// 		const word = document.getWordRangeAtPosition(position)
// 		if (!word) {
// 			return null
// 		}
// 		const definition = `This is the definition of the word '${word}'.`

// 		// 创建一个新的 Hover 对象
// 		const hover = new vscode.Hover([new vscode.MarkdownString(definition)], word)

// 		return hover
// 	}
// }

// // 注册 HoverProvider
// vscode.languages.registerHoverProvider("*", new HoverProvider())
vscode.languages.registerHoverProvider("*", {
	provideHover(document, position, token) {
		console.log(position)
		return new vscode.Hover("I am a hover!")
	},
})
