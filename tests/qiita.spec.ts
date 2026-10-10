import { expect, test } from "@playwright/test";
import { fetchQiitaArticles } from "../src/lib/qiita";

const article = {
  title: "日本語の記事",
  url: "https://qiita.com/muhi111/items/abcdef123456",
  created_at: "2026-10-10T12:00:00+09:00",
};

test.beforeEach(() => {
  test.skip(
    test.info().project.name !== "chromium",
    "Server-side fetch tests run once.",
  );
});

test("fetches all pages at build time", async () => {
  const originalFetch = globalThis.fetch;
  const pages: string[] = [];
  globalThis.fetch = async (input) => {
    const page = new URL(String(input)).searchParams.get("page") ?? "1";
    pages.push(page);
    return Response.json(page === "1" ? Array(100).fill(article) : [article]);
  };
  try {
    const articles = await fetchQiitaArticles();
    expect(articles).toHaveLength(101);
    expect(articles[100]).toEqual({
      title: article.title,
      url: article.url,
      publishedAt: "2026-10",
    });
    expect(pages).toEqual(["1", "2"]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

for (const failure of [
  "API unavailable",
  "invalid response",
  "later page unavailable",
] as const) {
  test(`fails instead of publishing incomplete articles: ${failure}`, async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (input) => {
      if (failure === "invalid response")
        return Response.json([{ ...article, url: "javascript:alert(1)" }]);
      if (
        failure === "later page unavailable" &&
        String(input).endsWith("page=1")
      )
        return Response.json(Array(100).fill(article));
      return new Response(null, { status: 503 });
    };
    try {
      await expect(fetchQiitaArticles()).rejects.toThrow();
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
}
