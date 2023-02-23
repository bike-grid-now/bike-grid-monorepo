import { defineConfig } from "astro/config";
import svelteSvg from "vite-plugin-svelte-svg";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    plugins: [svelteSvg()],
  },
  output: "server",
  adapter: vercel({
    analytics: true
  }),
});
