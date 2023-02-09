import { test, expect } from "vitest"
import { translate } from "../src/utils/translate/translate"
import { theFirstLetterReverse, isString } from "../src/utils/string/string"

test("init", () => {
	expect(true).toBe(true)
})

test("translate", async () => {
	const text = "hello"
	const translateResult = (await translate(text)).data.translateResult[0][0].tgt
	console.log(translateResult)

	expect(translateResult).toBe("你好")
})

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

test("textIsString", async () => {
	const text: any = "hello"
	expect(isString(text)).toBe(true)
})
