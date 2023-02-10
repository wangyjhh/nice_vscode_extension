import { test, expect } from "vitest"
import { translate } from "../src/utils/translate/translate"
import { theFirstLetterReverse, getDocAstObjectKeyInfo } from "../src/utils/string/string"

test("init", () => {
	expect(true).toBe(true)
})

// test("translate", async () => {
// 	const text = "hello"
// 	const translateResult = (await translate(text)).data.translateResult[0][0].tgt
// 	console.log(translateResult)

// 	expect(translateResult).toBe("你好")
// })

test("toUpperOrLowerCase", async () => {
	const text: string = "HELLO"
	const text1: string = "hello"
	const upperCaseResult = text.toLowerCase()
	const upperCaseResult1 = text.toLocaleLowerCase()
	const upperCaseResult2 = text1.toUpperCase()
	const upperCaseResult3 = text1.toLocaleUpperCase()
	expect(upperCaseResult).toBe("hello")
	expect(upperCaseResult1).toBe("hello")
	expect(upperCaseResult2).toBe("HELLO")
	expect(upperCaseResult3).toBe("HELLO")
})

test("theFirstLetterReverse", async () => {
	const text: string = "hello"
	const newText = theFirstLetterReverse(text)
	expect(newText).toBe("Hello")
})

test("jsonHandleTest", async () => {
	const code = `
	let a = { name: "wyj1", age : 23 }
	let b = { name: "wyj2", age : 24 }
	let c = { name: "wyj3", age : 25 }
	let d = { name: "wyj4", age : 26 }
	`
	const index = 15
	const keyInfoArr = getDocAstObjectKeyInfo(code, index)

	expect(keyInfoArr).toStrictEqual([
		{
			start: { line: 2, column: 11, index: 12 },
			end: { line: 2, column: 15, index: 16 },
			key: "name",
		},
		{
			start: { line: 2, column: 25, index: 26 },
			end: { line: 2, column: 28, index: 29 },
			key: "age",
		},
	])
})
