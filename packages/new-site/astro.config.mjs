import { defineConfig } from "astro/config";
import svelteSvg from "vite-plugin-svelte-svg";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [svelteSvg()]
  },
  output: "server",
  adapter: vercel()
});