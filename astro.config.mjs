import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import Icons from "unplugin-icons/vite";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), svelte(), mdx(), sitemap()],
  site: "https://www.aaradh.com.np",
  vite: {
    plugins: [
      Icons({
        compiler: "svelte",
      }),
    ],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
