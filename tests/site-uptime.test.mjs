import assert from "node:assert/strict";
import test from "node:test";
import { getSiteRunningDays } from "../src/utils/site-uptime.ts";

const NOW = Date.parse("2026-10-08T04:00:00Z");
const EARLIEST_POST = Date.parse("2026-10-01T00:00:00Z");

test("configured launch date overrides post dates, including an empty blog", () => {
	for (const earliest of [
		EARLIEST_POST,
		Date.parse("2026-01-01"),
		Number.POSITIVE_INFINITY,
	]) {
		assert.equal(
			getSiteRunningDays("2026-06-15", earliest, "Asia/Shanghai", NOW),
			115,
		);
	}
});

test("running days follow the site's calendar-day boundary", () => {
	assert.equal(
		getSiteRunningDays(
			"2026-06-15",
			Number.POSITIVE_INFINITY,
			"Asia/Shanghai",
			Date.parse("2026-06-15T15:59:59Z"),
		),
		0,
	);
	assert.equal(
		getSiteRunningDays(
			"2026-06-15",
			Number.POSITIVE_INFINITY,
			"Asia/Shanghai",
			Date.parse("2026-06-15T16:00:00Z"),
		),
		1,
	);
});

test("calendar days remain whole across daylight saving transitions", () => {
	assert.equal(
		getSiteRunningDays(
			"2025-03-08",
			Number.POSITIVE_INFINITY,
			"America/New_York",
			Date.parse("2025-03-10T04:00:00Z"),
		),
		2,
	);
	assert.equal(
		getSiteRunningDays(
			"2025-11-01",
			Number.POSITIVE_INFINITY,
			"America/New_York",
			Date.parse("2025-11-03T05:00:00Z"),
		),
		2,
	);
});

test("a valid leap day works and future launch dates clamp to zero", () => {
	assert.equal(
		getSiteRunningDays(
			"2024-02-29",
			Number.POSITIVE_INFINITY,
			"UTC",
			Date.parse("2024-03-01T00:00:00Z"),
		),
		1,
	);
	assert.equal(
		getSiteRunningDays("2026-10-09", EARLIEST_POST, "Asia/Shanghai", NOW),
		0,
	);
});

test("omitted, empty and invalid launch dates preserve the legacy fallback", () => {
	for (const date of [
		undefined,
		"",
		" ",
		"2026-02-30",
		"2026-13-01",
		"2026/06/15",
	]) {
		assert.equal(
			getSiteRunningDays(date, EARLIEST_POST, "Asia/Shanghai", NOW),
			7,
		);
		assert.equal(
			getSiteRunningDays(date, Number.POSITIVE_INFINITY, "Asia/Shanghai", NOW),
			0,
		);
	}
});
