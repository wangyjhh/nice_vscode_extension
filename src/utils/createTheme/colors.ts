export const colors = {
    /**
     * 对比色
     */
    'contrastActiveBorder': '', // 活动元素周围的额外边框，用于将它们与其他元素分开，以获得更大的对比度。
    'contrastBorder': '', // 元素周围的额外边框，用于将它们与其他元素分开以获得更大的对比度。
    /**
     * 基色
     */
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
    /**
     * 窗口边框
     * macOS 和 Linux（不是 Windows）上受支持，并且仅在启用自定义标题栏 （ "window.titleBarStyle": "custom" ） 时受支持。
     */
    'window.activeBorder': '', // 活动（聚焦）窗口的边框颜色。
    'window.inactiveBorder': '', // 非活动（未聚焦）窗口的边框颜色。
    /**
     * 文本颜色
     */
    'textBlockQuote.background': '', // 文本中块引用的背景颜色。
    'textBlockQuote.border': '', // 文本中块引用的边框颜色。
    'textCodeBlock.background': '', // 文本中代码块的背景颜色。
    'textLink.activeForeground': '', // 单击鼠标悬停时文本中链接的前景色。
    'textLink.foreground': '', // 文本中链接的前景色。
    'textPreformat.foreground': '', // 预格式化文本段的前景色。
    'textPreformat.background': '', // 预格式化文本段的背景颜色。
    'textSeparator.foreground': '', // 文本分隔符的颜色。
    /**
     * 动作颜色
     */
    'toolbar.hoverBackground': '', // 使用鼠标将鼠标悬停在动作上时的工具栏背景。
    'toolbar.hoverOutline': '', // 使用鼠标将鼠标悬停在作上时的工具栏轮廓。
    'toolbar.activeBackground': '', // 将鼠标悬停在作上时的工具栏背景。
    'editorActionList.background': '', // 作列表背景颜色。
    'editorActionList.foreground': '', // 作列表前景色。
    'editorActionList.focusForeground': '', // 焦点项的作列表前景色。
    'editorActionList.focusBackground': '', // 焦点项的作列表背景色。
    /**
     * 按钮控制
     */
    'button.background': '', // 按钮背景颜色。
    'button.foreground': '', // 按钮前景色。
    'button.border': '', // 按钮边框颜色。
    'button.separator': '', // 按钮分隔符颜色。
    'button.hoverBackground': '', // 悬停时的按钮背景颜色。
    'button.secondaryForeground': '', // 辅助按钮前景色。
    'button.secondaryBackground': '', // 辅助按钮背景颜色。
    'button.secondaryHoverBackground': '', // 悬停时辅助按钮背景颜色。
    'checkbox.background': '', // 复选框小部件的背景颜色。
    'checkbox.foreground': '', // 复选框小部件的前景色。
    'checkbox.disabled.background': '', // 已禁用复选框的背景。
    'checkbox.disabled.foreground': '', // 已禁用复选框的前景。
    'checkbox.border': '', // 复选框 小部件 的边框颜色。
    'checkbox.selectBackground': '', // 当复选框 小部件 所在的元素被选中时，它的背景颜色。
    'checkbox.selectBorder': '', // 当复选框小部件所在的元素被选中时，它的边框颜色。
    'radio.activeForeground': '', // 活动单选按钮选项的前景色。
    'radio.activeBackground': '', // 活动单选选项的背景颜色。
    'radio.activeBorder': '', // 活动单选选项的边框颜色。
    'radio.inactiveForeground': '', // 非活动单选选项的前景色。
    'radio.inactiveBackground': '', // 非活动单选选项的背景颜色。
    'radio.inactiveBorder': '', // 非活动单选选项的边框颜色。
    'radio.inactiveHoverBackground': '', // 悬停时非活动活动单选按钮的背景颜色。
    /**
     * 下拉列表控件
     */
    'dropdown.background': '', // 下拉背景。
    'dropdown.listBackground': '', // 下拉列表背景。
    'dropdown.border': '', // 下拉边框。
    'dropdown.foreground': '', // 下拉前景色。
    /**
     * 输入控制
     */
    'input.background': '', // 输入框背景。
    'input.border': '', // 输入框边框。
    'input.foreground': '', // 输入框前景色。
    'input.placeholderForeground': '', // 占位符文本的输入框前景色。
    'inputOption.activeBackground': '', // 输入字段中已激活选项的背景颜色。
    'inputOption.activeBorder': '', // 输入字段中已激活选项的边框颜色。
    'inputOption.activeForeground': '', // 输入字段中已激活选项的前景色。
    'inputOption.hoverBackground': '', // 输入字段中悬停选项的背景颜色。
    'inputValidation.errorBackground': '', // 输入验证错误消息的背景颜色。
    'inputValidation.errorForeground': '', // 输入验证错误消息的前景色。
    'inputValidation.errorBorder': '', // 输入验证错误消息的边框颜色。
    'inputValidation.infoBackground': '', // 输入验证信息消息的背景颜色。
    'inputValidation.infoForeground': '', // 输入验证信息消息的前景色。
    'inputValidation.infoBorder': '', // 输入验证信息消息的边框颜色。
    'inputValidation.warningBackground': '', // 输入验证警告消息的背景颜色。
    'inputValidation.warningForeground': '', // 输入验证警告消息的前景色。
    'inputValidation.warningBorder': '', // 输入验证警告消息的边框颜色。
    /**
     * 滚动条控件
     */
    'scrollbar.shadow': '', // 滚动条滑块阴影，用于指示视图已滚动。
    'scrollbarSlider.activeBackground': '', // 滚动条滑块的活动背景颜色。
    'scrollbarSlider.background': '', // 滚动条滑块的背景颜色。
    'scrollbarSlider.hoverBackground': '', // 悬停时滚动条滑块的背景色。
    /**
     * 徽章
     */
    'badge.foreground': '', // 徽章前景色。
    'badge.background': '', // 徽章背景色。
    /**
     * 进度条
     */
    'progressBar.background': '', // 为长时间运行的作显示的进度条的背景颜色。
    /**
     * 列表和树
     */
    'list.activeSelectionBackground': '', // 当列表/树处于活动状态时，所选项目的列表/树背景颜色。
    'list.activeSelectionForeground': '', // 当列表/树处于活动状态时，所选项目的列表/树前景色。
    'list.activeSelectionIconForeground': '', // 当列表/树处于活动状态时，所选项的前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
    'list.dropBackground': '', // 使用鼠标移动项目时列表/树拖放背景。
    'list.focusBackground': '', // 当列表/树处于活动状态时，焦点项的列表/树背景颜色。
    'list.focusForeground': '', // 当列表/树处于活动状态时，焦点项目的列表/树前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
    'list.focusHighlightForeground': '', // 在列表/树内搜索时，匹配项的列表/树前景色会突出显示主动聚焦的项目。
    'list.focusOutline': '', // 当列表/树处于活动状态时，焦点项目的列表/树轮廓颜色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
    'list.focusAndSelectionOutline': '', // 当列表/树处于活动状态并被选中时，焦点项目的列表/树轮廓颜色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
    'list.highlightForeground': '', // 在列表/树内搜索时，匹配项的列表/树前景色会突出显示。
    'list.hoverBackground': '', // 使用鼠标将鼠标悬停在项目上时的列表/树背景。
    'list.hoverForeground': '', // 使用鼠标将鼠标悬停在项目上时的列表/树前景色。
    'list.inactiveSelectionBackground': '', // 当列表/树处于非活动状态时，所选项目的列表/树背景色。
    'list.inactiveSelectionForeground': '', // 当列表/树处于非活动状态时，所选项的列表/树前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
    'list.inactiveSelectionIconForeground': '', // 当列表/树处于非活动状态时，所选项目的列表/树图标前景色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
    'list.inactiveFocusBackground': '', // 当列表处于非活动状态时，列出焦点项的背景颜色。活动列表具有键盘焦点，而非活动列表则没有。目前仅在列表中受支持。
    'list.inactiveFocusOutline': '', // 当列表/树处于非活动状态时，焦点项的列表/树轮廓颜色。活动列表/树具有键盘焦点，而非活动列表/树则没有。
    'list.invalidItemForeground': '', // 无效项的列表/树前景色，例如资源管理器中未解析的根。
    'list.errorForeground': '', // 包含错误的列表项的前景色。
    'list.warningForeground': '', // 包含警告的列表项的前景色。
    'listFilterWidget.background': '', // 在列表/树内搜索时键入的文本的列表/树过滤器背景颜色。
    'listFilterWidget.outline': '', // 列表/树过滤器 在列表/树内搜索时，键入文本的 小组件 的轮廓颜色。
    'listFilterWidget.noMatchesOutline': '', // 在列表/树内搜索时未找到与键入的文本匹配的列表/树过滤器构件的轮廓颜色。
    'listFilterWidget.shadow': '', // 列表和树中过滤器 widget 类型的阴影颜色。
    'list.filterMatchBackground': '', // 列表和树中筛选后的匹配项的背景颜色。
    'list.filterMatchBorder': '', // 列表和树中筛选匹配项的边框颜色。
    'list.deemphasizedForeground': '', // 被取消强调的项目的列表/树前景色。
    'list.dropBetweenBackground': '', // 使用鼠标时在项目之间移动项目时，列表/树拖放边框颜色。
    'tree.indentGuidesStroke': '', // 树状构件用于缩进参考线的描边颜色。
    'tree.inactiveIndentGuidesStroke': '', // 未激活的缩进参考线的树描边颜色。
    'tree.tableColumnsBorder': '', // 缩进参考线的树描边颜色。
    'tree.tableOddRowsBackground': '', // 奇数表行的背景颜色。
    /**
     * 活动栏
     */
    'activityBar.background': '', // 活动栏背景颜色。
    'activityBar.dropBorder': '', // 拖放活动栏项的反馈颜色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图之间切换。
    'activityBar.foreground': '', // 活动栏前景色（例如用于图标）。
    'activityBar.inactiveForeground': '', // 活动栏项处于非活动状态时的前景色。
    'activityBar.border': '', // 侧边栏的活动栏边框颜色。
    'activityBarBadge.background': '', // 活动通知徽章背景颜色。
    'activityBarBadge.foreground': '', // 活动通知徽章前景色。
    'activityBar.activeBorder': '', // 活动栏活动指示器边框颜色。
    'activityBar.activeBackground': '', // 活动元素的活动栏可选背景颜色。
    'activityBar.activeFocusBorder': '', // 活动项的活动栏焦点边框颜色。
    'activityBarTop.foreground': '', // 活动栏中项位于顶部时的有效前景色。该活动允许在侧边栏的视图之间切换。
    'activityBarTop.activeBorder': '', // 当活动栏位于顶部时，将活动项的边框颜色聚焦在活动栏中。该活动允许在侧边栏的视图之间切换。
    'activityBarTop.inactiveForeground': '', // 活动栏中项位于顶部时的非活动前景色。该活动允许在侧边栏的视图之间切换。
    'activityBarTop.dropBorder': '', // 当活动栏位于顶部时，拖放活动栏中项目的反馈颜色。该活动允许在侧边栏的视图之间切换。
    'activityBarTop.background': '', // 设置为顶部/底部时活动栏的背景颜色。
    'activityBarTop.activeBackground': '', // 活动栏中活动项位于顶部/底部时的背景颜色。该活动允许在侧边栏的视图之间切换。
    'activityWarningBadge.foreground': '', // 警告活动徽章的前景色。
    'activityWarningBadge.background': '', // 警告活动徽章的背景颜色。
    'activityErrorBadge.foreground': '', // 错误活动徽章的前景色。
    'activityErrorBadge.background': '', // 错误活动徽章的背景颜色。
    /**
     * 配置文件
     */
    'profileBadge.background': '', // 个人资料徽章背景颜色。个人资料徽章显示在活动栏中的设置齿轮图标顶部。
    'profileBadge.foreground': '', // 个人资料徽章前景色。个人资料徽章显示在活动栏中的设置齿轮图标顶部。
    'profiles.sashBorder': '', // 配置文件编辑器 分页视图 窗框的颜色。
    /**
     * 侧边栏
     */
    'sideBar.background': '', // 侧边栏背景颜色。
    'sideBar.foreground': '', // 侧边栏前景色。侧边栏是 资源管理器 和 搜索 等视图的容器。
    'sideBar.border': '', // 分隔编辑器的一侧的侧边栏边框颜色。
    'sideBar.dropBackground': '', // 拖放侧边栏部分的反馈颜色。颜色应具有透明度，以便侧边栏部分仍可透过。
    'sideBarTitle.foreground': '', // 侧边栏标题前景色。
    'sideBarSectionHeader.background': '', // 侧边栏部分标题背景色。
    'sideBarSectionHeader.foreground': '', // 侧边栏部分标题前景色。
    'sideBarSectionHeader.border': '', // 侧边栏部分标题边框颜色。
    'sideBarActivityBarTop.border': '', // 顶部/底部的活动栏与视图之间的边框颜色。
    'sideBarTitle.background': '', // 侧边栏标题背景色。
    'sideBarTitle.border': '', // 侧边栏标题边框颜色。侧边栏标题边框颜色在底部，将标题与视图分开。
    'sideBarStickyScroll.background': '', // 侧边栏粘性滚动条背景颜色。
    'sideBarStickyScroll.border': '', // 侧边栏粘性滚动条边框颜色。
    'sideBarStickyScroll.shadow': '', // 侧边栏粘性滚动条阴影颜色。
    /**
     * 小地图
     */
    'minimap.findMatchHighlight': '', // 高亮显示文件中搜索的匹配项的颜色。
    'minimap.selectionHighlight': '', // 高亮显示编辑器选择的颜色。
    'minimap.errorHighlight': '', // 在编辑器中高亮显示错误的颜色。
    'minimap.warningHighlight': '', // 在编辑器中高亮显示警告的颜色。
    'minimap.background': '', // 小地图背景颜色。
    'minimap.selectionOccurrenceHighlight': '', // 高亮显示小地图中选择的颜色。
    'minimap.foregroundOpacity': '', // 小地图中渲染的前景元素的不透明度。例如，“#000000c0” 将渲染不透明度为 75% 的元素。
    'minimap.infoHighlight': '', // 在编辑器中高亮显示信息的颜色。
    'minimap.chatEditHighlight': '', // 小地图中待处理编辑区域的颜色。
    'minimapSlider.background': '', // 小地图滑块的背景颜色。
    'minimapSlider.hoverBackground': '', // 悬停时小地图滑块的背景颜色。
    'minimapSlider.activeBackground': '', // 小地图滑块的活动背景颜色。
    'minimapGutter.addedBackground': '', // 添加内容的小地图装订线颜色。
    'minimapGutter.modifiedBackground': '', // 修改内容的小地图间距颜色。
    'minimapGutter.deletedBackground': '', // 已删除内容的小地图装订线颜色。
    'editorMinimap.inlineChatInserted': '', // 内联聊天插入内容的小地图标记颜色。
}
