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
