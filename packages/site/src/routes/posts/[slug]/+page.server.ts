import { error } from "@sveltejs/kit";
import { headers } from "$lib/caching";
import { postFromSlug } from "$lib/sanity";

/** @type {import('./$types').PageLoad} */
export async function load({ params: { slug }, setHeaders }) {
  const post = await postFromSlug(slug);

  setHeaders(headers);

  if (post !== null) {
    return {
      post,
    };
  }

  throw error(404, "Not found");
}
