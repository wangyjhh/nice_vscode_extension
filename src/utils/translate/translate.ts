import { get } from "../axios/request"

export const translate = async (text: string) => {
	return await get(text)
}
