import { window, workspace, Uri } from "vscode"
import { strToUint8Arr } from "../utils/strToUnit8Array/index.js"

export const createTargetFileCommand = (uri: Uri) => {
	let ext: string
	let content: string
	if (workspace.getConfiguration().get("nice_vscode_extension.模式") === "默认") {
		ext = workspace.getConfiguration().get("nice_vscode_extension.扩展名")
			? workspace.getConfiguration().get("nice_vscode_extension.扩展名")!
			: "txt"
		if (
			workspace.getConfiguration().get("nice_vscode_extension.扩展名") &&
			workspace.getConfiguration().get("nice_vscode_extension.扩展名") === "vue"
		) {
			content = `<template>\n\n</template>\n\n<script lang='ts' setup>\n\n</script>\n\n<style lang='scss' scoped>\n\n</style>`
		}
	} else {
		ext = workspace.getConfiguration().get("nice_vscode_extension.自定义扩展名")
			? workspace.getConfiguration().get("nice_vscode_extension.自定义扩展名")!
			: "txt"
	}
	window.showInputBox({ prompt: "输入文件名" }).then((fileName) => {
		if (fileName) {
			const filePath = Uri.joinPath(uri, fileName + "." + ext)
			workspace.fs.writeFile(filePath, strToUint8Arr(content))
		}
	})
}
