export const baseinfo = {
    name: 'Wangyj Black',
    base: 'vs-dark',
    semanticHighlighting: true,
    semanticTokenColors: {
        namespace: '#1e808f', // 命名空间
        property: '#B8AB6E', // 属性
        interface: '#1e808f', // 接口
        type: '#1e808f', // 类型
        class: '#1e808f', // 类
    },
}

export const colors = {
    // 对比色
    'contrastActiveBorder': '', // 活动元素周围的额外边框，用于将它们与其他元素分开，以获得更大的对比度。
    'contrastBorder': '', // 元素周围的额外边框，用于将它们与其他元素分开以获得更大的对比度。
    // 基色
    'focusBorder': '', // 聚焦元素的整体边框颜色。仅当未被组件覆盖时，才会使用此颜色。
    'foreground': '', // 整体前景色。仅当未被组件覆盖时，才会使用此颜色。
    'disabledForeground': '', // 已禁用元素的总体前景。仅当未被组件覆盖时，才会使用此颜色。
    'widget.border': '', // 编辑器内 查找/替换 等 小部件 的边框颜色。
    'widget.shadow': '', // 编辑器内 查找/替换 等 小部件 的阴影颜色。
    'selection.background': '', // 工作台中文本选择的背景颜色（对于输入字段或文本区域，不适用于编辑器和终端中的选择）。
    'descriptionForeground': '', // 提供其他信息（例如标签）的说明文本的前景色。
    'errorForeground': '', // 错误消息的整体前景色（此颜色仅在未被组件覆盖时使用）。
    'icon.foreground': '', // 工作台中图标的默认颜色。
    'sash.hoverBorder': '', // 可拖动窗扇的悬停边框颜色。
    // 窗口边框   macOS 和 Linux（不是 Windows）上受支持，并且仅在启用自定义标题栏 （ "window.titleBarStyle": "custom" ） 时受支持。
    'window.activeBorder': '', // 活动（聚焦）窗口的边框颜色。
    'window.inactiveBorder': '', // 非活动（未聚焦）窗口的边框颜色。
    // 文本颜色
    'textBlockQuote.background': '', // 文本中块引用的背景颜色。
}

