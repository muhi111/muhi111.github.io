import { expect, test } from "@playwright/test";
import { worksData } from "../src/data/worksData";

test.describe("Works画面", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/works");
	});

	test("ページタイトルが表示されること", async ({ page }) => {
		await expect(
			page.getByRole("heading", { name: "Works", level: 1, exact: true }),
		).toBeVisible();
	});

	test("すべての作品カードが表示されること", async ({ page }) => {
		for (const work of worksData) {
			await expect(
				page.getByRole("heading", { name: work.title, level: 2, exact: true }),
			).toBeVisible();
		}
	});

	test("作品カードをクリックすると詳細モーダルが開き、正しい内容が表示されること", async ({
		page,
	}) => {
		for (const targetWork of worksData) {
			const cardTitle = page.getByRole("heading", {
				name: targetWork.title,
				level: 2,
				exact: true,
			});
			await cardTitle.scrollIntoViewIfNeeded();
			await cardTitle.click();
			const modal = page.getByRole("dialog", { name: targetWork.title });
			await expect(modal).toBeVisible();
			await expect(
				modal.getByRole("heading", {
					name: targetWork.title,
					level: 3,
					exact: true,
				}),
			).toBeVisible();
			await modal.getByRole("button", { name: "Close" }).click();
			await expect(modal).toBeHidden();
		}
	});

	test("詳細モーダルの閉じるボタンでモーダルが閉じること", async ({ page }) => {
		const targetWork = worksData[0];
		const cardTitle = page.getByRole("heading", {
			name: targetWork.title,
			level: 2,
			exact: true,
		});
		await cardTitle.scrollIntoViewIfNeeded();
		await cardTitle.click();

		const modal = page.getByRole("dialog", { name: targetWork.title });
		await expect(modal).toBeVisible();
		await modal.getByRole("button", { name: "Close" }).click();
		await expect(modal).toBeHidden();
	});

	test("詳細モーダルの背景をクリックするとモーダルが閉じること", async ({
		page,
	}) => {
		const targetWork = worksData[0];
		const cardTitle = page.getByRole("heading", {
			name: targetWork.title,
			level: 2,
			exact: true,
		});
		await cardTitle.scrollIntoViewIfNeeded();
		await cardTitle.click();

		const modal = page.getByRole("dialog", { name: targetWork.title });
		await expect(modal).toBeVisible();
		await page.mouse.click(0, 0);
		await expect(modal).toBeHidden();
	});
});
