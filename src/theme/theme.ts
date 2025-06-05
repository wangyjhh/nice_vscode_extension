interface ThemeOptions {
    name: string
    colors: any
}

export function createTheme(options: ThemeOptions) {
    const theme = {
        name: options.name,
        base: 'vs-dark',
        colors: {
            'focusBorder': '',
            'foreground': '',
            'descriptionForeground': '',
            'errorForeground': '',

            'textLink.foreground': '',
            'textLink.activeForeground': '',
            'textBlockQuote.background': '',
            'textBlockQuote.border': '',
            'textCodeBlock.background': '',
            'textPreformat.foreground': '',
            'textSeparator.foreground': '',

            'button.background': '',
            'button.foreground': '',
            'button.hoverBackground': '',

            'checkbox.background': '',
            'checkbox.border': '',

            'dropdown.background': '',
            'dropdown.border': '',
            'dropdown.foreground': '',
            'dropdown.listBackground': '',

            'input.background': '',
            'input.border': '',
            'input.foreground': '',
            'input.placeholderForeground': '',
            'inputOption.activeBackground': '',

            'badge.foreground': '',
            'badge.background': '',

            'progressBar.background': '',

            'titleBar.activeForeground': '',
            'titleBar.activeBackground': '',
            'titleBar.inactiveForeground': '',
            'titleBar.inactiveBackground': '',
            'titleBar.border': '',

            'activityBar.foreground': '',
            'activityBar.inactiveForeground': '',
            'activityBar.background': '',
            'activityBarBadge.foreground': '',
            'activityBarBadge.background': '',
            'activityBar.activeBorder': '',
            'activityBar.border': '',

            'sideBar.foreground': '',
            'sideBar.background': '',
            'sideBar.border': '',
            'sideBarTitle.foreground': '',
            'sideBarSectionHeader.foreground': '',
            'sideBarSectionHeader.background': '',
            'sideBarSectionHeader.border': '',

            'list.hoverForeground': '',
            'list.inactiveSelectionForeground': '',
            'list.activeSelectionForeground': '',
            'list.hoverBackground': '',
            'list.inactiveSelectionBackground': '',
            'list.activeSelectionBackground': '',
            'list.inactiveFocusBackground': '',
            'list.focusBackground': '',
            'list.highlightForeground': '',

            'tree.indentGuidesStroke': '',

            'notificationCenterHeader.foreground': '',
            'notificationCenterHeader.background': '',
            'notifications.foreground': '',
            'notifications.background': '',
            'notifications.border': '',
            'notificationsErrorIcon.foreground': '',
            'notificationsWarningIcon.foreground': '',
            'notificationsInfoIcon.foreground': '',

            'pickerGroup.border': '',
            'pickerGroup.foreground': '',
            'quickInput.background': '',
            'quickInput.foreground': '',
            'quickInputList.focusBackground': '',

            'statusBar.foreground': '',
            'statusBar.background': '',
            'statusBar.border': '',
            'statusBar.noFolderBackground': '',
            'statusBar.debuggingBackground': '',
            'statusBar.debuggingForeground': '',
            'statusBarItem.prominentBackground': '',

            'editorGroupHeader.tabsBackground': '',
            'editorGroupHeader.tabsBorder': '',
            'editorGroup.border': '',

            'tab.activeForeground': '',
            'tab.inactiveForeground': '',
            'tab.inactiveBackground': options.colors.background,
            'tab.activeBackground': '',
            'tab.hoverBackground': '',
            'tab.unfocusedHoverBackground': '',
            'tab.border': '',
            'tab.unfocusedActiveBorderTop': '',
            'tab.activeBorder': '',
            'tab.unfocusedActiveBorder': '',
            'tab.activeBorderTop': '',

            'breadcrumb.foreground': '',
            'breadcrumb.focusForeground': '',
            'breadcrumb.background': options.colors.background,
            'breadcrumb.activeSelectionForeground': '',
            'breadcrumbPicker.background': options.colors.background,

            'editor.foreground': '',
            'editor.background': options.colors.background,
            'editorWidget.background': '',
            'editor.foldBackground': '',
            'editor.lineHighlightBackground': '',
            'editorLineNumber.foreground': '',
            'editorLineNumber.activeForeground': '',
            'editorIndentGuide.background': '',
            'editorIndentGuide.activeBackground': '',
            'editorWhitespace.foreground': '',
            'editorCursor.foreground': '',

            'editor.findMatchBackground': '',
            'editor.findMatchHighlightBackground': '',
            'editor.inactiveSelectionBackground': '',
            'editor.selectionBackground': '',
            'editor.selectionHighlightBackground': '',
            'editor.wordHighlightBackground': '',
            'editor.wordHighlightStrongBackground': '',
            'editorBracketMatch.background': '',

            'diffEditor.insertedTextBackground': '',
            'diffEditor.removedTextBackground': '',

            'scrollbar.shadow': '',
            'scrollbarSlider.background': '',
            'scrollbarSlider.hoverBackground': '',
            'scrollbarSlider.activeBackground': '',
            'editorOverviewRuler.border': '',

            'panel.background': '',
            'panel.border': '',
            'panelTitle.activeBorder': '',
            'panelTitle.activeForeground': '',
            'panelTitle.inactiveForeground': '',
            'panelInput.border': '',

            'terminal.foreground': '',
            'terminal.selectionBackground': '',
            'terminal.ansiBrightBlack': '',
            'terminal.ansiBrightBlue': '',
            'terminal.ansiBrightCyan': '',
            'terminal.ansiBrightGreen': '',
            'terminal.ansiBrightMagenta': '',
            'terminal.ansiBrightRed': '',
            'terminal.ansiBrightWhite': '',
            'terminal.ansiBrightYellow': '',
            'terminal.ansiBlack': '',
            'terminal.ansiBlue': '',
            'terminal.ansiCyan': '',
            'terminal.ansiGreen': '',
            'terminal.ansiMagenta': '',
            'terminal.ansiRed': '',
            'terminal.ansiWhite': '',
            'terminal.ansiYellow': '',

            'gitDecoration.addedResourceForeground': '',
            'gitDecoration.modifiedResourceForeground': '',
            'gitDecoration.deletedResourceForeground': '',
            'gitDecoration.untrackedResourceForeground': '',
            'gitDecoration.ignoredResourceForeground': '',
            'gitDecoration.conflictingResourceForeground': '',
            'gitDecoration.submoduleResourceForeground': '',

            'editorGutter.modifiedBackground': '',
            'editorGutter.addedBackground': '',
            'editorGutter.deletedBackground': '',

            'editorBracketHighlight.foreground1': '',
            'editorBracketHighlight.foreground2': '',
            'editorBracketHighlight.foreground3': '',
            'editorBracketHighlight.foreground4': '',
            'editorBracketHighlight.foreground5': '',
            'editorBracketHighlight.foreground6': '',

            'debugToolBar.background': '',
            'editor.stackFrameHighlightBackground': '',
            'editor.focusedStackFrameHighlightBackground': '',

            'peekViewEditor.matchHighlightBackground': '',
            'peekViewResult.matchHighlightBackground': '',
            'peekViewEditor.background': '',
            'peekViewResult.background': '',

            'settings.headerForeground': '',
            'settings.modifiedItemIndicator': '',
            'welcomePage.buttonBackground': '',
            'welcomePage.buttonHoverBackground': '',

            'problemsErrorIcon.foreground': '',
            'problemsWarningIcon.foreground': '',
            'problemsInfoIcon.foreground': '',

            'editorError.foreground': '',
            'editorWarning.foreground': '',
            'editorInfo.foreground': '',
            'editorHint.foreground': '',

            'editorGutter.commentRangeForeground': '',
            'editorGutter.foldingControlForeground': '',

            'editorInlayHint.foreground': '',
            'editorInlayHint.background': '',

            'editorStickyScroll.background': '',
            'editorStickyScrollHover.background': '',

            'menu.separatorBackground': '',
        },
        semanticHighlighting: true,
        semanticTokenColors: {
            namespace: '',
            property: '',
            interface: '',
            type: '',
            class: '',
        },
        tokenColors: [
            {
                scope: [
                    'comment',
                    'punctuation.definition.comment',
                    'string.comment',
                ],
                settings: {
                    foreground: '',
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
                    foreground: '',
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
                    foreground: '',
                },
            },
            {
                scope: ['entity', 'entity.name'],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'variable.parameter.function',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'entity.name.tag',
                    'tag.html',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'entity.name.function',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'keyword',
                    'storage.type.class.jsdoc',
                    'punctuation.definition.template-expression',
                ],
                settings: {
                    foreground: '',
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
                    foreground: '',
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
                    foreground: '',
                },
            },
            {
                scope: [
                    'string',
                    'string punctuation.section.embedded source',
                    'attribute.value',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'punctuation.definition.string',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'punctuation.support.type.property-name',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'support',
                settings: {
                    foreground: '',
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
                    foreground: '',
                },
            },
            {
                scope: [
                    'entity.other.attribute-name',
                    'invalid.deprecated.entity.other.attribute-name.html',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'variable',
                    'identifier',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'support.type.primitive',
                    'entity.name.type',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'namespace',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'keyword.operator',
                    'keyword.operator.assignment.compound',
                    'meta.var.expr.ts',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'invalid.broken',
                settings: {
                    fontStyle: 'italic',
                    foreground: '',
                },
            },
            {
                scope: 'invalid.deprecated',
                settings: {
                    fontStyle: 'italic',
                    foreground: '',
                },
            },
            {
                scope: 'invalid.illegal',
                settings: {
                    fontStyle: 'italic',
                    foreground: '',
                },
            },
            {
                scope: 'invalid.unimplemented',
                settings: {
                    fontStyle: 'italic',
                    foreground: '',
                },
            },
            {
                scope: 'carriage-return',
                settings: {
                    fontStyle: 'italic underline',
                    background: '',
                    foreground: '',
                    content: '^M',
                },
            },
            {
                scope: 'message.error',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: 'string variable',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'source.regexp',
                    'string.regexp',
                ],
                settings: {
                    foreground: '',
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
                    foreground: '',
                },
            },
            {
                scope: 'string.regexp constant.character.escape',
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'support.constant',
                ],
                settings: {
                    foreground: '',
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
                    foreground: '',
                    fontStyle: 'underline',
                },
            },
            {
                scope: [
                    'type.identifier',
                    'constant.other.character-class.regexp',
                ],
                settings: {
                    foreground: '',
                },
            },
            {
                scope: [
                    'entity.other.attribute-name.html.vue',
                ],
                settings: {
                    foreground: '',
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
