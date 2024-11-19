import { Position, Range, window } from 'vscode'
import { getDocAstObjectKeyInfo } from '../utils/string/string.js'

export const jsonHandleCommand = async () => {
    const editor = window.activeTextEditor
    if (!editor) {
        return
    }

    const curPos = editor.selection.active
    const offset = editor.document.offsetAt(curPos)
    const result: any = getDocAstObjectKeyInfo(editor.document.getText(), offset)

    editor.edit((editBuilder) => {
        if (!result) {
            return
        }
        result.forEach((i: any) => {
            editBuilder.replace(new Range(new Position(i.start.line - 1, i.start.column), new Position(i.end.line - 1, i.end.column)), `"${i.key}"`)
        })
    })
}
