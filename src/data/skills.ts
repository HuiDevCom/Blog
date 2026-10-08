/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

export const skillsData: SkillItem[] = [
	{
		name: "Astro",
		description: "学习页面、组件与内容组织，用 Astro 搭建和维护个人博客。",
		icon: "simple-icons:astro",
		category: "frontend",
		level: "beginner",
	},
	{
		name: "HTML / CSS",
		description: "编写页面结构与样式，处理布局、响应式适配和日常样式调整。",
		icon: "simple-icons:html5",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Node.js",
		description: "学习基础用法与脚本编写，了解包管理和常见开发工具的使用。",
		icon: "simple-icons:nodedotjs",
		category: "backend",
		level: "beginner",
	},
	{
		name: "Python",
		description: "学习基础语法与脚本编写，尝试用小程序处理重复任务。",
		icon: "simple-icons:python",
		category: "backend",
		level: "beginner",
	},
	{
		name: "PostgreSQL",
		description: "学习关系型数据库基础，练习建表、数据读写与简单查询。",
		icon: "simple-icons:postgresql",
		category: "backend",
		level: "beginner",
	},
	{
		name: "MySQL",
		description: "学习 SQL 与数据库管理，练习数据增删改查和基础表设计。",
		icon: "simple-icons:mysql",
		category: "backend",
		level: "beginner",
	},
	{
		name: "Git / GitHub",
		description: "管理代码版本与仓库，使用提交、分支和远程同步记录项目变化。",
		icon: "simple-icons:github",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Linux",
		description: "学习常用命令、文件权限与服务管理，逐步熟悉服务器环境。",
		icon: "simple-icons:linux",
		category: "tooling",
		level: "beginner",
	},
	{
		name: "Docker",
		description: "学习镜像、容器与 Compose，尝试部署和管理常用服务。",
		icon: "simple-icons:docker",
		category: "tooling",
		level: "beginner",
	},
	{
		name: "Markdown",
		description:
			"用于写博客和整理笔记，熟悉标题、列表、链接与代码块等常用语法。",
		icon: "simple-icons:markdown",
		category: "tooling",
		level: "intermediate",
	},
	{
		name: "Adobe Photoshop",
		description: "进行图像编辑、修图与合成，制作和调整日常视觉素材。",
		icon: "simple-icons:adobephotoshop",
		category: "design",
		level: "advanced",
	},
	{
		name: "Adobe Illustrator",
		description: "绘制和编辑矢量图形，用于图标、插画与基础版式设计。",
		icon: "simple-icons:adobeillustrator",
		category: "design",
		level: "intermediate",
	},
	{
		name: "CorelDRAW",
		description: "处理矢量绘图与排版，制作文字、图形和简单印刷素材。",
		icon: "simple-icons:coreldraw",
		category: "design",
		level: "intermediate",
	},
	{
		name: "ComfyUI",
		description: "学习节点式图像生成工作流，尝试连接模型与节点并调整生成参数。",
		icon: "material-symbols:account-tree-outline-rounded",
		category: "ai",
		level: "beginner",
	},
	{
		name: "Ollama",
		description: "学习在本地运行语言模型，尝试模型管理、对话与接口调用。",
		icon: "simple-icons:ollama",
		category: "ai",
		level: "beginner",
	},
];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
