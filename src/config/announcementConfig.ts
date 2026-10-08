import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "", // 公告标题，填空使用 i18n 字符串 Key.announcement
		content:
			"欢迎来到风绘笔记！这里记录日常见闻与思考，留住值得记下的片刻。随意逛逛，希望你能找到感兴趣的内容。", // 公告内容
		closable: true, // 允许用户关闭公告
		link: {
			enable: true, // 启用链接
			text: "About", // 链接文本
			url: "/about/", // 链接 URL
			external: false, // 站内链接，在当前页面导航
		},
	},
);
