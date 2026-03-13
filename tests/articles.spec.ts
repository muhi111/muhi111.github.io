import { expect, test } from "@playwright/test";
import { articlesData } from "../src/data/articlesData";

test.describe("記事一覧画面", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/articles");
	});

	test("ページタイトルが表示されること", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "Articles", level: 1, exact: true }),
		).toBeVisible();
	});

	test("すべての記事タイトルが表示されること", async ({ page }) => {
		for (const article of articlesData) {
			await expect(
				page.getByRole("heading", {
					name: article.title,
					level: 2,
					exact: true,
				}),
			).toBeVisible();
		}
	});

	test("すべての記事リンクが新しいタブで開く属性を持っていること", async ({
		page,
	}) => {
		for (const article of articlesData) {
			const link = page.getByRole("link").filter({
				has: page.getByRole("heading", {
					name: article.title,
					level: 2,
					exact: true,
				}),
			});
			await expect(link).toHaveAttribute("target", "_blank");
			await expect(link).toHaveAttribute("rel", "noopener noreferrer");
		}
	});
});
