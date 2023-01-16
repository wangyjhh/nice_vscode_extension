import { get } from "../axios/request.js"

export const translate = async (text: string) => {
	return await get(text)
}
