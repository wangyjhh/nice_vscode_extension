import { window, TextDocument, Position, Hover } from "vscode"
import { translateWord } from "../utils/translate/translate.js"
import type { TeanslateWordResult } from "../index.js"
import { getType } from "../utils/getType"

export const hoverProvider = async (document: TextDocument, position: Position) => {
	const editor = window.activeTextEditor
	let text = document.getText(document.getWordRangeAtPosition(position)).trim()
	let res = "#### 翻译：\n"
	if (editor) {
		// 获取鼠标选择区域文本
		const selectionText = editor.document.getText(editor.selection)
		console.log(selectionText)

		if (selectionText) {
			text = selectionText
		}
	}
	const translateResult: TeanslateWordResult = await translateWord(text.toLocaleLowerCase())
	if (translateResult.data.length !== 0) {
		const trans = translateResult.data[0].translations
		const transMap = new Map<string, string[]>()
		trans.forEach((t) => {
			if (transMap.get(t.pos)) {
				transMap.get(t.pos)!.push(t.target)
			} else {
				transMap.set(t.pos, [t.target])
			}
		})
		for (const t of transMap) {
			let type = getType(t[0])
			res += `- **${type}**: ${t[1].join(",")}\n`
		}
		return new Hover(`${res}`)
	}
}
