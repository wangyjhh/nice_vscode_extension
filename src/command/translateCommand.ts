import { window } from "vscode"
import { translate } from "../utils/translate/translate.js"
import type { TeanslateResult } from "../index.js"
import { getType } from "../utils/getType"
export const translateCommand = async () => {
	const editor = window.activeTextEditor
	if (!editor) {
		return
	}
	const selectionText = editor.document.getText(editor.selection)
	if (!selectionText) {
		window.showWarningMessage("请先选择文本后在执行该命令！")
		return
	}
	const translateResult: TeanslateResult = await translate(selectionText)
	if (translateResult.error) {
		window.showErrorMessage("翻译失败")
		return
	}

	const trans = translateResult.data

	window.showInformationMessage(trans)
}
