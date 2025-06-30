import { base as film_black_base, colors as film_black_colors, name as film_black_name, tokenColors as film_black_tokenColors } from './colors/film_black'
import { base as film_light_base, colors as film_light_colors, name as film_light_name, tokenColors as film_light_tokenColors } from './colors/film_light'

export const name = film_light_name
export const base = film_light_base
export const colors = film_light_colors
export const tokenColors = film_light_tokenColors

export const alpha = (color: string, alpha: string | number) => {
    return `${color}${alpha}`
}
