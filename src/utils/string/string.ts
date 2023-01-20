// 判断首字母是否为大写
export const theFirstLetterIsUpperCase = (text: string): boolean => {
	return text[0] === text[0].toLocaleUpperCase()
}

//将首字母转为大写或小写（首字母大写则转小写，否则转大写）
export const theFirstLetterReverse = (text: string): string => {
	let newText: string
	if (theFirstLetterIsUpperCase(text)) {
		newText = text[0].toLocaleLowerCase().concat(text.slice(1, text.length))
	} else {
		newText = text[0].toLocaleUpperCase().concat(text.slice(1, text.length))
	}
	return newText
}

// 判断字符是否为大写
export const isUpperCase = (text: string): boolean => {
	return text === text.toLocaleUpperCase()
}
