export const colors = {
    /**
     * 对比色
     */
    contrastActiveBorder: '', // 活动元素周围的额外边框，用于将它们与其他元素分开，以获得更大的对比度。
    contrastBorder: '', // 元素周围的额外边框，用于将它们与其他元素分开以获得更大的对比度。

    /**
     * 基色
     */
    focusBorder: '', // 聚焦元素的整体边框颜色。仅当未被组件覆盖时，才会使用此颜色。
    foreground: '', // 整体前景色。仅当未被组件覆盖时，才会使用此颜色。
    disabledForeground: '', // 已禁用元素的总体前景。仅当未被组件覆盖时，才会使用此颜色。
    widget: {
        border: '', // 编辑器内 查找/替换 等 小部件 的边框颜色。
        shadow: '', // 编辑器内 查找/替换 等 小部件 的阴影颜色。
    },
    selection: {
        background: '', // 工作台中文本选择的背景颜色（对于输入字段或文本区域，不适用于编辑器和终端中的选择）。
    },
    descriptionForeground: '', // 提供其他信息（例如标签）的说明文本的前景色。
    errorForeground: '', // 错误消息的整体前景色（此颜色仅在未被组件覆盖时使用）。
    icon: {
        foreground: '', // 工作台中图标的默认颜色。
    },
    sash: {
        hoverBorder: '', // 可拖动窗扇的悬停边框颜色。
    },

    /**
     * 窗口边框
     * macOS 和 Linux（不是 Windows）上受支持，并且仅在启用自定义标题栏 （ "window.titleBarStyle": "custom" ） 时受支持。
     */
    window: {
        activeBorder: '', // 活动（聚焦）窗口的边框颜色。
        inactiveBorder: '', // 非活动（未聚焦）窗口的边框颜色。
    },

    /**
     * 文本颜色
     */
    textBlockQuote: {
        background: '', // 文本中块引用的背景颜色。
        border: '', // 文本中块引用的边框颜色。
    },
    textCodeBlock: {
        background: '', // 文本中代码块的背景颜色。
    },
    textLink: {
        activeForeground: '', // 单击鼠标悬停时文本中链接的前景色。
        foreground: '', // 文本中链接的前景色。
    },
    textPreformat: {
        foreground: '', // 预格式化文本段的前景色。
        background: '', // 预格式化文本段的背景颜色。
    },
    textSeparator: {
        foreground: '', // 文本分隔符的颜色。
    },

    /**
     * 动作颜色
     */
    toolbar: {
        hoverBackground: '', // 使用鼠标将鼠标悬停在动作上时的工具栏背景。
        hoverOutline: '', // 使用鼠标将鼠标悬停在作上时的工具栏轮廓。
        activeBackground: '', // 将鼠标悬停在作上时的工具栏背景。
    },
    editorActionList: {
        background: '', // 作列表背景颜色。
        foreground: '', // 作列表前景色。
        focusForeground: '', // 焦点项的作列表前景色。
        focusBackground: '', // 焦点项的作列表背景色。
    },

    /**
     * 按钮控制
     */
    button: {
        background: '', // 按钮背景颜色。
        foreground: '', // 按钮前景色。
        border: '', // 按钮边框颜色。
        separator: '', // 按钮分隔符颜色。
        hoverBackground: '', // 悬停时的按钮背景颜色。
        secondaryForeground: '', // 辅助按钮前景色。
        secondaryBackground: '', // 辅助按钮背景颜色。
        secondaryHoverBackground: '', // 悬停时辅助按钮背景颜色。
    },
    checkbox: {
        background: '', // 复选框小部件的背景颜色。
        foreground: '', // 复选框小部件的前景色。
        disabled: {
            background: '', // 已禁用复选框的背景。
            foreground: '', // 已禁用复选框的前景。
        },
        border: '', // 复选框 小部件 的边框颜色。
        selectBackground: '', // 当复选框 小部件 所在的元素被选中时，它的背景颜色。
        selectBorder: '', // 当复选框小部件所在的元素被选中时，它的边框颜色。
    },
    radio: {
        activeForeground: '', // 活动单选按钮选项的前景色。
        activeBackground: '', // 活动单选选项的背景颜色。
        activeBorder: '', // 活动单选选项的边框颜色。
        inactiveForeground: '', // 非活动单选选项的前景色。
        inactiveBackground: '', // 非活动单选选项的背景颜色。
        inactiveBorder: '', // 非活动单选选项的边框颜色。
        inactiveHoverBackground: '', // 悬停时非活动活动单选按钮的背景颜色。
    },

    /**
     * 下拉列表控件
     */
    dropdown: {
        background: '', // 下拉背景。
        listBackground: '', // 下拉列表背景。
        border: '', // 下拉边框。
        foreground: '', // 下拉前景色。
    },

    /**
     * 输入控制
     */
    input: {
        background: '', // 输入框背景。
        border: '', // 输入框边框。
        foreground: '', // 输入框前景色。
        placeholderForeground: '', // 占位符文本的输入框前景色。
    },
    inputOption: {
        activeBackground: '', // 输入字段中已激活选项的背景颜色。
        activeBorder: '', // 输入字段中已激活选项的边框颜色。
        activeForeground: '', // 输入字段中已激活选项的前景色。
        hoverBackground: '', // 输入字段中悬停选项的背景颜色。
    },
    inputValidation: {
        errorBackground: '', // 输入验证错误消息的背景颜色。
        errorForeground: '', // 输入验证错误消息的前景色。
        errorBorder: '', // 输入验证错误消息的边框颜色。
        infoBackground: '', // 输入验证信息消息的背景颜色。
        infoForeground: '', // 输入验证信息消息的前景色。
        infoBorder: '', // 输入验证信息消息的边框颜色。
        warningBackground: '', // 输入验证警告消息的背景颜色。
        warningForeground: '', // 输入验证警告消息的前景色。
        warningBorder: '', // 输入验证警告消息的边框颜色。
    },

    /**
     * 滚动条控件
     */
    scrollbar: {
        shadow: '', // 滚动条滑块阴影，用于指示视图已滚动。
        scrollbarSlider: {
            activeBackground: '', // 滚动条滑块的活动背景颜色。
            background: '', // 滚动条滑块的背景颜色。
            hoverBackground: '', // 悬停时滚动条滑块的背景色。
        },
    },

    /**
     * 徽章
     */
    badge: {
        foreground: '', // 徽章前景色。
        background: '', // 徽章背景色。
    },

    /**
     * 进度条
     */
    progressBar: {
        background: '', // 为长时间运行的作显示的进度条的背景颜色。
    },

    /**
     * 列表和树
     */
    list: {
        activeSelectionBackground: '', // 当列表/树处于活动状态时，所选项目的列表/树背景颜色。
        activeSelectionForeground: '', // 当列表/树处于活动状态时，所选项目的列表/树前景色。
        activeSelectionIconForeground: '', // 当列表/树处于活动状态时，所选项的前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
        dropBackground: '', // 使用鼠标移动项目时列表/树拖放背景。
        focusBackground: '', // 当列表/树处于活动状态时，焦点项的列表/树背景颜色。
        focusForeground: '', // 当列表/树处于活动状态时，焦点项目的列表/树前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
        focusHighlightForeground: '', // 在列表/树内搜索时，匹配项的列表/树前景色会突出显示主动聚焦的项目。
        focusOutline: '', // 当列表/树处于活动状态时，焦点项目的列表/树轮廓颜色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
        focusAndSelectionOutline: '', // 当列表/树处于活动状态并被选中时，焦点项目的列表/树轮廓颜色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
        highlightForeground: '', // 在列表/树内搜索时，匹配项的列表/树前景色会突出显示。
        hoverBackground: '', // 使用鼠标将鼠标悬停在项目上时的列表/树背景。
        hoverForeground: '', // 使用鼠标将鼠标悬停在项目上时的列表/树前景色。
        inactiveSelectionBackground: '', // 当列表/树处于非活动状态时，所选项目的列表/树背景色。
        inactiveSelectionForeground: '', // 当列表/树处于非活动状态时，所选项的列表/树前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
        inactiveSelectionIconForeground: '', // 当列表/树处于非活动状态时，所选项目的列表/树图标前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
        inactiveFocusBackground: '', // 当列表处于非活动状态时，列出焦点项的背景颜色。活动列表具有键盘焦点，而非活动列表则没有。目前仅在列表中受支持。
        inactiveFocusOutline: '', // 当列表/树处于非活动状态时，焦点项的列表/树轮廓颜色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
        invalidItemForeground: '', // 无效项的列表/树前景色，例如资源管理器中未解析的根。
        errorForeground: '', // 包含错误的列表项的前景色。
        warningForeground: '', // 包含警告的列表项的前景色。
        filterMatchBackground: '', // 列表和树中筛选后的匹配项的背景颜色。
        filterMatchBorder: '', // 列表和树中筛选匹配项的边框颜色。
        deemphasizedForeground: '', // 被取消强调的项目的列表/树前景色。
        dropBetweenBackground: '', // 使用鼠标时在项目之间移动项目时，列表/树拖放边框颜色。
    },
    listFilterWidget: {
        background: '', // 在列表/树内搜索时键入的文本的列表/树过滤器背景颜色。
        outline: '', // 列表/树过滤器 在列表/树内搜索时，键入文本的 小组件 的轮廓颜色。
        noMatchesOutline: '', // 在列表/树内搜索时未找到与键入的文本匹配的列表/树过滤器构件的轮廓颜色。
        shadow: '', // 列表和树中过滤器 widget 类型的阴影颜色。
    },
    tree: {
        indentGuidesStroke: '', // 树状构件用于缩进参考线的描边颜色。
        inactiveIndentGuidesStroke: '', // 未激活的缩进参考线的树描边颜色。
        tableColumnsBorder: '', // 缩进参考线的树描边颜色。
        tableOddRowsBackground: '', // 奇数表行的背景颜色。
    },

    /**
     * 活动栏
     */
    activityBar: {
        background: '', // 活动栏背景颜色。
        dropBorder: '', // 拖放活动栏项的反馈颜色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图之间切换。
        foreground: '', // 活动栏前景色（例如用于图标）。
        inactiveForeground: '', // 活动栏项处于非活动状态时的前景色。
        border: '', // 侧边栏的活动栏边框颜色。
        activeBorder: '', // 活动栏活动指示器边框颜色。
        activeBackground: '', // 活动元素的活动栏可选背景颜色。
        activeFocusBorder: '', // 活动项的活动栏焦点边框颜色。
    },
    activityBarBadge: {
        background: '', // 活动通知徽章背景颜色。
        foreground: '', // 活动通知徽章前景色。
    },
    activityBarTop: {
        foreground: '', // 活动栏中项位于顶部时的有效前景色。该活动允许在侧边栏的视图之间切换。
        activeBorder: '', // 当活动栏位于顶部时，将活动项的边框颜色聚焦在活动栏中。该活动允许在侧边栏的视图之间切换。
        inactiveForeground: '', // 活动栏中项位于顶部时的非活动前景色。该活动允许在侧边栏的视图之间切换。
        dropBorder: '', // 当活动栏位于顶部时，拖放活动栏中项目的反馈颜色。该活动允许在侧边栏的视图之间切换。
        background: '', // 设置为顶部/底部时活动栏的背景颜色。
        activeBackground: '', // 活动栏中活动项位于顶部/底部时的背景颜色。该活动允许在侧边栏的视图之间切换。
    },
    activityWarningBadge: {
        foreground: '', // 警告活动徽章的前景色。
        background: '', // 警告活动徽章的背景颜色。
    },
    activityErrorBadge: {
        foreground: '', // 错误活动徽章的前景色。
        background: '', // 错误活动徽章的背景颜色。
    },

    /**
     * 配置文件
     */
    profileBadge: {
        background: '', // 个人资料徽章背景颜色。个人资料徽章显示在活动栏中的设置齿轮图标顶部。
        foreground: '', // 个人资料徽章前景色。个人资料徽章显示在活动栏中的设置齿轮图标顶部。
    },
    profiles: {
        sashBorder: '', // 配置文件编辑器 分页视图 窗框的颜色。
    },

    /**
     * 侧边栏
     */
    sideBar: {
        background: '', // 侧边栏背景颜色。
        foreground: '', // 侧边栏前景色。侧边栏是 资源管理器 和 搜索 等视图的容器。
        border: '', // 分隔编辑器的一侧的侧边栏边框颜色。
        dropBackground: '', // 拖放侧边栏部分的反馈颜色。颜色应具有透明度，以便侧边栏部分仍可透过。
    },
    sideBarTitle: {
        foreground: '', // 侧边栏标题前景色。
        background: '', // 侧边栏标题背景色。
        border: '', // 侧边栏标题边框颜色。侧边栏标题边框颜色在底部，将标题与视图分开。
    },
    sideBarSectionHeader: {
        background: '', // 侧边栏部分标题背景色。
        foreground: '', // 侧边栏部分标题前景色。
        border: '', // 侧边栏部分标题边框颜色。
    },
    sideBarActivityBarTop: {
        border: '', // 顶部/底部的活动栏与视图之间的边框颜色。
    },
    sideBarStickyScroll: {
        background: '', // 侧边栏粘性滚动条背景颜色。
        border: '', // 侧边栏粘性滚动条边框颜色。
        shadow: '', // 侧边栏粘性滚动条阴影颜色。
    },

    /**
     * 小地图
     */
    minimap: {
        findMatchHighlight: '', // 高亮显示文件中搜索的匹配项的颜色。
        selectionHighlight: '', // 高亮显示编辑器选择的颜色。
        errorHighlight: '', // 在编辑器中高亮显示错误的颜色。
        warningHighlight: '', // 在编辑器中高亮显示警告的颜色。
        background: '', // 小地图背景颜色。
        selectionOccurrenceHighlight: '', // 高亮显示小地图中选择的颜色。
        foregroundOpacity: '', // 小地图中渲染的前景元素的不透明度。例如，“#000000c0” 将渲染不透明度为 75% 的元素。
        infoHighlight: '', // 在编辑器中高亮显示信息的颜色。
        chatEditHighlight: '', // 小地图中待处理编辑区域的颜色。
    },
    minimapSlider: {
        background: '', // 小地图滑块的背景颜色。
        hoverBackground: '', // 悬停时小地图滑块的背景颜色。
        activeBackground: '', // 小地图滑块的活动背景颜色。
    },
    minimapGutter: {
        addedBackground: '', // 添加内容的小地图装订线颜色。
        modifiedBackground: '', // 修改内容的小地图间距颜色。
        deletedBackground: '', // 已删除内容的小地图装订线颜色。
    },
    editorMinimap: {
        inlineChatInserted: '', // 内联聊天插入内容的小地图标记颜色。
    },

    /**
     * 编辑器组和选项卡
     */
    editorGroup: {
        border: '', // 编用于将多个编辑器组彼此分隔开的颜色。
        dropBackground: '', // 拖动编辑器组时显示的背景颜色。
        emptyBackground: '', // 空编辑器组的背景颜色。
        focusedEmptyBorder: '', // 已聚焦的空编辑器组的边框颜色。
        dropIntoPromptForeground: '', // 拖动文件时在编辑器上显示的文本前景色。此文本通知用户可以按住 Shift 键放入编辑器。
        dropIntoPromptBackground: '', // 拖动文件时显示在编辑器上的文本背景色。此文本通知用户可以按住 Shift 键放入编辑器。
        dropIntoPromptBorder: '', // 拖动文件时在编辑器上显示的文本边框颜色。此文本通知用户可以按住 Shift 键放入编辑器。
    },
    editorGroupHeader: {
        noTabsBackground: '', // 使用单个 Tab 键时编辑器组标题标题的背景颜色 （设置 "workbench.editor.showTabs": "single" ）。
        tabsBackground: '', // 选项卡容器的背景色。
        tabsBorder: '', // 启用选项卡时编辑器选项卡控件下方的边框颜色。
        border: '', // 编辑器组标题和编辑器之间的边框颜色（如果启用，则位于痕迹导航下方）。
    },
    tab: {
        activeBackground: '', // 活动组中的活动 Tab 键背景颜色。
        unfocusedActiveBackground: '', // 非活动编辑器组中的活动选项卡背景颜色。
        activeForeground: '', // 活动组中的活动 Tab 前景色。
        border: '', // 用于将 Tab 彼此分开的 Border。
        activeBorder: '', // 活动选项卡的下边框。
        selectedBorderTop: '', // 所选选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。
        selectedBackground: '', // 所选选项卡的背景。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。
        selectedForeground: '', // 所选选项卡的前景。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。
        dragAndDropBorder: '', // 选项卡之间的边框，表示可以在两个选项卡之间插入选项卡。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组。
        unfocusedActiveBorder: '', // 非活动编辑器组中活动选项卡的下边框。
        activeBorderTop: '', // 活动选项卡的顶部边框。
        unfocusedActiveBorderTop: '', // 非活动编辑器组中活动选项卡的上边框
        lastPinnedBorder: '', // 最后一个固定编辑器右侧的边框，用于与未固定的编辑器分开。
        inactiveBackground: '', // 非活动选项卡背景颜色。
        unfocusedInactiveBackground: '', // 未聚焦组中的非活动选项卡背景颜色。
        inactiveForeground: '', // 活动组中的非活动 Tab 键前景色。
        unfocusedActiveForeground: '', // 非活动编辑器组中的活动选项卡前景色。
        unfocusedInactiveForeground: '', // 非活动编辑器组中的非活动选项卡前景色。
        hoverBackground: '', // 悬停时的 Tab 键背景颜色。
        unfocusedHoverBackground: '', // 悬停时，未聚焦组中的 Tab 键背景颜色。
        hoverForeground: '', // 悬停时的 Tab 键前景色。
        unfocusedHoverForeground: '', // 悬停时，未聚焦组中的 Tab 键前景色。
        hoverBorder: '', // 悬停时高亮显示选项卡的边框。
        unfocusedHoverBorder: '', // 悬停时用于突出显示未聚焦组中选项卡的 Border。
        activeModifiedBorder: '', // 活动组中已修改（脏）活动选项卡顶部的边框。
        inactiveModifiedBorder: '', // 活动组中已修改（脏）非活动选项卡顶部的边框。
        unfocusedActiveModifiedBorder: '', // 未聚焦组中已修改（脏）活动选项卡顶部的边框。
        unfocusedInactiveModifiedBorder: '', // 在未聚焦的组中已修改（脏）非活动选项卡的顶部显示边框。
    },
    editorPane: {
        background: '', // 编辑器窗格的背景颜色，显示在居中的编辑器布局的左侧和右侧。
    },
    sideBySideEditor: {
        horizontalBorder: '', // 在编辑器组中从上到下并排显示时，将两个编辑器彼此分开的颜色。
        verticalBorder: '', // 在编辑器组中从左到右并排显示时，将两个编辑器彼此分开的颜色。
    },

    /**
     * 编辑器颜色
     */
    editor: {
        background: '', // 编辑器背景颜色。
        foreground: '', // 编辑器中的默认前景色。
        placeholder: {
            foreground: '', // 编辑器中占位符文本的前景色。
        },
        compositionBorder: '', // 编辑器中输入法编辑器 (IME) 组合的边框颜色。
        selectionBackground: '', //
        selectionForeground: '', // 编辑器中选定的文本的前景色。
        inactiveSelectionBackground: '', // 非活动编辑器中所选内容的颜色。颜色不能不透明，以免隐藏下面的装饰。
        selectionHighlightBackground: '', // 与选区内容相同的区域的颜色。颜色不能不透明，以免隐藏下面的装饰。
        selectionHighlightBorder: '', // 与选区内容相同的区域的边框颜色。
        wordHighlightBackground: '', // 读取访问期间（例如读取变量时）元件的背景颜色。颜色不能不透明，以免隐藏下面的装饰。
        wordHighlightBorder: '', // 读取访问期间（例如读取变量时）元件的边框颜色。
        wordHighlightStrongBackground: '', // 在写入访问期间（例如，写入变量时）元件的背景颜色。颜色不能不透明，以免隐藏下面的装饰。
        wordHighlightStrongBorder: '', // 写入访问期间元件的边框颜色，例如在写入变量时。
        wordHighlightTextBackground: '', // 元件的文本出现的背景颜色。颜色不能不透明，以免隐藏下面的装饰。
        wordHighlightTextBorder: '', // 元件的文本实例的边框颜色。
        findMatchBackground: '', // 当前搜索匹配项的背景颜色。
        findMatchForeground: '', // 当前搜索匹配项的前景色。
        findMatchHighlightForeground: '', // 其他搜索匹配项的前景色。
        findMatchHighlightBackground: '', // 其他搜索匹配项的颜色。颜色不能不透明，以免隐藏下面的装饰。
        findRangeHighlightBackground: '', // 为限制搜索的范围着色（在查找小部件中启用“在所选内容中查找”）。颜色不能不透明，以免隐藏下面的装饰。
        findMatchBorder: '', // 当前搜索匹配项的边框颜色。
        findMatchHighlightBorder: '', // 其他搜索匹配项的边框颜色。
        findRangeHighlightBorder: '', // 为限制搜索的范围设置边框颜色（在查找小部件中启用“在所选内容中查找”）。
        hoverHighlightBackground: '', // 在显示悬停的单词下方突出显示。颜色不能不透明，以免隐藏下面的装饰。
        lineHighlightBackground: '', // 光标位置高亮显示的线条的背景颜色。
        lineHighlightBorder: '', // 光标位置线条周围边框的背景颜色。
        rangeHighlightBackground: '', // 突出显示范围的背景颜色，由快速打开、文件中的符号和查找功能使用。颜色不能不透明，以免隐藏下面的装饰。
        rangeHighlightBorder: '', // 高亮显示范围周围边框的背景颜色。
        symbolHighlightBackground: '', // 高亮元件的背景颜色。颜色不能不透明，以免隐藏下面的装饰。
        symbolHighlightBorder: '', // 高亮元件周围边框的背景颜色。
    },
    editorWhitespace: {
        foreground: '', // 编辑器中空格字符的前景色。
    },
    editorWatermark: {
        foreground: '', // 编辑器中的水印文本的前景色。
    },
    editorUnicodeHighlight: {
        border: '', // Unicode 字符的边框颜色。
        background: '', // Unicode 字符的背景颜色。
    },
    editorLink: {
        activeForeground: '', // 活动链接的前景色。
    },
    editorLineNumber: {
        foreground: '', // 编辑器行号的前景色。
        activeForeground: '', // 活动编辑器行号的颜色。
        dimmedForeground: '', // 当 editor.renderFinalNewline 设置为灰色时，最终编辑器行的颜色。
    },
    editorCursor: {
        background: '', // 编辑器光标的背景颜色。允许自定义与块光标重叠的字符的颜色。
        foreground: '', // 编辑器光标的前景色。
    },
    editorMultiCursor: {
        primary: {
            foreground: '', // 存在多个光标时主编辑器光标的颜色。
            background: '', // 存在多个光标时主编辑器光标的背景颜色。允许自定义与块光标重叠的字符的颜色。

        },
        secondary: {
            foreground: '', // 存在多个光标时辅助编辑器光标的颜色。
            background: '', // 存在多个光标时辅助编辑器光标的背景色。允许自定义与块光标重叠的字符的颜色。
        },
    },
    search: {
        resultsInfoForeground: '', // 搜索 viewlet 的完成消息中文本的颜色。例如，此颜色用于显示“{x} 在 {y} 个文件 ”的文本中。
    },
    searchEditor: {
        findMatchBackground: '', // 编辑器结果的颜色。
        findMatchBorder: '', // 编辑器结果的边框颜色。
        textInputBorder: '', // 搜索编辑器文本输入框边框。
    },
}
