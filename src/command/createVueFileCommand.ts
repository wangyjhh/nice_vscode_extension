import { window, workspace, Uri } from "vscode"
import { strToUint8Arr } from "../utils/strToUnit8Array/index.js"

export const createVueFileCommand = (uri: Uri) => {
	let extname = ".vue"
	let content = `<template>\n\n</template>\n\n<script lang='ts' setup>\nimport { ref } from "vue"\n\n</script>\n\n<style lang='scss' scoped>\n\n</style>`
	window.showInputBox({ prompt: "输入文件名" }).then((fileName) => {
		if (fileName) {
			const filePath = Uri.joinPath(uri, fileName + extname)
			workspace.fs.writeFile(filePath, strToUint8Arr(content))
		}
	})
}
