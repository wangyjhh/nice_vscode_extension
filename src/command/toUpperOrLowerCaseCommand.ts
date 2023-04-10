import { window } from "vscode"
import { isUpperCase } from "../utils/string/string.js"
export const toUpperOrLowerCaseCommand = async () => {
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
}
