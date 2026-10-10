type SocialLink = {
  label: string;
  url: `https://${string}`;
};

export const profile = {
  name: "muhi111",
  description:
    "Notes on web development, infrastructure, and self-hosting by muhi111.",
  bio: "I write about web development, infrastructure, and self-hosting.",
  links: [
    { label: "GitHub", url: "https://github.com/muhi111" },
    { label: "Qiita", url: "https://qiita.com/muhi111" },
    { label: "Blog", url: "https://muhi111.hatenablog.com/" },
  ] satisfies SocialLink[],
};
