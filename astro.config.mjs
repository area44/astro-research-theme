import { defineConfig } from "astro/config";

const site = process.env.SITE || "localhost://4321";
const base = process.env.BASE || "/";

export default defineConfig({
  site,
  base,
});
