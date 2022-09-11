import vercel from "@sveltejs/adapter-vercel";
import sveltepreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),
  },
  preprocess: sveltepreprocess({
    postcss: true,
  }),
};

export default config;
