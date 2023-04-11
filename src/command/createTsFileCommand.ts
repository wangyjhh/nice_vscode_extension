import { window, workspace, Uri } from "vscode"
import { strToUint8Arr } from "../utils/strToUnit8Array/index.js"

export const createTsFileCommand = (uri: Uri) => {
	let extname = ".ts"
	window.showInputBox({ prompt: "输入文件名" }).then((fileName) => {
		if (fileName) {
			const filePath = Uri.joinPath(uri, fileName + extname)
			workspace.fs.writeFile(filePath, strToUint8Arr())
		}
	})
}
