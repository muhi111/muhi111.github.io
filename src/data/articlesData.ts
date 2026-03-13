export interface Article {
	id: string;
	title: string;
	url: string;
	publishedAt: string;
}

export const articlesData: Article[] = [
	{
		id: "article-1",
		title: "Intel内蔵GPUを使ってWSL(Docker)上でPDFのパスワード解析をしたい",
		url: "https://qiita.com/muhi111/items/25304d49adf63d189ca7",
		publishedAt: "2024年10月",
	},
	{
		id: "article-2",
		title:
			"Cloudflare tunnelとミニPCを使ってGoogleフォトライクな写真管理サーバをセルフホストする",
		url: "https://qiita.com/muhi111/items/7a3a5aa2217fed9adb06",
		publishedAt: "2024年10月",
	},
	{
		id: "article-3",
		title: "Google Compute Engine(GCE)をきちんと無料枠内で使う 2025年4月版",
		url: "https://qiita.com/muhi111/items/24b881975f98e0409ef7",
		publishedAt: "2025年4月",
	},
	{
		id: "article-4",
		title: "はてなのサマーインターン2025に参加しました！",
		url: "https://muhi111.hatenablog.com/entry/2025/09/09/122128",
		publishedAt: "2025年9月",
	},
	{
		id: "article-5",
		title: "パスキーへの自動アップグレードの実装",
		url: "https://qiita.com/muhi111/items/4088b130f6d1e57fcade",
		publishedAt: "2025年9月",
	},
];
