import { log } from 'node:console'
import { writeFileSync } from 'node:fs'
import { createTheme } from './createTheme'
import { themes } from './themes'

for (const th of themes) {
    const theme = createTheme(th)
        
    writeFileSync(`./src/theme/dist/${theme.name}.json`, JSON.stringify(theme, null, 4))
    log(`[${theme.name}] generate theme success`)
}
