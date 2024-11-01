export const strToUint8Arr = (str?: string) => {
    if (str === undefined) {
        return new Uint8Array()
    }
    const buffer = []
    for (const i of str) {
        const _code = i.charCodeAt(0)
        if (_code < 0x80) {
            buffer.push(_code)
        }
        else if (_code < 0x800) {
            buffer.push(0xC0 + (_code >> 6))
            buffer.push(0x80 + (_code & 0x3F))
        }
        else if (_code < 0x10000) {
            buffer.push(0xE0 + (_code >> 12))
            buffer.push(0x80 + ((_code >> 6) & 0x3F))
            buffer.push(0x80 + (_code & 0x3F))
        }
    }
    return Uint8Array.from(buffer)
}
