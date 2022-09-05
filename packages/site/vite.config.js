import { sveltekit } from "@sveltejs/kit/vite";
import svelteSvg from "vite-plugin-svelte-svg";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    svelteSvg({
      requireSuffix: true,
      svgoConfig: {},
    }),
    sveltekit(),
  ],
};

export default config;
