export const strToUint8Arr = (str: string) => {
	const buffer = []
	for (let i of str) {
		const _code = i.charCodeAt(0)
		if (_code < 0x80) {
			buffer.push(_code)
		} else if (_code < 0x800) {
			buffer.push(0xc0 + (_code >> 6))
			buffer.push(0x80 + (_code & 0x3f))
		} else if (_code < 0x10000) {
			buffer.push(0xe0 + (_code >> 12))
			buffer.push(0x80 + ((_code >> 6) & 0x3f))
			buffer.push(0x80 + (_code & 0x3f))
		}
	}
	return Uint8Array.from(buffer)
}