export const tokenColors = [
    {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
            foreground: '#758575dd',
        },
    },
    {
        scope: [
            'delimiter.bracket',
            'delimiter',
            'invalid.illegal.character-not-allowed-here.html',
            'keyword.operator.rest',
            'keyword.operator.spread',
            'keyword.operator.type.annotation',
            'keyword.operator.relational',
            'keyword.operator.assignment',
            'meta.brace',
            'meta.tag.block.any.html',
            'meta.tag.inline.any.html',
            'meta.tag.structure.input.void.html',
            'meta.type.annotation',
            'meta.embedded.block.github-actions-expression',
            'storage.type.function.arrow',
            'keyword.operator.type',
            'meta.objectliteral.ts',
            'punctuation',
        ],
        settings: {
            foreground: '#666666cc',
        },
    },
    {
        scope: ['constant', 'entity.name.constant', 'variable.language', 'meta.definition.variable'],
        settings: {
            foreground: '#CB947C',
        },
    },
    {
        scope: ['entity', 'entity.name'],
        settings: {
            foreground: '#81A468',
        },
    },
    {
        scope: 'variable.parameter.function',
        settings: {
            foreground: '#dbd7cacc',
        },
    },
    {
        scope: ['entity.name.tag', 'tag.html'],
        settings: {
            foreground: '#2daa75',
        },
    },
    {
        scope: 'entity.name.function',
        settings: {
            foreground: '#81A468',
        },
    },
    {
        scope: ['keyword', 'storage.type.class.jsdoc'],
        settings: {
            foreground: '#2daa75',
        },
    },
    {
        scope: ['storage', 'storage.type', 'support.type.builtin', 'constant.language.undefined', 'constant.language.null'],
        settings: {
            foreground: '#cb7676',
        },
    },
    {
        scope: ['text.html.derivative', 'storage.modifier.package', 'storage.modifier.import', 'storage.type.java'],
        settings: {
            foreground: '#dbd7cacc',
        },
    },
    {
        scope: ['string', 'string punctuation.section.embedded source', 'attribute.value'],
        settings: {
            foreground: '#c98a7d',
        },
    },
    {
        scope: ['punctuation.definition.string', 'punctuation.support.type.property-name'],
        settings: {
            foreground: '#c98a7d99',
        },
    },
    {
        scope: 'support',
        settings: {
            foreground: '#B8AB6E',
        },
    },
    {
        scope: ['property', 'meta.property-name', 'meta.object-literal.key', 'entity.name.tag.yaml', 'attribute.name'],
        settings: {
            foreground: '#B8AB6E',
        },
    },
    {
        scope: ['entity.other.attribute-name', 'invalid.deprecated.entity.other.attribute-name.html'],
        settings: {
            foreground: '#BB9971',
        },
    },
    {
        scope: ['variable', 'identifier'],
        settings: {
            foreground: '#BB9971',
        },
    },
    {
        scope: ['support.type.primitive', 'entity.name.type'],
        settings: {
            foreground: '#3aa675',
        },
    },
    {
        scope: 'namespace',
        settings: {
            foreground: '#1e808f',
        },
    },
    {
        scope: ['keyword.operator', 'keyword.operator.assignment.compound', 'meta.var.expr.ts'],
        settings: {
            foreground: '#c4704f',
        },
    },
    {
        scope: 'invalid.broken',
        settings: {
            fontStyle: 'italic',
            foreground: '#fdaeb7',
        },
    },
    {
        scope: 'invalid.deprecated',
        settings: {
            fontStyle: 'italic',
            foreground: '#fdaeb7',
        },
    },
    {
        scope: 'invalid.illegal',
        settings: {
            fontStyle: 'italic',
            foreground: '#fdaeb7',
        },
    },
    {
        scope: 'invalid.unimplemented',
        settings: {
            fontStyle: 'italic',
            foreground: '#fdaeb7',
        },
    },
    {
        scope: 'carriage-return',
        settings: {
            fontStyle: 'italic underline',
            background: '#f97583',
            foreground: '#24292e',
            content: '^M',
        },
    },
    {
        scope: 'message.error',
        settings: {
            foreground: '#fdaeb7',
        },
    },
    {
        scope: 'string variable',
        settings: {
            foreground: '#c98a7d',
        },
    },
    {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
            foreground: '#c4704f',
        },
    },
    {
        scope: [
            'string.regexp.character-class',
            'string.regexp constant.character.escape',
            'string.regexp source.ruby.embedded',
            'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
            foreground: '#c98a7d',
        },
    },
    {
        scope: 'string.regexp constant.character.escape',
        settings: {
            foreground: '#e6cc77',
        },
    },
    {
        scope: ['support.constant'],
        settings: {
            foreground: '#CB947C',
        },
    },
    {
        scope: ['constant.numeric', 'number'],
        settings: {
            foreground: '#1e808f',
        },
    },
    {
        scope: ['keyword.other.unit'],
        settings: {
            foreground: '#cb7676',
        },
    },
    {
        scope: ['constant.language.boolean', 'constant.language'],
        settings: {
            foreground: '#1e808f',
        },
    },
    {
        scope: 'meta.module-reference',
        settings: {
            foreground: '#4d9975',
        },
    },
    {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
            foreground: '#d4976c',
        },
    },
    {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
            fontStyle: 'bold',
            foreground: '#4d9975',
        },
    },
    {
        scope: 'markup.quote',
        settings: {
            foreground: '#1e808f',
        },
    },
    {
        scope: 'markup.italic',
        settings: {
            fontStyle: 'italic',
            foreground: '#dbd7cacc',
        },
    },
    {
        scope: 'markup.bold',
        settings: {
            fontStyle: 'bold',
            foreground: '#dbd7cacc',
        },
    },
    {
        scope: 'markup.raw',
        settings: {
            foreground: '#4d9975',
        },
    },
    {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: {
            background: '#86181d',
            foreground: '#fdaeb7',
        },
    },
    {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: {
            background: '#144620',
            foreground: '#85e89d',
        },
    },
    {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
            background: '#c24e00',
            foreground: '#ffab70',
        },
    },
    {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
            foreground: '#2f363d',
            background: '#79b8ff',
        },
    },
    {
        scope: 'meta.diff.range',
        settings: {
            foreground: '#b392f0',
            fontStyle: 'bold',
        },
    },
    {
        scope: 'meta.diff.header',
        settings: {
            foreground: '#79b8ff',
        },
    },
    {
        scope: 'meta.separator',
        settings: {
            fontStyle: 'bold',
            foreground: '#79b8ff',
        },
    },
    {
        scope: 'meta.output',
        settings: {
            foreground: '#79b8ff',
        },
    },
    {
        scope: [
            'brackethighlighter.tag',
            'brackethighlighter.curly',
            'brackethighlighter.round',
            'brackethighlighter.square',
            'brackethighlighter.angle',
            'brackethighlighter.quote',
        ],
        settings: {
            foreground: '#d1d5da',
        },
    },
    {
        scope: 'brackethighlighter.unmatched',
        settings: {
            foreground: '#fdaeb7',
        },
    },
    {
        scope: [
            'constant.other.reference.link',
            'string.other.link',
            'punctuation.definition.string.begin.markdown',
            'punctuation.definition.string.end.markdown',
        ],
        settings: {
            foreground: '#c98a7d',
        },
    },
    {
        scope: ['markup.underline.link.markdown'],
        settings: {
            foreground: '#dedcd590',
            fontStyle: 'underline',
        },
    },
    {
        scope: ['type.identifier'],
        settings: {
            foreground: '#1e808f',
        },
    },
    {
        scope: ['entity.other.attribute-name.html.vue'],
        settings: {
            foreground: '#81A468',
        },
    },
    {
        scope: ['invalid.illegal.unrecognized-tag.html'],
        settings: {
            fontStyle: 'normal',
        },
    },
]

