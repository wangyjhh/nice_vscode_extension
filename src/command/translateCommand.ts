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
	if (translateResult.data.length === 0) {
		window.showErrorMessage("翻译失败")
		return
	}

	const trans = translateResult.data[0].translations

	const transMap = new Map<string, string[]>()

	trans.forEach((t) => {
		if (transMap.get(t.pos)) {
			transMap.get(t.pos)!.push(t.target)
		} else {
			transMap.set(t.pos, [t.target])
		}
	})

	let res = ""
	for (const t of transMap) {
		let type = getType(t[0])
		res += `${type}: ${t[1].join(",")} \n`
	}

	window.showInformationMessage("翻译", { modal: true, detail: res })
}
