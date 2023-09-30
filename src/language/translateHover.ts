import { window, TextDocument, Position, Hover } from "vscode"
import { translate } from "../utils/translate/translate.js"
import type { TeanslateResult } from "../index.js"
import { getType } from "../utils/getType"

export const hoverProvider = async (document: TextDocument, position: Position) => {
	const editor = window.activeTextEditor
	let text = document.getText(document.getWordRangeAtPosition(position)).trim()
	console.log(text)

	if (editor) {
		// 获取鼠标选择区域文本
		const selectionText = editor.document.getText(editor.selection)
		console.log(selectionText)

		if (selectionText) {
			text = selectionText
		}
	}
	const translateResult: TeanslateResult = await translate(text)
	if (translateResult.data.length !== 0) {
		console.log(1)

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
		return new Hover(`译：${res}`)
	}
}
