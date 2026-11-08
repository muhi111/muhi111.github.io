import type { Locator } from "@playwright/test";
import { expect, test } from "@playwright/test";

const profileName = "muhi111";
const expectExternalLinkAttributes = async (link: Locator) => {
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", "noopener noreferrer");
};

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows the profile header and main sections", async ({ page }) => {
    await expect(page).toHaveTitle(profileName);
    await expect(
      page.getByRole("img", {
        name: `${profileName}'s profile icon`,
      }),
    ).toBeVisible();

    await expect(page.locator("#qiita-articles")).toBeVisible();
  });

  test("decodes the profile icon and preserves pixel art rendering", async ({
    page,
  }) => {
    const icon = page.getByRole("img", {
      name: `${profileName}'s profile icon`,
    });

    await icon.evaluate((image: HTMLImageElement) => image.decode());
    await expect(icon).toHaveCSS("image-rendering", "pixelated");
  });

  test("sets document metadata", async ({ page }) => {
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator('meta[name="author"]')).toHaveAttribute(
      "content",
      profileName,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      profileName,
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "website",
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      "https://muhi111.com/",
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /^https:\/\/muhi111\.com\/_astro\/.+\.webp$/,
    );
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      "href",
      /^(?:\/_astro\/icon\.[^/]+\.svg|data:image\/svg\+xml[;,])/,
    );
  });

  test("shows external profile links", async ({ page }) => {
    for (const link of [
      { label: "GitHub", url: "https://github.com/muhi111" },
      { label: "Qiita", url: "https://qiita.com/muhi111" },
    ]) {
      const profileLink = page.getByRole("link", {
        name: link.label,
        exact: true,
      });

      await expect(profileLink).toHaveAttribute("href", link.url);
      await expectExternalLinkAttributes(profileLink);
      const bounds = await profileLink.boundingBox();
      expect(bounds?.height).toBeGreaterThanOrEqual(24);
    }
  });

  test("renders articles without browser API requests", async ({ page }) => {
    let apiRequests = 0;
    await page.route("https://qiita.com/api/v2/**", (route) => {
      apiRequests++;
      return route.abort();
    });
    await page.reload();
    const links = page.locator("#qiita-articles a");
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute(
        "href",
        /^https:\/\/qiita\.com\/muhi111\/items\/[a-z0-9]+$/,
      );
      await expect(link).toHaveAttribute("lang", "ja");
      await expectExternalLinkAttributes(link);
    }
    await expect(page.getByRole("link", { name: "More on Qiita" })).toHaveCount(
      0,
    );
    await expect(page.locator("script")).toHaveCount(0);
    expect(apiRequests).toBe(0);
  });

  test("renders articles with JavaScript disabled", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(
      test.info().project.use.baseURL ?? "http://localhost:4321/",
    );
    expect(await page.locator("#qiita-articles a").count()).toBeGreaterThan(0);
    await context.close();
  });
});

test.describe("external links", () => {
  test("all published links are reachable", async ({
    page,
    request,
  }, testInfo) => {
    test.skip(
      testInfo.project.name !== "chromium",
      "Run external link checks once.",
    );

    await page.goto("/");
    const links = await page
      .locator('a[href^="https://"]')
      .evaluateAll((anchors) => [
        ...new Set(anchors.map((anchor) => (anchor as HTMLAnchorElement).href)),
      ]);
    expect(links.length).toBeGreaterThan(0);

    for (const url of links) {
      const response = await request.get(url, {
        failOnStatusCode: false,
        timeout: 15_000,
      });

      expect(response.status(), url).toBeLessThan(400);
    }
  });
});
