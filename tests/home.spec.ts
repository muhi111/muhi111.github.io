import { expect, test } from "@playwright/test";
import {
	certificationsAndAchievementsData,
	educationData,
	internshipsData,
} from "../src/data/sectionsData";

test.describe("ホーム画面", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("主要な見出しが表示されること", async ({ page }) => {
		for (const item of educationData) {
			await expect(
				page.getByRole("heading", { name: item.title, level: 3 }),
			).toBeVisible();
		}
		for (const item of certificationsAndAchievementsData) {
			await expect(
				page.getByRole("heading", { name: item.title, level: 3 }),
			).toBeVisible();
		}
		for (const item of internshipsData) {
			await expect(
				page.getByRole("heading", { name: item.title, level: 3 }),
			).toBeVisible();
		}
	});
});
