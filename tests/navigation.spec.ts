import { expect, test } from "@playwright/test";

test.describe("ナビゲーションとサイドバー", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("デスクトップ: サイドバーが表示され機能すること", async ({
		page,
		isMobile,
	}) => {
		if (isMobile) test.skip();

		// アプリケーションのブレークポイントより広い画面幅を設定し、デスクトップ表示を強制する
		await page.setViewportSize({
			width: 1024,
			height: 800,
		});

		const sidebarNav = page.locator("nav").first();
		await expect(sidebarNav).toBeVisible();

		await page.getByRole("link", { name: "Articles", exact: true }).click();
		await expect(page).toHaveURL(/\/articles\/?$/);
		await page.getByRole("link", { name: "Works", exact: true }).click();
		await expect(page).toHaveURL(/\/works\/?$/);
		await page.getByRole("link", { name: "Skills", exact: true }).click();
		await expect(page).toHaveURL(/\/skills\/?$/);
		await page.getByRole("link", { name: "Home", exact: true }).click();
		await expect(page).toHaveURL(/\/$/);
	});

	test("モバイル: サイドバーの開閉とオーバーレイ動作", async ({
		page,
		isMobile,
	}) => {
		if (!isMobile) test.skip();

		const toggleButton = page.getByLabel("Toggle Sidebar");
		const sidebarNav = page.locator("nav").first();

		// 初期状態: サイドバーは閉じている(非表示)
		await expect(sidebarNav).toBeHidden();

		// ケース1: トグルボタンで開き、リンク遷移で新しいページが読み込まれる（デフォルトで閉じる）こと
		await toggleButton.click();
		await expect(sidebarNav).toBeVisible();

		// `force: true` は pointer-events: none (visibility: hidden) な要素も無理やりクリックしてしまうが、
		// 遷移に時間がかかったり、レイアウトの問題で遷移しない場合があるため、明示的に waitFor() または goto() をテストする。
		// ここではUIからのクリックで遷移するかテストしたいため、リンクが可視になるのを待ってからクリックする。
		const articlesLink = page.getByRole("link", {
			name: "Articles",
			exact: true,
		});
		await articlesLink.waitFor({ state: "visible" });
		await articlesLink.click();
		await page.waitForURL(/\/articles\/?$/);
		await expect(page).toHaveURL(/\/articles\/?$/);
		await expect(sidebarNav).toBeHidden();

		// ケース2: オーバーレイ(背景)クリックで閉じること
		await toggleButton.click();
		await expect(sidebarNav).toBeVisible();
		await page
			.locator("#sidebar-overlay")
			.click({ position: { x: 300, y: 100 }, force: true });
		await expect(sidebarNav).toBeHidden();

		// ケース3: トグルボタン再クリックで閉じること
		await toggleButton.click();
		await expect(sidebarNav).toBeVisible();
		await toggleButton.click();
		await expect(sidebarNav).toBeHidden();
	});
});
