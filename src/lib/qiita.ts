import { z } from "zod";

const apiUrl = "https://qiita.com/api/v2/users/muhi111/items";
const articleSchema = z
  .object({
    title: z.string().trim().min(1),
    url: z.string().regex(/^https:\/\/qiita\.com\/muhi111\/items\/[a-z0-9]+$/),
    created_at: z.iso.datetime({ offset: true }),
  })
  .transform(({ title, url, created_at }) => ({
    title,
    url,
    publishedAt: created_at.slice(0, 7),
  }));
const responseSchema = z.array(articleSchema);
type Article = z.infer<typeof articleSchema>;

export async function fetchQiitaArticles(): Promise<Article[]> {
  const articles: Article[] = [];
  for (let page = 1; ; page++) {
    const response = await fetch(`${apiUrl}?per_page=100&page=${page}`, {
      signal: AbortSignal.timeout(5000),
      credentials: "omit",
    });
    if (!response.ok) throw new Error(`Qiita API returned ${response.status}`);
    const items = responseSchema.parse(await response.json());
    articles.push(...items);
    if (items.length < 100) return articles;
  }
}
