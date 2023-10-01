import $http from "../axios/request.js"

export const translateWord = async (text: string) => {
	const { data: res } = await $http.post("https://api.relingo.net/api/lookupDict2", {
		words: [`${text}`],
		to: "zh",
	})
	return res
}

export const translate = async (text: string) => {
	const { data: res } = await $http.get("https://api.asilu.com/fanyi/", { params: { q: text } })
	return res
}
