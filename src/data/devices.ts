/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "asus-tianxuan-6-pro",
		name: "华硕天选6 Pro 酷睿版",
		brand: "ASUS 华硕",
		category: "desk",
		status: "active",
		specs: "Core Ultra 9 275HX / RTX 5070 / 16GB / 1TB SSD / 黑色",
		description:
			"16 英寸游戏笔记本，搭载英特尔酷睿 Ultra 9 275HX 处理器与 GeForce RTX 5070 笔记本电脑 GPU，兼顾游戏、创作与多任务处理。",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
		link: "https://www.asus.com.cn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f16-2025/techspec/",
	},
	{
		id: "oneplus-ace-6",
		name: "一加 Ace 6",
		brand: "OnePlus 一加",
		category: "mobile",
		status: "active",
		specs: "快银 / 12GB + 256GB / 骁龙 8 至尊版",
		description:
			"搭载骁龙 8 至尊版与风驰游戏内核，配备 165Hz 高刷新率屏幕、7800mAh 电池和 120W 闪充，侧重性能与续航体验。",
		icon: "material-symbols:phone-iphone",
		featured: true,
		link: "https://www.oneplus.com/cn/ace-6",
	},
	{
		id: "oppo-enco-air5-pro",
		name: "OPPO Enco Air5 Pro",
		brand: "OPPO",
		category: "audio",
		status: "active",
		specs: "真无线 / 主动降噪 / 12mm 动圈",
		description:
			"真无线降噪耳机，采用 12mm 镀钛振膜动圈，支持主动降噪、三麦克风通话降噪和双设备连接。",
		icon: "material-symbols:headphones-rounded",
		link: "https://www.oppo.com/en/accessories/enco-air5-pro/",
	},
	{
		id: "rk98",
		name: "RK98 机械键盘",
		brand: "RK ROYAL KLUDGE",
		category: "peripheral",
		status: "active",
		specs: "白色 / 98 配列",
		description:
			"紧凑布局的机械键盘，在保留数字键区的同时减少桌面占用，用于日常输入与游戏。",
		icon: "material-symbols:keyboard-outline-rounded",
		link: "https://www.rkgaming.com/",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
