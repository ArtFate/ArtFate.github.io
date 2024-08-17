import md from "markdown-it";
import alert from "markdown-it-alert";

const MarkdownIt = require("markdown-it");
const { alert } = require("@mdit/plugin-alert");

const mdIt = MarkdownIt().use(alert);

mdIt.render(`
> [!warning]
> 警告文字
`);

md().use(alert);

interface MarkdownItAlertOptions {
    /**
     * 允许的警告名称
     *
     * @default ['important', 'note', 'tip', 'warning', 'caution']
     */
    alertNames?: string[];
  
    /**
     * 是否允许深层的警告语法
     *
     * @default false
     */
    deep?: boolean;
  
    /**
     * 提示开始标签渲染函数
     */
    openRender?: RenderRule;
  
    /**
     * 提示结束标签渲染函数
     */
    closeRender?: RenderRule;
  
    /**
     * 提示标题渲染函数
     */
    titleRender?: RenderRule;
  }