import { window } from "vscode"
import { translate } from "../utils/translate/translate.js"
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
	const translateResult = (await translate(selectionText)).data.translateResult[0][0].tgt
	if (!translateResult) {
		window.showErrorMessage("翻译失败")
		return
	}
	window.showInformationMessage(translateResult)
}
