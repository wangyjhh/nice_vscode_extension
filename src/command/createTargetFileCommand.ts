import { Uri, window, workspace } from 'vscode'
import { strToUint8Arr } from '../utils/strToUnit8Array/index.js'

export const createTargetFileCommand = (uri: Uri) => {
    const extname = workspace.getConfiguration().get('nice_vscode_extension.自定义扩展名')
        ? workspace.getConfiguration().get('nice_vscode_extension.自定义扩展名')!
        : '.txt'
    window.showInputBox({ prompt: '输入文件名' }).then((fileName) => {
        if (fileName) {
            const filePath = Uri.joinPath(uri, fileName + extname)
            workspace.fs.writeFile(filePath, strToUint8Arr())
        }
    })
}
