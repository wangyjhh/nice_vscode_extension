import { test, expect } from "vitest"
import { translateWord, translate } from "../src/utils/translate/translate"
import { theFirstLetterReverse, getDocAstObjectKeyInfo } from "../src/utils/string/string"
import type { TeanslateWordResult, TeanslateResult } from "../src/index"
import { getType } from "../src/utils/getType/index"

test("init", () => {
	expect(true).toBe(true)
})

test("getType", () => {
	expect(getType("NOUN")).toBe("名词")
})

test("translateWord", async () => {
	const text = "hover"
	const translateResult: TeanslateWordResult = await translateWord(text)
	const trans = translateResult.data[0].translations
	const transMap = new Map<string, string[]>()

	trans.forEach((t) => {
		if (transMap.get(t.pos)) {
			transMap.get(t.pos)!.push(t.target)
		} else {
			transMap.set(t.pos, [t.target])
		}
	})

	let res = ""
	for (const t of transMap) {
		let type = getType(t[0])
		res += `${type}: ${t[1].join(",")} \n`
	}

	// console.log(res)

	// expect(newTrans).toStrictEqual([
	// 	{ type: "NOUN", values: ["悬停", "翱翔", "徘徊", "气垫", "悬浮", "萦绕"] },
	// 	{ type: "VERB", values: ["鼠标悬停", "盘旋"] },
	// ])
})

test("translate", async () => {
	const text = "Enum Member name `NOUN` must match one of the following formats"
	const translateResult: TeanslateResult = await translate(text)
	const trans = translateResult.data

	console.log(trans)

	expect(trans).toBe("枚举成员名称“NOUN”必须与以下格式之一匹配")
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
