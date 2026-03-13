import { expect, test } from "@playwright/test";
import skillsData from "../src/data/skillsData";

test.describe("Skills画面", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/skills");
	});

	test("ページタイトルが表示されること", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "Skills", level: 1, exact: true }),
		).toBeVisible();
	});

	test("すべてのスキルカテゴリとスキル名が表示されること", async ({ page }) => {
		for (const category of skillsData) {
			await expect(
				page.getByRole("heading", {
					name: category.category,
					level: 2,
					exact: true,
				}),
			).toBeVisible();
			for (const skill of category.skills) {
				await expect(
					page.getByRole("heading", {
						name: skill.name,
						level: 3,
						exact: true,
					}),
				).toBeVisible();
			}
		}
	});
});
