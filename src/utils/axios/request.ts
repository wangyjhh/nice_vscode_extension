import axios from "axios"

export const get = async (data: string) => {
	let url = `https://yujiehh.top:3008/youdao/translate?q=${data}`
	return await axios.get(url)
}
