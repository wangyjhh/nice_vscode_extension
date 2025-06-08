import { log } from 'node:console'
import { existsSync, writeFileSync } from 'node:fs'
import { alpha, colors } from './colors'
import { createTheme } from './theme'

const THEME_NAME = 'wangyj-film-black'

const filmBlack = createTheme({
    name: THEME_NAME,
    colors,
})

// log(filmBlack)

if (existsSync(`./src/theme/dist/${THEME_NAME}.json`)) {
    writeFileSync(`./src/theme/dist/${THEME_NAME}.json`, JSON.stringify(filmBlack, null, 4))
    log('generate theme success')
}
else {
    log('theme file not exists')
}
