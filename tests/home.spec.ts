import type { Locator } from "@playwright/test";
import { expect, test } from "@playwright/test";

import articles from "../src/data/articles.json" with { type: "json" };
import internships from "../src/data/internships.json" with { type: "json" };
import qualifications from "../src/data/qualifications.json" with {
  type: "json",
};
import socialLinks from "../src/data/social-links.json" with { type: "json" };

const profileName = "muhi111";
const profileDescription = "muhi111のポートフォリオです。";
const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
      page.getByRole("heading", { level: 1, name: profileName }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: `${profileName}のプロフィールアイコン`,
      }),
    ).toBeVisible();

    for (const sectionName of ["インターン", "保有資格", "記事"]) {
      await expect(
        page.getByRole("heading", { level: 2, name: sectionName }),
      ).toBeVisible();
    }
  });

  test("sets document metadata", async ({ page }) => {
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      profileDescription,
    );
    await expect(page.locator('meta[name="author"]')).toHaveAttribute(
      "content",
      profileName,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      profileName,
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute("content", profileDescription);
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
      /^https:\/\/muhi111\.com\/_astro\/.+\.png$/,
    );
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      "href",
      "/assets/icon.svg",
    );
  });

  test("shows external profile links", async ({ page }) => {
    for (const link of socialLinks) {
      const profileLink = page.getByRole("link", {
        name: `${link.label}を開く`,
      });

      await expect(profileLink).toHaveAttribute("href", link.url);
      await expectExternalLinkAttributes(profileLink);
    }
  });

  test("shows portfolio content", async ({ page }) => {
    for (const internship of internships) {
      const internshipHeading = page.getByRole("heading", {
        level: 3,
        name: internship.organization,
      });
      const internshipItem = page.getByRole("listitem").filter({
        has: internshipHeading,
      });

      await expect(internshipHeading).toBeVisible();
      await expect(
        internshipItem.getByText(internship.description, { exact: true }),
      ).toBeVisible();

      const dateText = [
        internship.startDate,
        internship.endDate ?? (internship.current ? "現在" : undefined),
      ]
        .filter(Boolean)
        .join(" - ");
      await expect(
        internshipItem.getByText(dateText, { exact: true }),
      ).toBeVisible();
    }

    for (const qualification of qualifications) {
      const qualificationHeading = page.getByRole("heading", {
        level: 3,
        name: qualification.name,
      });
      const qualificationItem = page.getByRole("listitem").filter({
        has: qualificationHeading,
      });

      await expect(qualificationHeading).toBeVisible();
      await expect(
        qualificationItem.getByText(qualification.issuer, { exact: true }),
      ).toBeVisible();
      await expect(
        qualificationItem.getByText(qualification.acquiredAt, { exact: true }),
      ).toBeVisible();
    }

    for (const article of articles) {
      const articleLink = page.getByRole("link", {
        name: new RegExp(escapeRegExp(article.title)),
      });
      const articleItem = page.getByRole("listitem").filter({
        has: articleLink,
      });

      await expect(articleLink).toHaveAttribute("href", article.url);
      await expectExternalLinkAttributes(articleLink);
      await expect(
        articleItem.getByText(article.publishedAt, { exact: true }),
      ).toBeVisible();
      await expect(
        articleItem.getByText(article.source, { exact: true }),
      ).toBeVisible();
    }
  });
});

test.describe("external links", () => {
  test("all published links are reachable", async ({ request }, testInfo) => {
    test.skip(
      testInfo.project.name !== "chromium",
      "Run external link checks once.",
    );

    const links = [...socialLinks, ...articles].map((link) => link.url);

    for (const url of links) {
      const response = await request.get(url, {
        failOnStatusCode: false,
        timeout: 15_000,
      });

      expect(response.status(), url).toBeLessThan(400);
    }
  });
});