export const rules = [
    {
        token: 'comment',
        foreground: '758575dd',
    },
    {
        token: 'punctuation.definition.comment',
        foreground: '758575dd',
    },
    {
        token: 'string.comment',
        foreground: '758575dd',
    },
    {
        token: 'delimiter.bracket',
        foreground: '666666cc',
    },
    {
        token: 'delimiter',
        foreground: '666666cc',
    },
    {
        token: 'invalid.illegal.character-not-allowed-here.html',
        foreground: '666666cc',
    },
    {
        token: 'keyword.operator.rest',
        foreground: '666666cc',
    },
    {
        token: 'keyword.operator.spread',
        foreground: '666666cc',
    },
    {
        token: 'keyword.operator.type.annotation',
        foreground: '666666cc',
    },
    {
        token: 'keyword.operator.relational',
        foreground: '666666cc',
    },
    {
        token: 'keyword.operator.assignment',
        foreground: '666666cc',
    },
    {
        token: 'meta.brace',
        foreground: '666666cc',
    },
    {
        token: 'meta.tag.block.any.html',
        foreground: '666666cc',
    },
    {
        token: 'meta.tag.inline.any.html',
        foreground: '666666cc',
    },
    {
        token: 'meta.tag.structure.input.void.html',
        foreground: '666666cc',
    },
    {
        token: 'meta.type.annotation',
        foreground: '666666cc',
    },
    {
        token: 'meta.embedded.block.github-actions-expression',
        foreground: '666666cc',
    },
    {
        token: 'storage.type.function.arrow',
        foreground: '666666cc',
    },
    {
        token: 'keyword.operator.type',
        foreground: '666666cc',
    },
    {
        token: 'meta.objectliteral.ts',
        foreground: '666666cc',
    },
    {
        token: 'punctuation',
        foreground: '666666cc',
    },
    {
        token: 'constant',
        foreground: 'CB947C',
    },
    {
        token: 'entity.name.constant',
        foreground: 'CB947C',
    },
    {
        token: 'variable.language',
        foreground: 'CB947C',
    },
    {
        token: 'meta.definition.variable',
        foreground: 'CB947C',
    },
    {
        token: 'entity',
        foreground: '81A468',
    },
    {
        token: 'entity.name',
        foreground: '81A468',
    },
    {
        token: 'variable.parameter.function',
        foreground: 'dbd7cacc',
    },
    {
        token: 'entity.name.tag',
        foreground: '2daa75',
    },
    {
        token: 'tag.html',
        foreground: '2daa75',
    },
    {
        token: 'entity.name.function',
        foreground: '81A468',
    },
    {
        token: 'keyword',
        foreground: '2daa75',
    },
    {
        token: 'storage.type.class.jsdoc',
        foreground: '2daa75',
    },
    {
        token: 'storage',
        foreground: 'cb7676',
    },
    {
        token: 'storage.type',
        foreground: 'cb7676',
    },
    {
        token: 'support.type.builtin',
        foreground: 'cb7676',
    },
    {
        token: 'constant.language.undefined',
        foreground: 'cb7676',
    },
    {
        token: 'constant.language.null',
        foreground: 'cb7676',
    },
    {
        token: 'text.html.derivative',
        foreground: 'dbd7cacc',
    },
    {
        token: 'storage.modifier.package',
        foreground: 'dbd7cacc',
    },
    {
        token: 'storage.modifier.import',
        foreground: 'dbd7cacc',
    },
    {
        token: 'storage.type.java',
        foreground: 'dbd7cacc',
    },
    {
        token: 'string',
        foreground: 'c98a7d',
    },
    {
        token: 'string punctuation.section.embedded source',
        foreground: 'c98a7d',
    },
    {
        token: 'attribute.value',
        foreground: 'c98a7d',
    },
    {
        token: 'punctuation.definition.string',
        foreground: 'c98a7d99',
    },
    {
        token: 'punctuation.support.type.property-name',
        foreground: 'c98a7d99',
    },
    {
        token: 'support',
        foreground: 'B8AB6E',
    },
    {
        token: 'property',
        foreground: 'B8AB6E',
    },
    {
        token: 'meta.property-name',
        foreground: 'B8AB6E',
    },
    {
        token: 'meta.object-literal.key',
        foreground: 'B8AB6E',
    },
    {
        token: 'entity.name.tag.yaml',
        foreground: 'B8AB6E',
    },
    {
        token: 'attribute.name',
        foreground: 'B8AB6E',
    },
    {
        token: 'entity.other.attribute-name',
        foreground: 'BB9971',
    },
    {
        token: 'invalid.deprecated.entity.other.attribute-name.html',
        foreground: 'BB9971',
    },
    {
        token: 'variable',
        foreground: 'BB9971',
    },
    {
        token: 'identifier',
        foreground: 'BB9971',
    },
    {
        token: 'support.type.primitive',
        foreground: '3aa675',
    },
    {
        token: 'entity.name.type',
        foreground: '3aa675',
    },
    {
        token: 'namespace',
        foreground: '1e808f',
    },
    {
        token: 'keyword.operator',
        foreground: 'c4704f',
    },
    {
        token: 'keyword.operator.assignment.compound',
        foreground: 'c4704f',
    },
    {
        token: 'meta.var.expr.ts',
        foreground: 'c4704f',
    },
    {
        token: 'invalid.broken',
        foreground: 'fdaeb7',
    },
    {
        token: 'invalid.deprecated',
        foreground: 'fdaeb7',
    },
    {
        token: 'invalid.illegal',
        foreground: 'fdaeb7',
    },
    {
        token: 'invalid.unimplemented',
        foreground: 'fdaeb7',
    },
    {
        token: 'carriage-return',
        foreground: '24292e',
    },
    {
        token: 'message.error',
        foreground: 'fdaeb7',
    },
    {
        token: 'string variable',
        foreground: 'c98a7d',
    },
    {
        token: 'source.regexp',
        foreground: 'c4704f',
    },
    {
        token: 'string.regexp',
        foreground: 'c4704f',
    },
    {
        token: 'string.regexp.character-class',
        foreground: 'c98a7d',
    },
    {
        token: 'string.regexp constant.character.escape',
        foreground: 'c98a7d',
    },
    {
        token: 'string.regexp source.ruby.embedded',
        foreground: 'c98a7d',
    },
    {
        token: 'string.regexp string.regexp.arbitrary-repitition',
        foreground: 'c98a7d',
    },
    {
        token: 'string.regexp constant.character.escape',
        foreground: 'e6cc77',
    },
    {
        token: 'support.constant',
        foreground: 'CB947C',
    },
    {
        token: 'constant.numeric',
        foreground: '1e808f',
    },
    {
        token: 'number',
        foreground: '1e808f',
    },
    {
        token: 'keyword.other.unit',
        foreground: 'cb7676',
    },
    {
        token: 'constant.language.boolean',
        foreground: '1e808f',
    },
    {
        token: 'constant.language',
        foreground: '1e808f',
    },
    {
        token: 'meta.module-reference',
        foreground: '4d9975',
    },
    {
        token: 'punctuation.definition.list.begin.markdown',
        foreground: 'd4976c',
    },
    {
        token: 'markup.heading',
        foreground: '4d9975',
    },
    {
        token: 'markup.heading entity.name',
        foreground: '4d9975',
    },
    {
        token: 'markup.quote',
        foreground: '1e808f',
    },
    {
        token: 'markup.italic',
        foreground: 'dbd7cacc',
    },
    {
        token: 'markup.bold',
        foreground: 'dbd7cacc',
    },
    {
        token: 'markup.raw',
        foreground: '4d9975',
    },
    {
        token: 'markup.deleted',
        foreground: 'fdaeb7',
    },
    {
        token: 'meta.diff.header.from-file',
        foreground: 'fdaeb7',
    },
    {
        token: 'punctuation.definition.deleted',
        foreground: 'fdaeb7',
    },
    {
        token: 'markup.inserted',
        foreground: '85e89d',
    },
    {
        token: 'meta.diff.header.to-file',
        foreground: '85e89d',
    },
    {
        token: 'punctuation.definition.inserted',
        foreground: '85e89d',
    },
    {
        token: 'markup.changed',
        foreground: 'ffab70',
    },
    {
        token: 'punctuation.definition.changed',
        foreground: 'ffab70',
    },
    {
        token: 'markup.ignored',
        foreground: '2f363d',
    },
    {
        token: 'markup.untracked',
        foreground: '2f363d',
    },
    {
        token: 'meta.diff.range',
        foreground: 'b392f0',
    },
    {
        token: 'meta.diff.header',
        foreground: '79b8ff',
    },
    {
        token: 'meta.separator',
        foreground: '79b8ff',
    },
    {
        token: 'meta.output',
        foreground: '79b8ff',
    },
    {
        token: 'brackethighlighter.tag',
        foreground: 'd1d5da',
    },
    {
        token: 'brackethighlighter.curly',
        foreground: 'd1d5da',
    },
    {
        token: 'brackethighlighter.round',
        foreground: 'd1d5da',
    },
    {
        token: 'brackethighlighter.square',
        foreground: 'd1d5da',
    },
    {
        token: 'brackethighlighter.angle',
        foreground: 'd1d5da',
    },
    {
        token: 'brackethighlighter.quote',
        foreground: 'd1d5da',
    },
    {
        token: 'brackethighlighter.unmatched',
        foreground: 'fdaeb7',
    },
    {
        token: 'constant.other.reference.link',
        foreground: 'c98a7d',
    },
    {
        token: 'string.other.link',
        foreground: 'c98a7d',
    },
    {
        token: 'punctuation.definition.string.begin.markdown',
        foreground: 'c98a7d',
    },
    {
        token: 'punctuation.definition.string.end.markdown',
        foreground: 'c98a7d',
    },
    {
        token: 'markup.underline.link.markdown',
        foreground: 'dedcd590',
    },
    {
        token: 'type.identifier',
        foreground: '1e808f',
    },
    {
        token: 'entity.other.attribute-name.html.vue',
        foreground: '81A468',
    },
    {
        token: 'invalid.illegal.unrecognized-tag.html',
    },
]
