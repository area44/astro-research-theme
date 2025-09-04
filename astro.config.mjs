import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

const site = process.env.SITE || "localhost://4321";
const base = process.env.BASE || "/";

export default defineConfig({
  site,
  base,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
