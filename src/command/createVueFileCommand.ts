import { Uri, window, workspace } from 'vscode'
import { strToUint8Arr } from '../utils/strToUnit8Array/index.js'

export const createVueFileCommand = (uri: Uri) => {
    const extname = '.vue'
    const content = `<template>\n\n</template>\n\n<script lang='ts' setup>\nimport { ref } from "vue"\n\n</script>\n\n<style lang='scss' scoped>\n\n</style>`
    window.showInputBox({ prompt: '输入文件名' }).then((fileName) => {
        if (fileName) {
            const filePath = Uri.joinPath(uri, fileName + extname)
            workspace.fs.writeFile(filePath, strToUint8Arr(content))
        }
    })
}
