import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

// 判断首字母是否为大写
export const theFirstLetterIsUpperCase = (text: string): boolean => {
    return text[0] === text[0].toLocaleUpperCase()
}

// 将首字母转为大写或小写（首字母大写则转小写，否则转大写）
export const theFirstLetterReverse = (text: string): string => {
    let newText: string
    if (theFirstLetterIsUpperCase(text)) {
        newText = text[0].toLocaleLowerCase().concat(text.slice(1, text.length))
    }
    else {
        newText = text[0].toLocaleUpperCase().concat(text.slice(1, text.length))
    }
    return newText
}

// 判断字符是否为大写
export const isUpperCase = (text: string): boolean => {
    return text === text.toLocaleUpperCase()
}

// 获取当前光标所在对象ast中对象所有key的位置及name
export const getDocAstObjectKeyInfo = (code: string, index: number) => {
    let obj: any

    const ast = parse(code)

    traverse(ast, {
        ObjectExpression(path) {
            if (index >= path.node.start! && index <= path.node.end!) {
                obj = path.node
            }
        },
    })

    const objArr: any[] = []
    obj.properties.forEach((i: any) => {
        objArr.push({
            start: {
                line: i.key.loc.start.line,
                column: i.key.loc.start.column,
                index: i.key.loc.start.index,
            },
            end: {
                line: i.key.loc.end.line,
                column: i.key.loc.end.column,
                index: i.key.loc.end.index,
            },
            key: i.key.loc.identifierName,
        })
    })
    return objArr
}
