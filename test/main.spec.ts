import { test, expect } from "vitest"
import { translate } from "../src/utils/translate/translate"

test("init", () => {
	expect(true).toBe(true)
})

test("init", async () => {
	const text = "hello"
	const translateResult = (await translate(text)).data.translateResult[0][0].tgt
	console.log(translateResult)

	expect(translateResult).toBe("你好")
})
