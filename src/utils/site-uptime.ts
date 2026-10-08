const DAY_MS = 86_400_000;

/** 构建期运行天数：配置日期按站点时区的日历日计算，缺省时保留旧的文章日期算法。 */
export function getSiteRunningDays(
	siteStartDate: string | undefined,
	earliestPublished: number,
	timeZone: string,
	now: number = Date.now(),
): number {
	const startDate = siteStartDate?.trim();
	if (startDate && /^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
		const start = Date.parse(`${startDate}T00:00:00Z`);
		// 拒绝被 Date 自动进位的日期，例如 2026-02-30。
		if (
			Number.isFinite(start) &&
			new Date(start).toISOString().slice(0, 10) === startDate
		) {
			const parts = new Intl.DateTimeFormat("en-CA", {
				timeZone,
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			}).formatToParts(new Date(now));
			const calendar = Object.fromEntries(
				parts.map(({ type, value }) => [type, value]),
			);
			// 用 UTC 表示日历日期，仅用于相减；避开夏令时造成的 23/25 小时日。
			const today = Date.parse(
				`${calendar.year}-${calendar.month}-${calendar.day}T00:00:00Z`,
			);
			return Math.max(0, Math.floor((today - start) / DAY_MS));
		}
	}

	return Number.isFinite(earliestPublished)
		? Math.max(0, Math.floor((now - earliestPublished) / DAY_MS))
		: 0;
}
