import { ExtensionContext, commands, window, Range, Position } from "vscode"
import { translate } from "./utils/translate/translate.js"
import { theFirstLetterReverse, isUpperCase, getDocAstObjectKeyInfo } from "./utils/string/string.js"

export function activate(context: ExtensionContext) {
	let translateCommand = commands.registerCommand("wyj.translationCommand", async () => {
		const editor = window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}
		const translateResult = (await translate(selectionText)).data.translateResult[0][0].tgt
		if (!translateResult) {
			window.showErrorMessage("翻译失败")
			return
		}
		window.showInformationMessage(translateResult)
	})

	let toUpperOrLowerCaseCommand = commands.registerCommand("wyj.toUpperOrLowerCaseCommand", async () => {
		const editor = window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}

		const result = isUpperCase(selectionText) ? selectionText.toLocaleLowerCase() : selectionText.toLocaleUpperCase()
		if (!result) {
			window.showErrorMessage("转换大小写失败")
			return
		}

		editor.edit((editBuilder) => {
			editBuilder.replace(editor.selection, result)
		})
	})

	let theFirstLetterReverseCommand = commands.registerCommand("wyj.theFirstLetterReverseCommand", async () => {
		const editor = window.activeTextEditor
		if (!editor) {
			return
		}
		const selectionText = editor.document.getText(editor.selection)
		if (!selectionText) {
			window.showWarningMessage("请先选择文本后在执行该命令！")
			return
		}

		const result = theFirstLetterReverse(selectionText)
		if (!result) {
			window.showErrorMessage("首字母转换大小写失败")
			return
		}

		editor.edit((editBuilder) => {
			editBuilder.replace(editor.selection, result)
		})
	})

	let jsonHandleCommand = commands.registerCommand("wyj.jsonStringifyCommand", async () => {
		const editor = window.activeTextEditor
		if (!editor) {
			return
		}

		let curPos = editor.selection.active
		let offset = editor.document.offsetAt(curPos)
		let result: any = getDocAstObjectKeyInfo(editor.document.getText(), offset)

		editor.edit((editBuilder) => {
			if (!result) {
				return
			}
			result.forEach((i: any) => {
				editBuilder.replace(
					new Range(new Position(i.start.line - 1, i.start.column), new Position(i.end.line - 1, i.end.column)),
					`"${i.key}"`
				)
			})
		})
	})
}
export function deactivate() {}
