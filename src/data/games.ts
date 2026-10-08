/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 * 未填写的评分、游玩时长和平台不显示。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "genshin-impact",
		name: "原神",
		developer: "米哈游",
		category: "open-world",
		status: "playing",
		// 原神官方首页主视觉海报：https://ys.mihoyo.com/main/_nuxt/img/poster.47f71d4.jpg
		cover: "assets/games/genshin-hero.jpg",
		icon: "material-symbols:explore-outline-rounded",
		tags: ["开放世界", "冒险", "RPG"],
		description:
			"在提瓦特大陆展开开放世界冒险，探索不同国度，结识伙伴，组建队伍与强敌交战，也可以随心漫游，发现旅途中的风景与故事。",
		link: "https://ys.mihoyo.com/",
	},
	{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		cover: "assets/games/minecraft-hero.jpg",
		icon: "material-symbols:widgets-rounded",
		tags: ["沙盒", "生存", "建造"],
		description:
			"由方块构成的沙盒世界，可以采集资源、合成工具、探索地形和自由建造。选择生存或创造模式，独自冒险，或与朋友一起实现天马行空的想法。",
		link: "https://www.minecraft.net/",
	},
];
