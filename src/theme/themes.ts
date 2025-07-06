import { base as film_black_base, colors as film_black_colors, name as film_black_name, tokenColors as film_black_tokenColors } from './colors/film_black'
import { base as film_light_base, colors as film_light_colors, name as film_light_name, tokenColors as film_light_tokenColors } from './colors/film_light'

export const themes = [{
    name: film_light_name,
    base: film_light_base,
    colors: film_light_colors,
    tokenColors: film_light_tokenColors,
}, {
    name: film_black_name,
    base: film_black_base,
    colors: film_black_colors,
    tokenColors: film_black_tokenColors,
}]

export const alpha = (color: string, alpha: string | number) => {
    return `${color}${alpha}`
}
