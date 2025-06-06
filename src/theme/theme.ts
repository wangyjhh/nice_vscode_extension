import { alpha, tokenColors } from './colors'

interface ThemeOptions {
    name: string
    colors: any
}

export function createTheme(options: ThemeOptions) {
    const theme = {
        name: options.name,
        base: 'vs-dark',
        colors: {
            'focusBorder': alpha(options.colors.cursorColor, 40),
            'foreground': options.colors.foreground,
            'descriptionForeground': options.colors.foreground,
            'errorForeground': options.colors.red,

            'window.activeBorder': alpha(options.colors.cursorColor, 40),
            'window.inactiveBorder': alpha(options.colors.cursorColor, 40),

            'textLink.foreground': options.colors.green,
            'textLink.activeForeground': options.colors.green,
            'textBlockQuote.background': options.colors.background,
            'textBlockQuote.border': alpha(options.colors.cursorColor, 40),
            'textCodeBlock.background': options.colors.background,
            'textPreformat.foreground': options.colors.foreground,
            'textSeparator.foreground': options.colors.foreground,

            'button.background': options.colors.green,
            'button.foreground': options.colors.background,
            'button.hoverBackground': options.colors.green,

            'checkbox.background': options.colors.selectionBackground,
            'checkbox.border': alpha(options.colors.cursorColor, 40),

            'dropdown.background': options.colors.background,
            'dropdown.border': alpha(options.colors.cursorColor, 40),
            'dropdown.foreground': options.colors.foreground,
            'dropdown.listBackground': options.colors.background,

            'input.background': options.colors.background,
            'input.border': alpha(options.colors.cursorColor, 40),
            'input.foreground': options.colors.foreground,
            'input.placeholderForeground': alpha(options.colors.foreground, 50),
            'inputOption.activeBackground': alpha(options.colors.foreground, 50),
            'inputOption.activeBorder': options.colors.green,

            'badge.foreground': options.colors.foreground,
            'badge.background': alpha(options.colors.green, 'e0'),

            'progressBar.background': options.colors.green,

            'titleBar.activeForeground': options.colors.foreground,
            'titleBar.activeBackground': options.colors.background,
            'titleBar.inactiveForeground': options.colors.foreground,
            'titleBar.inactiveBackground': options.colors.background,
            'titleBar.border': alpha(options.colors.cursorColor, 40),

            'activityBar.foreground': options.colors.foreground,
            'activityBar.inactiveForeground': alpha(options.colors.foreground, 50),
            'activityBar.background': options.colors.background,
            'activityBar.activeBorder': '',
            'activityBar.border': alpha(options.colors.cursorColor, 40),
            'activityBarBadge.foreground': options.colors.foreground,
            'activityBarBadge.background': alpha(options.colors.green, 'e0'),
            'activityBarTop.foreground': options.colors.foreground,
            'activityBarTop.activeBorder': options.colors.green,
            'activityBarTop.inactiveForeground': alpha(options.colors.foreground, 50),
            'activityBarTop.dropBorder': options.colors.green,

            'profileBadge.background': alpha(options.colors.green, 'e0'),
            'profileBadge.foreground': options.colors.foreground,
            'profileBadge.sashBorder': options.colors.green,

            'toolbar.hoverBackground': alpha(options.colors.selectionBackground, 50),
            'toolbar.hoverOutline': options.colors.green,
            'toolbar.activeBackground': options.colors.selectionBackground,

            'sideBar.foreground': options.colors.foreground,
            'sideBar.background': options.colors.background,
            'sideBar.border': alpha(options.colors.cursorColor, 40),
            'sideBarTitle.foreground': options.colors.foreground,
            'sideBarSectionHeader.foreground': options.colors.foreground,
            'sideBarSectionHeader.background': options.colors.background,
            'sideBarSectionHeader.border': alpha(options.colors.cursorColor, 40),

            'list.hoverForeground': options.colors.foreground,
            'list.inactiveSelectionForeground': options.colors.foreground,
            'list.activeSelectionForeground': options.colors.foreground,
            'list.hoverBackground': options.colors.selectionBackground,
            'list.inactiveSelectionBackground': options.colors.selectionBackground,
            'list.activeSelectionBackground': options.colors.selectionBackground,
            'list.inactiveFocusBackground': options.colors.background,
            'list.focusBackground': options.colors.selectionBackground,
            'list.highlightForeground': options.colors.green,

            'tree.indentGuidesStroke': alpha(options.colors.green, 50),

            'notificationCenterHeader.foreground': options.colors.foreground,
            'notificationCenterHeader.background': options.colors.background,
            'notifications.foreground': options.colors.foreground,
            'notifications.background': options.colors.background,
            'notifications.border': alpha(options.colors.cursorColor, 40),
            'notificationsErrorIcon.foreground': options.colors.red,
            'notificationsWarningIcon.foreground': options.colors.yellow,
            'notificationsInfoIcon.foreground': options.colors.blue,

            'pickerGroup.border': alpha(options.colors.cursorColor, 40),
            'pickerGroup.foreground': options.colors.foreground,
            'quickInput.background': options.colors.background,
            'quickInput.foreground': options.colors.foreground,
            'quickInputList.focusBackground': '',

            'statusBar.foreground': options.colors.foreground,
            'statusBar.background': options.colors.background,
            'statusBar.border': alpha(options.colors.cursorColor, 40),
            'statusBar.noFolderBackground': options.colors.background,
            'statusBar.debuggingBackground': options.colors.selectionBackground,
            'statusBar.debuggingForeground': options.colors.foreground,
            'statusBarItem.prominentBackground': options.colors.selectionBackground,
            'statusBarItem.remoteForeground': options.colors.selectionBackground,
            'statusBarItem.remoteBackground': options.colors.green,

            'editorGroupHeader.tabsBackground': options.colors.background,
            'editorGroupHeader.tabsBorder': alpha(options.colors.cursorColor, 40),
            'editorGroup.border': alpha(options.colors.cursorColor, 40),

            'tab.activeForeground': options.colors.brightGreen,
            'tab.inactiveForeground': options.colors.foreground,
            'tab.inactiveBackground': options.colors.background,
            'tab.activeBackground': options.colors.background,
            'tab.hoverBackground': options.colors.selectionBackground,
            'tab.unfocusedHoverBackground': options.colors.background,
            'tab.border': alpha(options.colors.cursorColor, 40),
            'tab.unfocusedActiveBorderTop': alpha(options.colors.cursorColor, 40),
            'tab.activeBorder': alpha(options.colors.cursorColor, 40),
            'tab.unfocusedActiveBorder': alpha(options.colors.cursorColor, 40),
            'tab.activeBorderTop': alpha(options.colors.cursorColor, 40),

            'breadcrumb.foreground': options.colors.foreground,
            'breadcrumb.focusForeground': options.colors.foreground,
            'breadcrumb.background': options.colors.background,
            'breadcrumb.activeSelectionForeground': alpha(options.colors.white, 15),
            'breadcrumbPicker.background': options.colors.background,

            'editor.foreground': options.colors.foreground,
            'editor.background': options.colors.background,
            'editorWidget.background': options.colors.background,
            'editor.foldBackground': alpha(options.colors.white, 15),
            'editor.lineHighlightBackground': options.colors.selectionBackground,
            'editorLineNumber.foreground': alpha(options.colors.foreground, 50),
            'editorLineNumber.activeForeground': options.colors.foreground,
            'editorIndentGuide.background': alpha(options.colors.brightWhite, 15),
            'editorIndentGuide.activeBackground': alpha(options.colors.brightWhite, 30),
            'editorWhitespace.foreground': alpha(options.colors.brightWhite, 20),
            'editorCursor.foreground': options.colors.foreground,

            'editor.findMatchBackground': alpha(options.colors.brightYellow, 22),
            'editor.findMatchHighlightBackground': alpha(options.colors.brightYellow, 44),
            'editor.inactiveSelectionBackground': alpha(options.colors.white, '08'),
            'editor.selectionBackground': options.colors.selectionBackground,
            'editor.selectionHighlightBackground': alpha(options.colors.white, '08'),
            'editor.wordHighlightBackground': alpha(options.colors.green, '05'),
            'editor.wordHighlightStrongBackground': alpha(options.colors.green, 10),
            'editorBracketMatch.background': alpha(options.colors.brightGreen, 20),

            'diffEditor.insertedTextBackground': alpha(options.colors.brightGreen, 20),
            'diffEditor.removedTextBackground': alpha(options.colors.red, 22),

            'scrollbar.shadow': options.colors.selectionBackground,
            'scrollbarSlider.background': alpha(options.colors.foreground, 10),
            'scrollbarSlider.hoverBackground': alpha(options.colors.foreground, 50),
            'scrollbarSlider.activeBackground': alpha(options.colors.foreground, 50),
            'editorOverviewRuler.border': alpha(options.colors.cursorColor, 40),

            'panel.background': options.colors.background,
            'panel.border': alpha(options.colors.cursorColor, 40),
            'panel.dropBorder': options.colors.green,
            'panelTitle.activeBorder': options.colors.green,
            'panelTitle.activeForeground': options.colors.foreground,
            'panelTitle.inactiveForeground': options.colors.foreground,
            'panelInput.border': alpha(options.colors.cursorColor, 40),

            'terminal.foreground': options.colors.foreground,
            'terminal.selectionBackground': options.colors.selectionBackground,
            'terminal.ansiBrightBlack': options.colors.brightBlack,
            'terminal.ansiBrightBlue': options.colors.brightBlue,
            'terminal.ansiBrightCyan': options.colors.brightCyan,
            'terminal.ansiBrightGreen': options.colors.brightGreen,
            'terminal.ansiBrightMagenta': options.colors.brightPurple,
            'terminal.ansiBrightRed': options.colors.brightRed,
            'terminal.ansiBrightWhite': options.colors.brightWhite,
            'terminal.ansiBrightYellow': options.colors.brightYellow,
            'terminal.ansiBlack': options.colors.brightBlack,
            'terminal.ansiBlue': options.colors.brightBlue,
            'terminal.ansiCyan': options.colors.brightCyan,
            'terminal.ansiGreen': options.colors.brightGreen,
            'terminal.ansiMagenta': options.colors.brightPurple,
            'terminal.ansiRed': options.colors.brightRed,
            'terminal.ansiWhite': options.colors.brightWhite,
            'terminal.ansiYellow': options.colors.brightYellow,

            'gitDecoration.addedResourceForeground': options.colors.green,
            'gitDecoration.modifiedResourceForeground': options.colors.blue,
            'gitDecoration.deletedResourceForeground': options.colors.red,
            'gitDecoration.untrackedResourceForeground': options.colors.cyan,
            'gitDecoration.ignoredResourceForeground': alpha(options.colors.foreground, 50),
            'gitDecoration.conflictingResourceForeground': options.colors.yellow,
            'gitDecoration.submoduleResourceForeground': alpha(options.colors.foreground, 90),

            'editorGutter.modifiedBackground': options.colors.blue,
            'editorGutter.addedBackground': options.colors.green,
            'editorGutter.deletedBackground': options.colors.red,

            'editorBracketHighlight.foreground1': options.colors.brightCyan,
            'editorBracketHighlight.foreground2': options.colors.brightGreen,
            'editorBracketHighlight.foreground3': options.colors.yellow,
            'editorBracketHighlight.foreground4': options.colors.brightRed,
            'editorBracketHighlight.foreground5': options.colors.brightYellow,
            'editorBracketHighlight.foreground6': options.colors.brightBlue,

            'debugToolBar.background': options.colors.background,
            'editor.stackFrameHighlightBackground': options.colors.yellow,
            'editor.focusedStackFrameHighlightBackground': alpha(options.colors.yellow, 90),

            'peekViewEditor.matchHighlightBackground': alpha(options.colors.yellow, 33),
            'peekViewResult.matchHighlightBackground': alpha(options.colors.yellow, 33),
            'peekViewEditor.background': options.colors.background,
            'peekViewResult.background': options.colors.background,

            'settings.headerForeground': options.colors.foreground,
            'settings.modifiedItemIndicator': options.colors.green,
            'welcomePage.buttonBackground': options.colors.black,
            'welcomePage.buttonHoverBackground': options.colors.brightBlack,

            'problemsErrorIcon.foreground': options.colors.red,
            'problemsWarningIcon.foreground': options.colors.yellow,
            'problemsInfoIcon.foreground': options.colors.blue,

            'editorError.foreground': options.colors.red,
            'editorWarning.foreground': options.colors.yellow,
            'editorInfo.foreground': options.colors.blue,
            'editorHint.foreground': options.colors.green,

            'editorGutter.commentRangeForeground': alpha(options.colors.foreground, 50),
            'editorGutter.foldingControlForeground': alpha(options.colors.foreground, 90),

            'editorInlayHint.foreground': options.colors.foreground,
            'editorInlayHint.background': options.colors.background,

            'editorStickyScroll.background': options.colors.selectionBackground,
            'editorStickyScrollHover.background': options.colors.selectionBackground,

            'menubar.selectionForeground': options.colors.foreground,
            'menubar.selectionBackground': options.colors.selectionBackground,
            'menubar.selectionBorder': alpha(options.colors.cursorColor, 40),
            'menu.foreground': options.colors.foreground,
            'menu.background': options.colors.background,
            'menu.selectionForeground': options.colors.foreground,
            'menu.selectionBackground': options.colors.selectionBackground,
            'menu.selectionBorder': alpha(options.colors.cursorColor, 40),
            'menu.separatorBackground': options.colors.foreground,
            'menu.border': alpha(options.colors.cursorColor, 40),
        },
        semanticHighlighting: true,
        semanticTokenColors: {
            namespace: options.colors.cyan,
            property: options.colors.brightYellow,
            interface: options.colors.cyan,
            type: options.colors.cyan,
            class: options.colors.cyan,
        },
        tokenColors: [
            {
                scope: [
                    'comment',
                    'punctuation.definition.comment',
                    'string.comment',
                ],
                settings: {
                    foreground: tokenColors.comment,
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
                    'keyword.operator.type',
                    'meta.brace',
                    'meta.tag.block.any.html',
                    'meta.tag.inline.any.html',
                    'meta.tag.structure.input.void.html',
                    'meta.type.annotation',
                    'meta.embedded.block.github-actions-expression',
                    'storage.type.function.arrow',
                    'meta.objectliteral.ts',
                    'punctuation',
                    'punctuation.definition.string.begin.html.vue',
                    'punctuation.definition.string.end.html.vue',
                ],
                settings: {
                    foreground: tokenColors.delimiters,
                },
            },
            {
                scope: [
                    'constant',
                    'entity.name.constant',
                    'variable.language',
                    'meta.definition.variable',
                ],
                settings: {
                    foreground: tokenColors.constants,
                },
            },
            {
                scope: ['entity', 'entity.name'],
                settings: {
                    foreground: tokenColors.entities,
                },
            },
            {
                scope: 'variable.parameter.function',
                settings: {
                    foreground: tokenColors.params,
                },
            },
            {
                scope: [
                    'entity.name.tag',
                    'tag.html',
                ],
                settings: {
                    foreground: tokenColors.tags,
                },
            },
            {
                scope: 'entity.name.function',
                settings: {
                    foreground: tokenColors.entities,
                },
            },
            {
                scope: [
                    'keyword',
                    'storage.type.class.jsdoc',
                    'punctuation.definition.template-expression',
                ],
                settings: {
                    foreground: tokenColors.keywords,
                },
            },
            {
                scope: [
                    'storage',
                    'storage.type',
                    'support.type.builtin',
                    'constant.language.undefined',
                    'constant.language.null',
                    'constant.language.import-export-all.ts',
                ],
                settings: {
                    foreground: tokenColors.storage,
                },
            },
            {
                scope: [
                    'text.html.derivative',
                    'storage.modifier.package',
                    'storage.modifier.import',
                    'storage.type.java',
                ],
                settings: {
                    foreground: tokenColors.htmlText,
                },
            },
            {
                scope: [
                    'string',
                    'string punctuation.section.embedded source',
                    'attribute.value',
                ],
                settings: {
                    foreground: tokenColors.strings,
                },
            },
            {
                scope: [
                    'punctuation.definition.string',
                    'punctuation.support.type.property-name',
                ],
                settings: {
                    foreground: tokenColors.strings,
                },
            },
            {
                scope: 'support',
                settings: {
                    foreground: tokenColors.support,
                },
            },
            {
                scope: [
                    'property',
                    'meta.property-name',
                    'meta.object-literal.key',
                    'entity.name.tag.yaml',
                    'attribute.name',
                ],
                settings: {
                    foreground: tokenColors.properties,
                },
            },
            {
                scope: [
                    'entity.other.attribute-name',
                    'invalid.deprecated.entity.other.attribute-name.html',
                ],
                settings: {
                    foreground: tokenColors.attributes,
                },
            },
            {
                scope: [
                    'variable',
                    'identifier',
                ],
                settings: {
                    foreground: tokenColors.variables,
                },
            },
            {
                scope: [
                    'support.type.primitive',
                    'entity.name.type',
                ],
                settings: {
                    foreground: tokenColors.types,
                },
            },
            {
                scope: 'namespace',
                settings: {
                    foreground: tokenColors.namespaces,
                },
            },
            {
                scope: [
                    'keyword.operator',
                    'keyword.operator.assignment.compound',
                    'meta.var.expr.ts',
                ],
                settings: {
                    foreground: tokenColors.operators,
                },
            },
            {
                scope: 'invalid.broken',
                settings: {
                    fontStyle: 'italic',
                    foreground: tokenColors.errors,
                },
            },
            {
                scope: 'invalid.deprecated',
                settings: {
                    fontStyle: 'italic',
                    foreground: tokenColors.errors,
                },
            },
            {
                scope: 'invalid.illegal',
                settings: {
                    fontStyle: 'italic',
                    foreground: tokenColors.errors,
                },
            },
            {
                scope: 'invalid.unimplemented',
                settings: {
                    fontStyle: 'italic',
                    foreground: tokenColors.errors,
                },
            },
            {
                scope: 'carriage-return',
                settings: {
                    fontStyle: 'italic underline',
                    background: tokenColors.errors,
                    foreground: '',
                    content: '^M',
                },
            },
            {
                scope: 'message.error',
                settings: {
                    foreground: tokenColors.errors,
                },
            },
            {
                scope: 'string variable',
                settings: {
                    foreground: tokenColors.strings,
                },
            },
            {
                scope: [
                    'source.regexp',
                    'string.regexp',
                ],
                settings: {
                    foreground: tokenColors.regex,
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
                    foreground: tokenColors.regexSpecial,
                },
            },
            {
                scope: 'string.regexp constant.character.escape',
                settings: {
                    foreground: tokenColors.regexEscape,
                },
            },
            {
                scope: [
                    'support.constant',
                ],
                settings: {
                    foreground: tokenColors.constants,
                },
            },
            {
                scope: [
                    'keyword.operator.quantifier.regexp',
                    'constant.numeric',
                    'number',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'keyword.other.unit',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'constant.language.boolean',
                    'constant.language',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'meta.module-reference',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'punctuation.definition.list.begin.markdown',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: ['markup.heading', 'markup.heading entity.name'],
                settings: {
                    fontStyle: 'bold',
                    foreground: '',
                },
            },
            {
                scope: 'markup.quote',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'markup.italic',
                settings: {
                    fontStyle: 'italic',
                    foreground: '',
                },
            },
            {
                scope: 'markup.bold',
                settings: {
                    fontStyle: 'bold',
                    foreground: '',
                },
            },
            {
                scope: 'markup.raw',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'markup.deleted',
                    'meta.diff.header.from-file',
                    'punctuation.definition.deleted',
                ],
                settings: {
                    background: '',
                    foreground: '',
                },
            },
            {
                scope: [
                    'markup.inserted',
                    'meta.diff.header.to-file',
                    'punctuation.definition.inserted',
                ],
                settings: {
                    background: '',
                    foreground: '',
                },
            },
            {
                scope: ['markup.changed', 'punctuation.definition.changed'],
                settings: {
                    background: '',
                    foreground: '',
                },
            },
            {
                scope: ['markup.ignored', 'markup.untracked'],
                settings: {
                    foreground: '',
                    background: '',
                },
            },
            {
                scope: 'meta.diff.range',
                settings: {
                    foreground: '',
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'meta.diff.header',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'meta.separator',
                settings: {
                    fontStyle: 'bold',
                    foreground: '',
                },
            },
            {
                scope: 'meta.output',
                settings: {
                    foreground: '',
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
                    foreground: '',
                },
            },
            {
                scope: 'brackethighlighter.unmatched',
                settings: {
                    foreground: '',
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
                    foreground: '',
                },
            },
            {
                scope: [
                    'markup.underline.link.markdown',
                    'markup.underline.link.image.markdown',
                ],
                settings: {
                    foreground: tokenColors.links,
                    fontStyle: 'underline',
                },
            },
            {
                scope: [
                    'type.identifier',
                    'constant.other.character-class.regexp',
                ],
                settings: {
                    foreground: tokenColors.types,
                },
            },
            {
                scope: [
                    'entity.other.attribute-name.html.vue',
                ],
                settings: {
                    foreground: tokenColors.entities,
                },
            },
            {
                scope: [
                    'invalid.illegal.unrecognized-tag.html',
                ],
                settings: {
                    fontStyle: 'normal',
                },
            },
        ],
        rules: [] as any[],
    }

    // monaco rules
    const rules: any[] = []

    theme.tokenColors.forEach(({ scope, settings }: any) => {
        for (const s of toArray(scope)) {
            rules.push({
                token: s,
                foreground: settings.foreground?.replace('#', ''),
            })
        }
    })

    theme.rules = rules

    return theme
}

export type Arrayable<T> = T | Array<T>
export type Nullable<T> = T | null | undefined

export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
    array = array ?? []
    return Array.isArray(array) ? array : [array]
}
