import { test, expect } from "@playwright/test";
import { LAYOUT_CONSTANTS } from "../src/constants/layout";

test.describe("ナビゲーションとサイドバー", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("デスクトップ: サイドバーが表示され機能すること", async ({ page, isMobile }) => {
    if (isMobile) test.skip();

    // アプリケーションのブレークポイントより広い画面幅を設定し、デスクトップ表示を強制する
    await page.setViewportSize({
      width: LAYOUT_CONSTANTS.NARROW_SCREEN_BREAKPOINT + 10,
      height: 800,
    });

    const sidebarNav = page.locator("nav").first();
    await expect(sidebarNav).toBeVisible();

    await page.getByRole("button", { name: "Articles", exact: true }).click();
    await expect(page).toHaveURL("/#/articles");
    await page.getByRole("button", { name: "Works", exact: true }).click();
    await expect(page).toHaveURL("/#/works");
    await page.getByRole("button", { name: "Skills", exact: true }).click();
    await expect(page).toHaveURL("/#/skills");
    await page.getByRole("button", { name: "Home", exact: true }).click();
    await expect(page).toHaveURL("/#/");
  });

  test("モバイル: サイドバーの開閉とオーバーレイ動作", async ({ page, isMobile }) => {
    if (!isMobile) test.skip();

    const toggleButton = page.getByLabel("Toggle Sidebar");
    const sidebarNav = page.locator("nav").first();

    // 初期状態: サイドバーは閉じている(非表示)
    await expect(sidebarNav).toBeHidden();

    // ケース1: トグルボタンで開き、リンク遷移で自動的に閉じること
    await toggleButton.click();
    await expect(sidebarNav).toBeVisible();

    await page.getByRole("button", { name: "Articles", exact: true }).click();
    await expect(page).toHaveURL("/#/articles");
    await expect(sidebarNav).toBeHidden();

    // ケース2: オーバーレイ(背景)クリックで閉じること
    await toggleButton.click();
    await expect(sidebarNav).toBeVisible();
    await page.mouse.click(LAYOUT_CONSTANTS.SIDEBAR_WIDTH_NUMBER + 10, 200);
    await expect(sidebarNav).toBeHidden();

    // ケース3: トグルボタン再クリックで閉じること
    await toggleButton.click();
    await expect(sidebarNav).toBeVisible();
    await toggleButton.click();
    await expect(sidebarNav).toBeHidden();
  });
});
