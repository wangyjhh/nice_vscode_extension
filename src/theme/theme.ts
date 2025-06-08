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
            'focusBorder': alpha(options.colors.selectionBackground, 80),
            'foreground': options.colors.foreground,
            'descriptionForeground': options.colors.foreground,
            'errorForeground': options.colors.red,

            'window.activeBorder': alpha(options.colors.selectionBackground, 80),
            'window.inactiveBorder': alpha(options.colors.selectionBackground, 80),

            'textLink.foreground': options.colors.primary,
            'textLink.activeForeground': options.colors.primary,
            'textBlockQuote.background': options.colors.background,
            'textBlockQuote.border': alpha(options.colors.selectionBackground, 80),
            'textCodeBlock.background': options.colors.background,
            'textPreformat.foreground': options.colors.foreground,
            'textSeparator.foreground': options.colors.foreground,

            'button.background': options.colors.primary,
            'button.foreground': options.colors.background,
            'button.hoverBackground': options.colors.selectionBackground,

            'checkbox.background': alpha(options.colors.selectionBackground, 80),
            'checkbox.border': alpha(options.colors.selectionBackground, 80),

            'dropdown.background': options.colors.background,
            'dropdown.border': alpha(options.colors.selectionBackground, 80),
            'dropdown.foreground': options.colors.foreground,
            'dropdown.listBackground': options.colors.background,

            'input.background': options.colors.background,
            'input.border': alpha(options.colors.selectionBackground, 80),
            'input.foreground': options.colors.foreground,
            'input.placeholderForeground': alpha(options.colors.foreground, 50),
            'inputOption.activeBackground': alpha(options.colors.foreground, 50),
            'inputOption.activeBorder': options.colors.primary,

            'badge.foreground': options.colors.foreground,
            'badge.background': options.colors.primary,

            'progressBar.background': options.colors.primary,

            'titleBar.activeForeground': options.colors.foreground,
            'titleBar.activeBackground': options.colors.background,
            'titleBar.inactiveForeground': options.colors.foreground,
            'titleBar.inactiveBackground': options.colors.background,
            'titleBar.border': alpha(options.colors.selectionBackground, 80),

            'activityBar.foreground': options.colors.foreground,
            'activityBar.inactiveForeground': alpha(options.colors.foreground, 50),
            'activityBar.background': options.colors.background,
            'activityBar.activeBorder': alpha(options.colors.selectionBackground, 80),
            'activityBar.border': alpha(options.colors.selectionBackground, 80),
            'activityBarBadge.foreground': options.colors.foreground,
            'activityBarBadge.background': options.colors.primary,
            'activityBarTop.foreground': options.colors.primary,
            'activityBarTop.activeBorder': options.colors.primary,
            'activityBarTop.inactiveForeground': alpha(options.colors.foreground, 50),
            'activityBarTop.dropBorder': options.colors.selectionBackground,

            'profileBadge.background': options.colors.primary,
            'profileBadge.foreground': options.colors.foreground,
            'profileBadge.sashBorder': options.colors.primary,

            'toolbar.hoverBackground': alpha(options.colors.selectionBackground, 50),
            'toolbar.hoverOutline': alpha(options.colors.selectionBackground, 80),
            'toolbar.activeBackground': alpha(options.colors.selectionBackground, 80),

            'sideBar.foreground': options.colors.foreground,
            'sideBar.background': options.colors.background,
            'sideBar.border': alpha(options.colors.selectionBackground, 80),
            'sideBarTitle.foreground': options.colors.foreground,
            'sideBarSectionHeader.foreground': options.colors.foreground,
            'sideBarSectionHeader.background': options.colors.background,
            'sideBarSectionHeader.border': alpha(options.colors.selectionBackground, 80),

            'minimapSlider.hoverBackground': alpha(options.colors.selectionBackground, 80),
            'minimapSlider.activeBackground': alpha(options.colors.selectionBackground, 80),

            'list.hoverForeground': options.colors.foreground,
            'list.inactiveSelectionForeground': options.colors.foreground,
            'list.activeSelectionForeground': options.colors.foreground,
            'list.hoverBackground': alpha(options.colors.selectionBackground, 80),
            'list.inactiveSelectionBackground': alpha(options.colors.selectionBackground, 80),
            'list.activeSelectionBackground': alpha(options.colors.selectionBackground, 80),
            'list.inactiveFocusBackground': options.colors.background,
            'list.focusBackground': alpha(options.colors.selectionBackground, 80),
            'list.highlightForeground': options.colors.primary,

            'tree.indentGuidesStroke': alpha(options.colors.primary, 50),

            'notificationCenterHeader.foreground': options.colors.foreground,
            'notificationCenterHeader.background': options.colors.background,
            'notifications.foreground': options.colors.foreground,
            'notifications.background': options.colors.background,
            'notifications.border': alpha(options.colors.selectionBackground, 80),
            'notificationsErrorIcon.foreground': options.colors.red,
            'notificationsWarningIcon.foreground': options.colors.yellow,
            'notificationsInfoIcon.foreground': options.colors.blue,

            'pickerGroup.border': alpha(options.colors.selectionBackground, 80),
            'pickerGroup.foreground': options.colors.foreground,
            'quickInput.background': options.colors.background,
            'quickInput.foreground': options.colors.foreground,
            'quickInputList.focusBackground': alpha(options.colors.selectionBackground, 80),

            'statusBar.foreground': options.colors.foreground,
            'statusBar.background': options.colors.background,
            'statusBar.border': alpha(options.colors.selectionBackground, 80),
            'statusBar.noFolderBackground': options.colors.background,
            'statusBar.debuggingBackground': alpha(options.colors.selectionBackground, 80),
            'statusBar.debuggingForeground': options.colors.foreground,
            'statusBarItem.hoverBackground': alpha(options.colors.selectionBackground, 80),
            'statusBarItem.prominentBackground': alpha(options.colors.selectionBackground, 80),
            'statusBarItem.activeBackground  ': alpha(options.colors.selectionBackground, 80),
            'statusBarItem.prominentHoverBackground  ': alpha(options.colors.selectionBackground, 80),
            'statusBarItem.compactHoverBackground  ': alpha(options.colors.selectionBackground, 80),
            'statusBarItem.remoteForeground': options.colors.foreground,
            'statusBarItem.remoteBackground': options.colors.primary,

            'editorGroupHeader.tabsBackground': options.colors.background,
            'editorGroupHeader.tabsBorder': alpha(options.colors.selectionBackground, 80),
            'editorGroup.border': alpha(options.colors.selectionBackground, 80),

            'tab.activeForeground': options.colors.primary,
            'tab.inactiveForeground': options.colors.foreground,
            'tab.inactiveBackground': options.colors.background,
            'tab.activeBackground': alpha(options.colors.selectionBackground, 50),
            // 'tab.hoverBackground': options.colors.selectionBackground,
            // 'tab.unfocusedHoverBackground': options.colors.background,
            // 'tab.border': alpha(options.colors.selectionBackground, 80),
            // 'tab.unfocusedActiveBorderTop': alpha(options.colors.selectionBackground, 80),
            // 'tab.activeBorder': alpha(options.colors.selectionBackground, 80),
            // 'tab.unfocusedActiveBorder': alpha(options.colors.selectionBackground, 80),
            // 'tab.activeBorderTop': alpha(options.colors.selectionBackground, 80),

            'breadcrumb.foreground': options.colors.foreground,
            'breadcrumb.focusForeground': options.colors.foreground,
            'breadcrumb.background': options.colors.background,
            'breadcrumb.activeSelectionForeground': alpha(options.colors.white, 15),
            'breadcrumbPicker.background': options.colors.background,

            'editor.foreground': options.colors.foreground,
            'editor.background': options.colors.background,
            'editorWidget.background': options.colors.background,
            'editor.foldBackground': alpha(options.colors.white, 15),
            'editor.lineHighlightBackground': alpha(options.colors.selectionBackground, 80),
            'editorLineNumber.foreground': alpha(options.colors.foreground, 50),
            'editorLineNumber.activeForeground': options.colors.foreground,
            'editorIndentGuide.background': alpha(options.colors.brightWhite, 15),
            'editorIndentGuide.activeBackground': alpha(options.colors.brightWhite, 30),
            'editorWhitespace.foreground': alpha(options.colors.brightWhite, 20),
            'editorCursor.foreground': options.colors.foreground,

            'editor.findMatchBackground': alpha(options.colors.brightYellow, 22),
            'editor.findMatchHighlightBackground': alpha(options.colors.brightYellow, 44),
            'editor.inactiveSelectionBackground': alpha(options.colors.white, '08'),
            'editor.selectionBackground': alpha(options.colors.selectionBackground, 80),
            'editor.selectionHighlightBackground': alpha(options.colors.white, '08'),
            'editor.wordHighlightBackground': alpha(options.colors.primary, '05'),
            'editor.wordHighlightStrongBackground': alpha(options.colors.primary, 10),
            'editorBracketMatch.background': alpha(options.colors.primary, 20),

            'diffEditor.insertedTextBackground': alpha(options.colors.primary, 20),
            'diffEditor.removedTextBackground': alpha(options.colors.red, 22),

            // 'scrollbar.shadow': options.colors.selectionBackground,
            'scrollbarSlider.background': alpha(options.colors.selectionBackground, 30),
            'scrollbarSlider.hoverBackground': alpha(options.colors.selectionBackground, 80),
            'scrollbarSlider.activeBackground': alpha(options.colors.selectionBackground, 80),
            'editorOverviewRuler.border': alpha(options.colors.selectionBackground, 80),

            'panel.background': options.colors.background,
            'panel.border': alpha(options.colors.selectionBackground, 80),
            'panel.dropBorder': options.colors.primary,
            'panelTitle.activeBorder': options.colors.primary,
            'panelTitle.activeForeground': options.colors.foreground,
            'panelTitle.inactiveForeground': options.colors.foreground,
            'panelInput.border': alpha(options.colors.selectionBackground, 80),

            'terminal.foreground': options.colors.foreground,
            'terminal.selectionBackground': alpha(options.colors.selectionBackground, 80),
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

            'gitDecoration.addedResourceForeground': options.colors.primary,
            'gitDecoration.modifiedResourceForeground': options.colors.blue,
            'gitDecoration.deletedResourceForeground': options.colors.red,
            'gitDecoration.untrackedResourceForeground': options.colors.cyan,
            'gitDecoration.ignoredResourceForeground': alpha(options.colors.foreground, 50),
            'gitDecoration.conflictingResourceForeground': options.colors.yellow,
            'gitDecoration.submoduleResourceForeground': alpha(options.colors.foreground, 90),

            'editorGutter.modifiedBackground': options.colors.blue,
            'editorGutter.addedBackground': options.colors.primary,
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
            'settings.modifiedItemIndicator': options.colors.primary,
            'welcomePage.buttonBackground': options.colors.black,
            'welcomePage.buttonHoverBackground': options.colors.brightBlack,

            'problemsErrorIcon.foreground': options.colors.red,
            'problemsWarningIcon.foreground': options.colors.yellow,
            'problemsInfoIcon.foreground': options.colors.blue,

            'editorError.foreground': options.colors.red,
            'editorWarning.foreground': options.colors.yellow,
            'editorInfo.foreground': options.colors.blue,
            'editorHint.foreground': options.colors.primary,

            'editorGutter.commentRangeForeground': alpha(options.colors.foreground, 50),
            'editorGutter.foldingControlForeground': alpha(options.colors.foreground, 90),

            'editorInlayHint.foreground': options.colors.foreground,
            'editorInlayHint.background': options.colors.background,

            'editorStickyScroll.background': alpha(options.colors.selectionBackground, 80),
            'editorStickyScrollHover.background': alpha(options.colors.selectionBackground, 80),

            'menubar.selectionForeground': options.colors.foreground,
            'menubar.selectionBackground': alpha(options.colors.selectionBackground, 80),
            'menubar.selectionBorder': alpha(options.colors.selectionBackground, 80),
            'menu.foreground': options.colors.foreground,
            'menu.background': options.colors.background,
            'menu.selectionForeground': options.colors.foreground,
            'menu.selectionBackground': alpha(options.colors.selectionBackground, 80),
            'menu.selectionBorder': alpha(options.colors.selectionBackground, 80),
            'menu.separatorBackground': options.colors.foreground,
            'menu.border': alpha(options.colors.selectionBackground, 80),
        },
        semanticHighlighting: true,
        semanticTokenColors: {
            namespace: options.colors.brightCyan,
            property: tokenColors.properties,
            interface: options.colors.brightCyan,
            type: options.colors.brightCyan,
            class: options.colors.brightCyan,
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
                scope: 'variable.parameter.function.language.special.self.python',
                settings: {
                    foreground: options.colors.brightPurple,
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
                ],
                settings: {
                    foreground: tokenColors.htmlText,
                },
            },
            {
                scope: [
                    'storage.type.java',
                ],
                settings: {
                    foreground: options.colors.brightCyan,
                },
            },
            {
                scope: [
                    'storage.modifier.import',
                ],
                settings: {
                    foreground: options.colors.foreground,
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
                scope: [
                    'entity.name.type.class.java',
                ],
                settings: {
                    foreground: options.colors.brightCyan,
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
                    foreground: tokenColors.numbers,
                },
            },
            {
                scope: [
                    'keyword.other.unit',
                ],
                settings: {
                    foreground: tokenColors.units,
                },
            },
            {
                scope: [
                    'constant.language.boolean',
                    'constant.language',
                ],
                settings: {
                    foreground: tokenColors.booleans,
                },
            },
            {
                scope: 'meta.module-reference',
                settings: {
                    foreground: tokenColors.modules,
                },
            },
            {
                scope: 'punctuation.definition.list.begin.markdown',
                settings: {
                    foreground: tokenColors.markdownList,
                },
            },
            {
                scope: ['markup.heading', 'markup.heading entity.name'],
                settings: {
                    fontStyle: 'bold',
                    foreground: tokenColors.headings,
                },
            },
            {
                scope: 'markup.quote',
                settings: {
                    foreground: tokenColors.quotes,
                },
            },
            {
                scope: 'markup.italic',
                settings: {
                    fontStyle: 'italic',
                    foreground: tokenColors.htmlText,
                },
            },
            {
                scope: 'markup.bold',
                settings: {
                    fontStyle: 'bold',
                    foreground: tokenColors.htmlText,
                },
            },
            {
                scope: 'markup.raw',
                settings: {
                    foreground: tokenColors.modules,
                },
            },
            {
                scope: [
                    'markup.deleted',
                    'meta.diff.header.from-file',
                    'punctuation.definition.deleted',
                ],
                settings: {
                    background: tokenColors.deletedBg,
                    foreground: tokenColors.deleted,
                },
            },
            {
                scope: [
                    'markup.inserted',
                    'meta.diff.header.to-file',
                    'punctuation.definition.inserted',
                ],
                settings: {
                    background: tokenColors.insertedBg,
                    foreground: tokenColors.inserted,
                },
            },
            {
                scope: ['markup.changed', 'punctuation.definition.changed'],
                settings: {
                    background: tokenColors.changedBg,
                    foreground: tokenColors.changed,
                },
            },
            {
                scope: ['markup.ignored', 'markup.untracked'],
                settings: {
                    foreground: tokenColors.ignored,
                    background: tokenColors.ignoredBg,
                },
            },
            {
                scope: 'meta.diff.range',
                settings: {
                    foreground: tokenColors.diffRange,
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'meta.diff.header',
                settings: {
                    foreground: tokenColors.diffHeader,
                },
            },
            {
                scope: 'meta.separator',
                settings: {
                    fontStyle: 'bold',
                    foreground: tokenColors.diffHeader,
                },
            },
            {
                scope: 'meta.output',
                settings: {
                    foreground: tokenColors.diffHeader,
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
                    foreground: tokenColors.brackets,
                },
            },
            {
                scope: 'brackethighlighter.unmatched',
                settings: {
                    foreground: tokenColors.unmatchedBracket,
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
                    foreground: tokenColors.links,
                },
            },
            {
                scope: [
                    'markup.underline.link.markdown',
                    'markup.underline.link.image.markdown',
                ],
                settings: {
                    foreground: tokenColors.brackets,
                    fontStyle: 'underline',
                },
            },
            {
                scope: [
                    'type.identifier',
                ],
                settings: {
                    foreground: tokenColors.types,
                },
            },
            {
                scope: [
                    'type.identifier',
                    'constant.other.character-class.regexp',
                ],
                settings: {
                    foreground: options.colors.brightPurple,
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
