import purgecss from "@fullhuman/postcss-purgecss";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://muhi111.com",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          purgecss({
            content: ["./src/**/*.astro", "./src/**/*.ts"],
            // Astro adds these attributes when scoping component styles.
            safelist: [/^data-astro-cid-/],
            fontFace: true,
            keyframes: true,
            variables: true,
          }),
        ],
      },
    },
  },
});
