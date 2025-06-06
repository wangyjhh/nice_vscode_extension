import { log } from 'node:console'
import { existsSync, writeFileSync } from 'node:fs'
import { alpha, colors } from './colors'
import { createTheme } from './theme'

const THEME_NAME = 'wangyj-fujifilm-black'

const fujifilmBlack = createTheme({
    name: THEME_NAME,
    colors,
})

// log(fujifilmBlack)

if (existsSync(`./src/theme/dist/${THEME_NAME}.json`)) {
    writeFileSync(`./src/theme/dist/${THEME_NAME}.json`, JSON.stringify(fujifilmBlack, null, 4))
    log('generate theme success')
}
else {
    log('theme file not exists')
}
