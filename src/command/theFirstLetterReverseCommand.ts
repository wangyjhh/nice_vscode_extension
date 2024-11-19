import { window } from 'vscode'
import { theFirstLetterReverse } from '../utils/string/string.js'

export const theFirstLetterReverseCommand = async () => {
    const editor = window.activeTextEditor
    if (!editor) {
        return
    }
    const selectionText = editor.document.getText(editor.selection)
    if (!selectionText) {
        window.showWarningMessage('请先选择文本后在执行该命令！')
        return
    }

    const result = theFirstLetterReverse(selectionText)
    if (!result) {
        window.showErrorMessage('首字母转换大小写失败')
        return
    }

    editor.edit((editBuilder) => {
        editBuilder.replace(editor.selection, result)
    })
}
