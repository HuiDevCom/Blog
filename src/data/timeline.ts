/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "把小站整理成自己的笔记本",
		date: "2026.06.15",
		category: "milestone",
		subtitle: "风绘笔记 · HuiDev Notes",
		description:
			"换上喜欢的头像、横幅和配色，补齐友链、评论与音乐，把示例内容收拾妥当，也给日常见闻留出了一处随手记录的地方。",
		highlights: [
			"完善站点资料、友链与备案页脚",
			"接入 Twikoo 评论、Umami 统计和网易云歌单",
			"整理文章、动态和时间线，继续慢慢记录",
		],
		tags: ["博客", "记录"],
		icon: "material-symbols:edit-note-rounded",
	},
	{
		title: "网站上线，ICP 备案通过",
		date: "2026.06.15",
		category: "milestone",
		subtitle: "风绘笔记的起点",
		description:
			"风绘笔记在 huidev.com 上线，ICP 备案通过。从这一天开始，想记录的事有了自己的落脚处。",
		highlights: ["站点域名：huidev.com", "备案号：豫ICP备2025139441号-3"],
		tags: ["上线", "ICP 备案"],
		links: [
			{
				label: "备案查询",
				url: "https://beian.miit.gov.cn/",
				icon: "material-symbols:open-in-new-rounded",
			},
		],
		icon: "material-symbols:rocket-launch-rounded",
		featured: true,
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
